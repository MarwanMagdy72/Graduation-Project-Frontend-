import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

export default function CreateCompanyModal({ open, onClose, onCreate }) {
  const [companyData, setCompanyData] = useState({
    name: "",
    price: "",
    image: null,
    description: "",
    lat: "",
    long: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setCompanyData({
      ...companyData,
      [name]: files ? files[0] : value,
    });
  };

  const handleCreate = () => {
    onCreate(companyData);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Create Company
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={companyData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Price"
          name="price"
          value={companyData.price}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Image"
          name="image"
          type="file"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          value={companyData.description}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Latitude"
          name="lat"
          value={companyData.lat}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Longitude"
          name="long"
          value={companyData.long}
          onChange={handleChange}
        />
        <Button
          onClick={handleCreate}
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Create
        </Button>
      </Box>
    </Modal>
  );
}
