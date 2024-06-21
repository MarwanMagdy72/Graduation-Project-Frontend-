import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { APIsContext } from "../../Context/APIsContext";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UpdateUserModal from "./UpdateUserModal";
import DeleteConfirmationModal from "../../Components/DeleteConfirmationModal ";

const columns = (handleDelete, handleUpdateModalOpen) => [
  {
    field: "id",
    headerName: "ID",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "update",
    headerName: "Update",
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Button
        color="primary"
        variant="outlined"
        onClick={() => handleUpdateModalOpen(params.row)}
      >
        <EditIcon />
      </Button>
    ),
  },
  {
    field: "delete",
    headerName: "Delete",
    align: "center",
    flex: 1,
    headerAlign: "center",
    renderCell: (params) => (
      <Button
        color="error"
        variant="outlined"
        onClick={() => handleDelete(params.row)}
      >
        <DeleteIcon />
      </Button>
    ),
  },
];

export default function Users() {
  const { getUsers, deleteUser, updateUser } = useContext(APIsContext);
  const [contactsData, setContactsData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      const res = await getUsers();
      if (res) {
        setContactsData(res);
      }
    }
    fetchUsers();
  }, [getUsers]);

  const handleDelete = (user) => {
    setSelectedUser(user);
    setOpenDeleteConfirmation(true);
  };

  const handleUpdateModalOpen = (user) => {
    setSelectedUser(user);
    setOpenUpdateModal(true);
  };

  const handleUpdateModalClose = () => {
    setOpenUpdateModal(false);
    setSelectedUser(null);
  };

  const handleUpdate = async (updatedUserData) => {
    if (!selectedUser) {
      console.error("No user selected for update.");
      return;
    }

    const { id } = selectedUser;

    const res = await updateUser(id, updatedUserData);

    if (res) {
      setContactsData((prevData) =>
        prevData.map((user) =>
          user.id === id ? { ...user, ...updatedUserData } : user
        )
      );
      handleUpdateModalClose();
    } else {
      console.error(`Failed to update user with ID ${id}`);
    }
  };

  const handleDeleteConfirmationClose = () => {
    setOpenDeleteConfirmation(false);
    setSelectedUser(null);
  };

  const handleDeleteConfirmation = async () => {
    if (selectedUser) {
      const res = await deleteUser(selectedUser.id);
      if (res) {
        setContactsData(
          contactsData.filter((contact) => contact.id !== selectedUser.id)
        );
      } else {
        console.error(`Failed to delete user with ID ${selectedUser.id}`);
      }
    }
    handleDeleteConfirmationClose();
  };

  return (
    <>
      <Box sx={{ height: "auto", width: "100%", m: "auto" }}>
        <DataGrid
          rows={contactsData}
          columns={columns(handleDelete, handleUpdateModalOpen)}
          autoHeight
          pageSize={5}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
      </Box>

      <UpdateUserModal
        open={openUpdateModal}
        onClose={handleUpdateModalClose}
        onUpdate={handleUpdate}
        userData={selectedUser}
      />

      <DeleteConfirmationModal
        open={openDeleteConfirmation}
        onClose={handleDeleteConfirmationClose}
        onConfirm={handleDeleteConfirmation}
        userData={selectedUser}
      />
    </>
  );
}
