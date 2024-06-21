import { Box, useTheme } from "@mui/material";

import { Outlet } from "react-router-dom";


export default function Content({ DrawerHeader }) {
  const theme=useTheme() ;
  return (
    <>
      <Box  component="main" sx={{ flexGrow: 1, p: 3,
          backgroundColor: theme.palette.bodyColor.main ,
      }}>
        <DrawerHeader />

        <Outlet />

      </Box>
    </>
  );
}
