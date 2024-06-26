import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const UserColumns = (handleDelete, handleUpdate) => [
  {
    field: 'id',
    headerName: 'ID',
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'phone',
    headerName: 'Phone',
    flex: 1,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'update',
    headerName: 'Update',
    align: 'center',
    headerAlign: 'center',
    renderCell: (params) => (
      <Button
        color='primary'
        variant='outlined'
        onClick={() => handleUpdate(params.row)}
      >
        <EditIcon />
      </Button>
    ),
  },
  {
    field: 'delete',
    headerName: 'Delete',
    align: 'center',
    flex: 1,
    headerAlign: 'center',
    renderCell: (params) => (
      <Button
        color='error'
        variant='outlined'
        onClick={() => handleDelete(params.row)}
      >
        <DeleteIcon />
      </Button>
    ),
  },
];

export default UserColumns;
