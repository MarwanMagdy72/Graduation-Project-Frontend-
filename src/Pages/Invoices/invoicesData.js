export const columns = [
  {
    field: "id",
    headerName: "ID",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "user_id",
    headerName: "Customer Name",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "weight",
    headerName: "Weight (kg)", 
    flex: 1,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => `${params.row.weight}  kg`, 
  },
  {
    field: "points",
    headerName: "Points",
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
    field: "created_at",
    headerName: "Date",
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
];
