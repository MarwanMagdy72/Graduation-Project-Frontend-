import { Button, Typography } from "@mui/material";

export const createColumns = (fetchConfirmRecyclingOperation) => [
  {
    field: "id",
    headerName: "ID",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "user_name",
    headerName: "Name",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "user_id",
    headerName: "User ID",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "user_email",
    headerName: "Email",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "user_phone",
    headerName: "Phone",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "recycle_id",
    headerName: "Recycle ID",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "recycle_type",
    headerName: "Recycle Type",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "remember_token",
    headerName: "Status",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "18px",
          color: params.value === null ? "red" : "green",
        }}
      >
        {params.value === null ? "pending ⌛" : "confirmed ✅"}
      </Typography>
    ),
  },
  {
    field: "update",
    headerName: "Update",
    align: "center",
    flex: 1,
    headerAlign: "center",
    renderCell: (params) => (
      <Button
        color="success"
        variant="contained"
        onClick={() => fetchConfirmRecyclingOperation(params.row.id)}
        disabled={params.row.remember_token !== null}
      >
        Confirm
      </Button>
    ),
  },
];
