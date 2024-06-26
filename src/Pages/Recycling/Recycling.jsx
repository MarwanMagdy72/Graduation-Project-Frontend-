import { useContext, useEffect, useState } from "react";
import { APIsContext } from "../../Context/APIsContext";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { createColumns } from "./RecyclingColumns.jsx";

const Recycling = () => {
  const { getRecyclingOperation, confirmRecycleOperation } = useContext(APIsContext);
  const [recyclingData, setRecyclingData] = useState([]);
  const [numOfRecyclingOperations, setNumOfRecyclingOperations] = useState("");

  useEffect(() => {
    async function fetchRecyclingOperation() {
      const res = await getRecyclingOperation();
      setRecyclingData(res.data);
      setNumOfRecyclingOperations(res.totalopeartion);
    }
    fetchRecyclingOperation();
  }, [getRecyclingOperation]);

  

  async function fetchConfirmRecyclingOperation(id) {
    await confirmRecycleOperation(id);
    //  to refresh the data after confirming
    fetchRecyclingOperation();
  }

  const columns = createColumns(fetchConfirmRecyclingOperation);

  return (
    <>
      <Typography variant="h4" sx={{ marginBlock: "25px " }}>
        All recycling operations{" "}
        <span className="fw-bolder"> {numOfRecyclingOperations}</span> Operation
      </Typography>
      <Card>
        <Box sx={{ height: "auto", width: "100%", m: "auto" }}>
          <DataGrid
            rows={recyclingData}
            columns={columns}
            autoHeight
            pageSize={5}
            checkboxSelection
            components={{ Toolbar: GridToolbar }}
            getRowId={() => crypto.randomUUID()}
          />
        </Box>
      </Card>
    </>
  );
};

export default Recycling;
