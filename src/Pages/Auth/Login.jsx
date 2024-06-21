import React, { useRef, useState } from "react";
import { Button, Card, TextField, CardContent } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import { useAuth } from "../../Context/authContext";
import { Stack } from "@mui/system";

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const location = useLocation();
  const redirectLocation = location.state?.path || "/";

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(redirectLocation, { replace: true });
    } catch {
      setError("Failed to login, please try again");
    }
    setLoading(false);
  }

  return (
    <>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Card sx={{ maxWidth: 400, margin: "0 auto"}}>
          <CardContent>
            <h2 style={{ textAlign: "center" }}>Login</h2>
            {error && <Alert severity="error"> {error} </Alert>}
            <Alert severity="info">
              {" "}
              Only administrators and managers have access to log in to this
              dashboard.{" "}
            </Alert>
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
              <TextField
                id="password"
                label="Password"
                type="password"
                fullWidth
                inputRef={passwordRef}
                variant="outlined"
                margin="normal"
              />

              <Button
                variant="contained"
                color="success"
                type="submit"
                fullWidth
                disabled={loading}
                sx={{ mt: 3 }}
              >
                Sign In
              </Button>
            </form>
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <Link to={"/forgot-password"}  className="text-success"> Forgot Password </Link>
            </div>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
}

export default Login;
