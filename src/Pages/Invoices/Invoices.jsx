import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns } from "./invoicesData";

export default function Invoices() {
  const theme = useTheme();
  const [invoicesData, setInvoicesData] = useState([]);

  useEffect(() => {
    async function fetchRecycleOperations() {
      try {
        const { data } = await axios.get(
          `https://api-service.cloud/recycle/public_html/api/users/recycle/showallopeartion`
        );
        setInvoicesData(data.data);
      } catch (err) {
        console.error("Error fetching recycle operations:", err);
      }
    }
    fetchRecycleOperations();
  }, []);

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
          Invoices
        </Typography>
        <Typography fontWeight={"bold"}>List of Invoice Balances </Typography>
      </Box>
      <Box sx={{ height: "auto", width: "auto", m: "auto" }}>
        <DataGrid
          checkboxSelection
          rows={invoicesData}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </>
  );
}
