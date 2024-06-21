import React, { useContext, useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  Button,
  Card,
  Typography,
  Box,
  useTheme,
  IconButton,
} from "@mui/material";
import { Stack } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { APIsContext } from "../../Context/APIsContext";
import UpdateCompanyModal from "./UpdateCompanyModal";
import CreateCompanyModal from "./CreateCompanyModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal ";

export default function CompaniesData() {
  const { getCompanies, deleteCompany, updateCompany, createCompany } =
    useContext(APIsContext);
  const [companiesData, setCompaniesData] = useState([]);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [currentCompany, setCurrentCompany] = useState({});
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [companyIdToDelete, setCompanyIdToDelete] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    async function fetchCompanies() {
      const res = await getCompanies();
      if (res) {
        setCompaniesData(res);
      }
    }
    fetchCompanies();
  }, [getCompanies]);

  const handleDelete = async (id) => {
    setCompanyIdToDelete(id);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmed = async () => {
    const res = await deleteCompany(companyIdToDelete);
    if (res) {
      setCompaniesData(
        companiesData.filter((company) => company.id !== companyIdToDelete)
      );
      setDeleteConfirmationOpen(false);
    }
  };

  const handleOpenUpdateModal = (company) => {
    setCurrentCompany(company);
    setOpenUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setOpenUpdateModal(false);
    setCurrentCompany({});
  };

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  const handleUpdate = async () => {
    const { id, name, image, description, price, lat, long } = currentCompany;

    console.log("Updating company with data:", {
      name,
      image,
      description,
      price,
      lat,
      long,
    });

    const res = await updateCompany(id, {
      name,
      image,
      description,
      price,
      lat,
      long,
    });

    if (res) {
      setCompaniesData(
        companiesData.map((company) =>
          company.id === id ? currentCompany : company
        )
      );
      handleCloseUpdateModal();
    } else {
      console.error("Failed to update company");
    }
  };

  const handleCreate = async (newCompanyData) => {
    const res = await createCompany(newCompanyData);
    if (res) {
      setCompaniesData([...companiesData, res]);
      handleCloseCreateModal();
    } else {
      console.error("Failed to create company");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentCompany({ ...currentCompany, [name]: value });
  };

  const columns = [
    {
      field: "id",
      headerName: "Num",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Company Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "update",
      headerName: "Update",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Button
          color="primary"
          variant="outlined"
          onClick={() => handleOpenUpdateModal(params.row)}
        >
          <EditIcon />
        </Button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Button
          color="error"
          variant="outlined"
          onClick={() => handleDelete(params.row.id)}
        >
          <DeleteIcon />
        </Button>
      ),
    },
  ];

  return (
    <>
      <Stack
        sx={{
          marginBlock: "20px",
          marginInline: "20px",
          justifyContent: "space-between",
        }}
        direction={"row"}
      >
        <Typography variant="h5" sx={{ fontWeight: "500" }}>
          Companies and Factories
        </Typography>
        <Stack direction={"row"}>
          <Button
            variant="contained"
            color="success"
            onClick={handleOpenCreateModal}
          >
            Create +
          </Button>
        </Stack>
      </Stack>

      <Card>
        <Box sx={{ height: "auto", width: "100%", m: "auto" }}>
          <DataGrid
            rows={companiesData}
            columns={columns}
            autoHeight
            pageSize={5}
            checkboxSelection
            components={{ Toolbar: GridToolbar }}
            getRowId={() => crypto.randomUUID()}
          />
        </Box>
      </Card>

      <UpdateCompanyModal
        open={openUpdateModal}
        onClose={handleCloseUpdateModal}
        company={currentCompany}
        onChange={handleChange}
        onUpdate={handleUpdate}
      />

      <CreateCompanyModal
        open={openCreateModal}
        onClose={handleCloseCreateModal}
        onCreate={handleCreate}
      />

      <DeleteConfirmationModal
        open={deleteConfirmationOpen}
        onClose={() => setDeleteConfirmationOpen(false)}
        onConfirm={handleDeleteConfirmed}
      />
    </>
  );
}
