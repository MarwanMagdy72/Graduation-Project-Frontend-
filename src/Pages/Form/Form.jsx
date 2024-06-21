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
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/authContext";

export default function Signup() {
  const theme = useTheme();
  const { signUp } = useAuth();
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await signUp(
        data.email,
        data.password,
        `${data.firstName} ${data.lastName}`,
        data.phone,
        data.role,
        data.age
      );
      handleClick();
      reset();
    } catch (error) {
      console.error("Failed to create account", error);
    }
  };

  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regPhoneNumber = /^(\+20\d{2}\d{8})$/;

  const Roles = [
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "User", label: "User" },
  ];

  return (
    <>
      <Box sx={{ mb: "20px" }}>
        <Typography
          color={theme.palette.success.light}
          fontSize={"35px"}
          fontWeight={"bold"}
        >
          Add Member
        </Typography>
        <Typography fontWeight={"bold"}>Create a New Account</Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Box sx={{ display: "flex", gap: 3 }}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={
              Boolean(errors.firstName)
                ? "This field is required & must contain at least 3 characters"
                : ""
            }
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />
          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              Boolean(errors.lastName)
                ? "This field is required & must contain at least 3 characters"
                : ""
            }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Box>
        <TextField
          error={Boolean(errors.email)}
          helperText={Boolean(errors.email) ? "Please enter a valid email" : ""}
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="filled"
        />
        <Box sx={{ display: "flex", gap: 3 }}>
          <TextField
            error={Boolean(errors.phone)}
            helperText={
              Boolean(errors.phone) ? "Please enter a valid phone number" : ""
            }
            {...register("phone", { required: true, pattern: regPhoneNumber })}
            label="Contact Number"
            sx={{ flex: 1 }}
            variant="filled"
          />
          <TextField
            error={Boolean(errors.age)}
            helperText={Boolean(errors.age) ? "Please enter a valid age" : ""}
            {...register("age", { required: true, min: 1 })}
            label="Age"
            sx={{ flex: 1 }}
            type="number"
            variant="filled"
          />
        </Box>
        <TextField
          error={Boolean(errors.password)}
          helperText={
            Boolean(errors.password)
              ? "This field is required & must contain at least 6 characters"
              : ""
          }
          {...register("password", { required: true, minLength: 6 })}
          label="Password"
          type="password"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.confirmPassword)}
          helperText={
            Boolean(errors.confirmPassword)
              ? "This field is required & must match the password"
              : ""
          }
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === watch("password"),
          })}
          label="Confirm Password"
          type="password"
          variant="filled"
        />
        <TextField
          id="outlined-select-role"
          select
          label="Role"
          defaultValue="User"
          variant="filled"
          {...register("role", { required: true })}
        >
          {Roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ alignSelf: "end" }}>
          <Button type="submit" variant="contained" color="success">
            Create Account
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
            sx={{
              width: "100%",
              color: "white",
              backgroundColor: theme.palette.info.dark,
            }}
          >
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}
