import React, { useRef, useState } from "react";
import { Alert, Button, Card, TextField, CardContent } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { currentUser, updateUserEmail, updateUserPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match!");
    }
    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateUserEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to update profile");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Card sx={{ maxWidth: 400, margin: "0 auto" }}>
        <CardContent>
          <h2 style={{ textAlign: "center" }}>Update Profile</h2>
          {error && <Alert severity="error"> {error} </Alert>}
          <form onSubmit={handleSubmit}>
            <TextField
              id="email"
              label="Email"
              type="email"
              fullWidth
              inputRef={emailRef}
              defaultValue={currentUser?.email}
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              fullWidth
              inputRef={passwordRef}
              variant="outlined"
              margin="normal"
            />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              inputRef={confirmPasswordRef}
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
              Update
            </Button>
          </form>
        </CardContent>
      </Card>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <Link to={"/"} className="btn btn-outline-primary">
          Back
        </Link>
      </div>
    </>
  );
}

export default UpdateProfile;
