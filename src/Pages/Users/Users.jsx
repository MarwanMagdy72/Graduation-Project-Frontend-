import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { APIsContext } from '../../Context/APIsContext';
import UserColumns from './UserColumns';
import UpdateUserModal from './UpdateUserModal';
import DeleteConfirmationModal from './../../Components/DeleteConfirmationModal ';

export default function Users() {
  const { getUsers, deleteUser, updateUser } = useContext(APIsContext);
  const [contactsData, setContactsData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const theme = useTheme();

  const fetchUsers = async () => {
    const res = await getUsers();
    if (res) {
      setContactsData(res);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (user) => {
    setSelectedUser(user);
    setOpenDeleteConfirmation(true);
  };

  const handleDeleteConfirmationClose = () => {
    setOpenDeleteConfirmation(false);
    setSelectedUser(null);
  };

  const handleDeleteConfirmation = async () => {
    if (selectedUser) {
      const res = await deleteUser(selectedUser.id);
      if (res) {
        await fetchUsers(); // Refetch users after delete
      } else {
        console.error(`Failed to delete user with ID ${selectedUser.id}`);
      }
    }
    handleDeleteConfirmationClose();
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setOpenUpdateModal(true);
  };

  const handleUpdateModalClose = () => {
    setOpenUpdateModal(false);
    setSelectedUser(null);
  };

  const handleUpdateSubmit = async (updatedData) => {
    if (selectedUser) {
      const res = await updateUser(selectedUser.id, updatedData);
      if (res) {
        await fetchUsers(); // Refetch users after update
      } else {
        console.error(`Failed to update user with ID ${selectedUser.id}`);
      }
    }
    handleUpdateModalClose();
  };

  return (
    <>
      <Box
        sx={{
          mb: '20px',
        }}
      >
        <Typography
          color={theme.palette.success.light}
          fontSize={'35px'}
          fontWeight={'bold'}
        >
          All Users
        </Typography>
      </Box>
      <Box sx={{ height: 'auto', width: '100%', m: 'auto' }}>
        <DataGrid
          rows={contactsData}
          columns={UserColumns(handleDelete, handleUpdate)}
          pageSize={25}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row.id} // Use the id field as the row ID
        />
      </Box>

      <DeleteConfirmationModal
        open={openDeleteConfirmation}
        onClose={handleDeleteConfirmationClose}
        onConfirm={handleDeleteConfirmation}
        userData={selectedUser}
      />

      <UpdateUserModal
        open={openUpdateModal}
        onClose={handleUpdateModalClose}
        onSubmit={handleUpdateSubmit}
        userData={selectedUser}
      />
    </>
  );
}
