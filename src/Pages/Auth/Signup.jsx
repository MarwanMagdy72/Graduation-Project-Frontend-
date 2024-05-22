import React, { useRef, useState } from "react";
import {
  Alert,
  Button,
  Card,
  TextField,
  CardContent,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedRole, setSelectedRole] = useState("admin"); // State to hold selected role
  const { signUp, currentUser } = useAuth();
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match!");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value,
        selectedRole
      );

      navigate("/login");
    } catch {
      setError("Failed to sign up, please try again");
    }
    setLoading(false);
  }

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <>
      <Card sx={{ maxWidth: 400, margin: "0 auto" }}>
        <CardContent>
          <h2 style={{ textAlign: "center" }}>Sign Up</h2>
          {error && <Alert severity="error"> {error} </Alert>}
          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Name"
              type="text"
              fullWidth
              inputRef={nameRef}
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              fullWidth
              inputRef={emailRef}
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
              required
            />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              inputRef={confirmPasswordRef}
              variant="outlined"
              margin="normal"
              required
            />
            <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={selectedRole} // Set selected role
              onChange={handleRoleChange} // Handle role change
              name="radio-buttons-group"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="Admin"
              />
              <FormControlLabel
                value="manager"
                control={<Radio />}
                label="Manager"
              />
            </RadioGroup>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={loading}
              sx={{ mt: 3 }}
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        Already have an account? <Link to={"/login"}>Sign In</Link>
      </div>
    </>
  );
}

export default Signup;
