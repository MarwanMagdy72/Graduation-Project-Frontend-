import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import {
  Box,
  Tooltip,
  styled,
  useTheme,
} from "@mui/material";
import {  useLocation, useNavigate } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";

import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';
import { grey } from "@mui/material/colors";
import './SideBar.css'
const Arr1 = [
  { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
  { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
  {
    text: "Companies",
    icon: <LocalShippingOutlinedIcon />,
    path: "/companies",
  },
];
const Arr2 = [
  { text: "Recycling", icon: <RecyclingOutlinedIcon />, path: "/recycle" },
  
  { text: "Managing", icon: <ManageHistoryOutlinedIcon />, path: "/manage" },

  { text: "Antika ", icon: <FilterVintageOutlinedIcon />, path: "/antika" },

  { text: "Profile Form", icon: <PersonOutlineOutlinedIcon />, path: "/form" },

  { text: "Calendar", icon: <CalendarMonthOutlinedIcon />, path: "/calendar" },

  { text: "FAQ Page", icon: <ContactSupportOutlinedIcon />, path: "/faq",},

];
const Arr3 = [
  { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/barChart" },
  {
    text: "Redial Chart",
    icon: <DonutLargeOutlinedIcon />,
    path: "/redialChart",
  },
  {
    text: "Line Chart",
    icon: <TimelineOutlinedIcon />,
    path: "/lineChart",
  },

];

export default function SideBar({ open, setOpen, DrawerHeader }) {
  const location = useLocation();
  const navigate = useNavigate();
  const drawerWidth = 240;

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = useTheme();

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  return (
    <>
      <Drawer variant="permanent"  open={open} >

        <DrawerHeader sx={{bgcolor:theme.palette.bgcolorSideBar.main }}>
          <IconButton onClick={handleDrawerClose} sx={{color:"white"}}>
            <KeyboardArrowLeftIcon />
          </IconButton>
        </DrawerHeader>

        <List sx={{bgcolor:theme.palette.bgcolorSideBar.main }}>
          {Arr1.map((item, index) => (
            <Tooltip
              ListItem
              key={index}
              title={open ? "" : item.text}
              placement="left-start"
            >
              <Box sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,

                    backgroundColor:
                      location.pathname === item.path 
                      ? theme.palette.mode === "dark"
                          ? grey[600]
                          :"white"
                        : null,

                  }}
                  
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      
                      color:
                      location.pathname === item.path 
                      ? theme.palette.mode === "dark"
                          ? grey[50]
                          : "green"
                        : "white",
                    }}
                    className="hoverIcon"
                  >
                    {item.icon}
                  </ListItemIcon>


                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Box>
            </Tooltip>
          ))}
        </List>
        
        <Divider/> 
        <List  sx={{bgcolor:theme.palette.bgcolorSideBar.main}}>
          {Arr2.map((item, index) => (
            <Tooltip
              key={index}
              title={open ? "" : item.text}
              placement="left-start"
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    backgroundColor:
                    location.pathname === item.path 
                    ? theme.palette.mode === "dark"
                        ? grey[600]
                        :"white"
                      : null,
                  }}
                  onClick={() => {
                    navigate(item.path);
                  }}
                  
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color:
                      location.pathname === item.path 
                      ? theme.palette.mode === "dark"
                          ? grey[50]
                          : "green"
                        : "white",
                    }}
                    className="hoverIcon"
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
        
        <Divider/> 
        <List  sx={{bgcolor:theme.palette.bgcolorSideBar.main}}>
          {Arr3.map((item, index) => (
            <Tooltip
              key={index}
              title={open ? "" : item.text}
              placement="left-start"
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    backgroundColor:
                    location.pathname === item.path 
                    ? theme.palette.mode === "dark"
                        ? grey[600]
                        :"white"
                      : null,
                  }}
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color:
                      location.pathname === item.path 
                      ? theme.palette.mode === "dark"
                          ? grey[50]
                          : "green"
                        : "white", 
                    }}
                    className="hoverIcon"
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>


      </Drawer>
    </>
  );
}


















// import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';