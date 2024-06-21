import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import SortIcon from "@mui/icons-material/Sort";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  Stack,
  Typography,
  alpha,
  styled,
  useTheme,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useAuth } from "../Context/authContext";
import { Link, useNavigate } from "react-router-dom";

export default function TopBar({ open, setOpen, setMode }) {
  const theme = useTheme();
  const drawerWidth = 240;
  const { Logout, currentUser, userDetails } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleLogout = async () => {
    setError("");
    try {
      await Logout();
      navigate("/login");
    } catch {
      setError("Logout Failed!");
    }
  };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: "#ebe9e9",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ bgcolor: theme.palette.bgcolortopbar.main }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
              color: theme.palette.textColor.main,
              ...(open && { display: "none" }),
            }}
          >
            <SortIcon />
          </IconButton>

          <Avatar
            alt="User Avatar"
            src="https://i.pinimg.com/564x/de/7b/df/de7bdf43e2ae039eee0b69d7fa307e4b.jpg"
            sx={{
              width: open ? "75px" : "50px",
              height: open ? "75px" : "50px",
              transition: "0.25s",
            }}
          />
          {currentUser && (
            <Typography
              variant="body1"
              sx={{
                fontSize: "21px",
                marginLeft: "10px",
                color: theme.palette.textColor.main,
              }}
            >
              Hello, {userDetails?.name} ({userDetails?.role})
            </Typography>
          )}

          <Box flexGrow={1} />
          <Stack direction={"row"}>
            <Search
              sx={{
                borderRadius: "15px",
                padding: "4px, 16px, 4px, 16px",
                bgcolor: "#F7F6F8",
                color: "#6E8F72",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                className="btnHover"
              />
            </Search>
            <Box sx={{ marginInline: "12px" }}>
              {theme.palette.mode === "dark" ? (
                <IconButton
                  color={theme.palette.textColor.main}
                  onClick={() => {
                    setMode((prevMode) =>
                      prevMode === "light" ? "dark" : "light"
                    );
                    localStorage.setItem(
                      "currentMode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                  }}
                >
                  <LightModeOutlinedIcon />
                </IconButton>
              ) : (
                <IconButton
                  color={theme.palette.textColor.main}
                  onClick={() => {
                    setMode((prevMode) =>
                      prevMode === "light" ? "dark" : "light"
                    );
                    localStorage.setItem(
                      "currentMode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                  }}
                >
                  <DarkModeOutlinedIcon />
                </IconButton>
              )}
            </Box>

            <Button
              sx={{
                borderRadius: "15px",
                padding: "4px 13px",
                margin: "auto",
                cursor: "pointer",
              }}
              variant="outlined"
              color="success"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
