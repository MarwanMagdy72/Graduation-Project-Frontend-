import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const UpdateUserModal = ({ open, onClose, onUpdate, userData }) => {
  const [updatedUserData, setUpdatedUserData] = useState({});

  useEffect(() => {
    if (userData) {
      setUpdatedUserData(userData);
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onUpdate(updatedUserData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update User</DialogTitle>
      <DialogContent>
        <TextField
          name="name"
          label="Name"
          fullWidth
          value={updatedUserData.name || ""}
          onChange={handleChange}
          sx={{marginTop:'15px'}}
        />
        <TextField
          name="email"
          label="Email"
          fullWidth
          value={updatedUserData.email || ""}
          onChange={handleChange}
          sx={{marginBlock:'15px'}}
        />
        <TextField
          name="phone"
          label="Phone"
          fullWidth
          value={updatedUserData.phone || ""}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          fullWidth
          value={updatedUserData.password || ""}
          onChange={handleChange}
          sx={{marginBlock:'15px'}}
        />
        <TextField
          name="password_confirmation"
          label="Confirm Password"
          type="password"
          fullWidth
          value={updatedUserData.password_confirmation || ""}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateUserModal;
