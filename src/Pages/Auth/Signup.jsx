import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

export default function Signup() {
  const theme = useTheme();
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Admin",
  });

  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name.length >= 3 ? "" : "Name must contain at least 3 characters";
    tempErrors.email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formData.email) ? "" : "Please enter a valid email";
    tempErrors.password = formData.password.length >= 6 ? "" : "Password must contain at least 6 characters";
    tempErrors.confirmPassword = formData.password === formData.confirmPassword ? "" : "Passwords do not match";
    return tempErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempErrors = validate();
    setErrors(tempErrors);

    if (Object.values(tempErrors).some((error) => error)) return;

    try {
      await signUp(formData.email, formData.password, formData.name, formData.role);
      handleClick();
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "Admin",
      });
      navigate("/login");
    } catch (error) {
      console.error("Failed to create account", error);
    }
  };

  const Roles = [
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
  ];

  return (
    <>
      <Box sx={{ mb: "20px" }}>
        <Typography color={theme.palette.info.light} fontSize={"35px"} fontWeight={"bold"}>
          Sign Up
        </Typography>
        <Typography fontWeight={"bold"}>Create a New Account</Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <TextField
          name="name"
          label="Name"
          variant="filled"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />
        <TextField
          name="email"
          label="Email"
          variant="filled"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="filled"
          value={formData.password}
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          variant="filled"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword}
        />
        <TextField
          name="role"
          select
          label="Role"
          variant="filled"
          value={formData.role}
          onChange={handleChange}
        >
          {Roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ alignSelf: "end" }}>
          <Button type="submit" variant="contained">
            Sign Up
          </Button>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            severity="success"
            onClose={handleClose}
            sx={{ width: "100%", color: "white", backgroundColor: theme.palette.info.dark }}
          >
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        Already have an account? <Link to={"/login"}>Sign In</Link>
      </div>
    </>
  );
}
