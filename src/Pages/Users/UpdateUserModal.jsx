import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

const UpdateUserModal = ({ open, onClose, onSubmit, userData }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    password_confirmation: '',
  });

  useEffect(() => {
    if (userData) {
      setFormValues({
        name: userData.name || '',
        email: userData.email || '',
        password: '',
        phone: userData.phone || '',
        password_confirmation: '',
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formValues);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update User</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          value={formValues.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="email"
          label="Email"
          type="email"
          fullWidth
          value={formValues.email}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="phone"
          label="Phone"
          type="text"
          fullWidth
          value={formValues.phone}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="password"
          label="Password"
          type="password"
          fullWidth
          value={formValues.password}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="password_confirmation"
          label="Confirm Password"
          type="password"
          fullWidth
          value={formValues.password_confirmation}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateUserModal;
