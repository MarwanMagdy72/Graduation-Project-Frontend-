import React from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

export default function UpdateCompanyModal({
  open,
  onClose,
  company,
  onChange,
  onUpdate,
}) {
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    onChange({ target: { name, value: files[0] } });
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
          Update Company
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={company.name || ""}
          onChange={onChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Price"
          name="price"
          value={company.price || ""}
          onChange={onChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Image"
          name="image"
          type="file"
          onChange={handleFileChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          value={company.description || ""}
          onChange={onChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Latitude"
          name="lat"
          value={company.lat || ""}
          onChange={onChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Longitude"
          name="long"
          value={company.long || ""}
          onChange={onChange}
        />
        <Button
          onClick={onUpdate}
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Update
        </Button>
      </Box>
    </Modal>
  );
}
