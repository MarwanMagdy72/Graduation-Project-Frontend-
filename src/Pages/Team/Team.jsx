  add-company-and-users-pages
import React, { useEffect, useState } from "react";
 

 
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useAuth } from "../../Context/authContext";

export default function Team() {
  const theme = useTheme();
  const { fetchAllUsers } = useAuth();
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchAllUsers();
      setTeamData(users);
    };
    getUsers();
  }, [fetchAllUsers]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
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
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "role",
      headerName: "Role",
      align: "center",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            sx={{
              p: "8px",
              borderRadius: "4px",
              width: "100px",
              display: "flex",
              justifyContent: "space-evenly",
              textAlign: "center",
              alignItems: "center",
              backgroundColor:
                role === "Admin"
                  ? theme.palette.info.dark
                  : role === "User"
                  ? theme.palette.success.dark
                  : role === "Manager"
                  ? theme.palette.error.main
                  : theme.palette.warning.dark,
            }}
          >
            {role === "User" ? (
              <VerifiedUserOutlinedIcon
                sx={{
                  fontSize: "16px",
                  mr: "2px",
                  color: "white",
                }}
              />
            ) : role === "Admin" ? (
              <AdminPanelSettingsOutlinedIcon
                sx={{
                  fontSize: "16px",
                  mr: "2px",
                  color: "white",
                }}
              />
            ) : role === "Manager" ? (
              <ManageAccountsIcon
                sx={{
                  fontSize: "16px",
                  mr: "2px",
                  color: "white",
                }}
              />
            ) : (
              ""
            )}
            <Typography variant="body" color={"white"}>
              {role}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Box
        sx={{
          mb: "20px",
        }}
      >
        <Typography
          color={theme.palette.success.light}
          fontSize={"35px"}
          fontWeight={"bold"}
        >
          Team
        </Typography>
        <Typography fontWeight={"bold"}>Managing the Team Members</Typography>
      </Box>
      <Box sx={{ minHeight: "75vh", width: "100%" }}>
        <DataGrid
          rows={teamData}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </Box>
    </>
  );
}
