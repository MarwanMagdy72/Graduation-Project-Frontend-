import React, { useRef, useState } from "react";
import { Button, Card, TextField, Alert, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [error, setError] = useState("");
  const { forgotPassword } = useAuth();

  const emailRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await forgotPassword(emailRef.current.value);
      setMessage("Check your inbox to update your password");
    } catch {
      setError("Failed to send a message, please try again");
    }
    setLoading(false);
  }

  return (
    <>
      <Card sx={{ maxWidth: 400, margin: "0 auto" }}>
        <CardContent>
          <h2 style={{ textAlign: "center" }}>Forgot Password</h2>
          {error && <Alert severity="error"> {error} </Alert>}
          {message && <Alert severity="info"> {message} </Alert>}
          <form onSubmit={handleSubmit}>
            <TextField
              id="email"
              label="Email"
              type="email"
              fullWidth
              inputRef={emailRef}
              variant="outlined"
              margin="normal"
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={loading}
              sx={{ mt: 3 }}
            >
              Submit
            </Button>
          </form>

          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Link to={"/login"}>Sign In</Link>
          </div>
        </CardContent>
      </Card>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        Don't have an account? <Link to={"/sign-up"}>Sign Up</Link>
      </div>
    </>
  );
}

export default ForgotPassword;
