import * as React from "react";

import { NavLink, useLocation } from "react-router-dom";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { selectAllThemes, State } from "../Features/Themes/ThemesSlice";

const drawerWidth = 280;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "inherit",
  borderColor: "#f7f7f9",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "inherit",
  borderWidth: "1px",
  borderColor: "#f7f7f9",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

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

interface Props {
  children: React.ReactNode;
}

const Dashboard: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [tempOpen, setTempOpen] = React.useState(false);
  const [dropdown1, setDropdown1] = React.useState(false);
  const [dropdown2, setDropdown2] = React.useState(false);
  const [dropdown3, setDropdown3] = React.useState(false);
  const location = useLocation();
  const { pathname } = location;

  const themeState: State[] = useSelector(selectAllThemes);

  const handleDrawerOpen = () => {
    setTempOpen(false);
  };

  const handleDrawerClose = () => {
    setDropdown1(false);
    setDropdown2(false);
    setDropdown3(false);
    setTempOpen(false);
    setOpen(false);
  };

  const closeDrawer = () => {
    if (tempOpen) {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setOpen(false);
    } else {
      setOpen(open);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        backgroundColor:
          themeState[0].skin === "bordered" ? "white" : "#f7f7f9",
      }}
    >
      <Drawer
        sx={{ margin: 1, display: themeState[0].hidden ? "none" : "block" }}
        variant="permanent"
        open={open}
        onMouseEnter={() => {
          if (!tempOpen && !open) {
            setTempOpen(true);
          }
          setOpen(true);
        }}
        onMouseLeave={closeDrawer}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "20px",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <svg
              width="40"
              fill="none"
              height="22"
              viewBox="0 0 268 150"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                rx="25.1443"
                width="50.2886"
                height="143.953"
                fill="#72E128"
                transform="matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)"
              ></rect>
              <rect
                rx="25.1443"
                width="50.2886"
                height="143.953"
                fill="#72E128"
                transform="matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"
              ></rect>
              <rect
                rx="25.1443"
                width="50.2886"
                height="143.953"
                fillOpacity="0.4"
                fill="url(#paint1_linear_7821_79167)"
                transform="matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"
              ></rect>
              <rect
                rx="25.1443"
                width="50.2886"
                height="143.953"
                fill="#72E128"
                transform="matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"
              ></rect>
              <defs>
                <linearGradient
                  y1="0"
                  x1="25.1443"
                  x2="25.1443"
                  y2="143.953"
                  id="paint0_linear_7821_79167"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop></stop>
                  <stop offset="1" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  y1="0"
                  x1="25.1443"
                  x2="25.1443"
                  y2="143.953"
                  id="paint1_linear_7821_79167"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop></stop>
                  <stop offset="1" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                transition: "all 0.5s ease-in-out",
                fontWeight: 700,
                fontSize: "22px",
                color: "#626477",
                display: open ? "block" : "hidden",
                width: open ? "auto" : "0%",
                overflow: "hidden",
              }}
              className={`transition-all ease-in-out duration-500 font-bold text-2xl text-logo ${
                open ? "block w-auto" : "hidden w-0"
              }`}
            >
              GCX
            </Typography>
          </Box>
          <Box component="div">
            <svg
              className={`w-6 h-6 transition-all ease-in-out duration-500 cursor-pointer ${
                tempOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 22 22"
              xmlns="http://www.w3.org/2000/svg"
              onClick={tempOpen ? handleDrawerOpen : handleDrawerClose}
            >
              <path
                fill="rgba(76, 78, 100, 0.68)"
                d="M11.4854 4.88844C11.0082 4.41121 10.2344 4.41121 9.75716 4.88844L4.51029 10.1353C4.03299 10.6126 4.03299 11.3865 4.51029 11.8638L9.75716 17.1107C10.2344 17.5879 11.0082 17.5879 11.4854 17.1107C11.9626 16.6334 11.9626 15.8597 11.4854 15.3824L7.96674 11.8638C7.48943 11.3865 7.48943 10.6126 7.96674 10.1353L11.4854 6.61667C11.9626 6.13943 11.9626 5.36568 11.4854 4.88844Z"
              ></path>
              <path
                fill="rgba(76, 78, 100, 0.38)"
                d="M15.8683 4.88844L10.6214 10.1353C10.1441 10.6126 10.1441 11.3865 10.6214 11.8638L15.8683 17.1107C16.3455 17.5879 17.1193 17.5879 17.5965 17.1107C18.0737 16.6334 18.0737 15.8597 17.5965 15.3824L14.0779 11.8638C13.6005 11.3865 13.6005 10.6126 14.0779 10.1353L17.5965 6.61667C18.0737 6.13943 18.0737 5.36568 17.5965 4.88844C17.1193 4.41121 16.3455 4.41121 15.8683 4.88844Z"
              ></path>
            </svg>
          </Box>
        </Box>

        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Divider
            sx={{
              height: "2px",
              backgroundColor: "#B6B6C0",
              width: open ? "16px" : "20px",
              marginRight: open ? "12px" : "auto",
              marginLeft: open ? "0px" : "auto",
            }}
          />{" "}
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              fontSize: "14px",
              color: "#B6B6C0",
              display: open ? "block" : "hidden",
              width: open ? "auto" : "0px",
            }}
          >
            MAIN SECTION
          </Typography>
        </Box>
        <List sx={{ paddingLeft: "8px", paddingRight: "8px" }}>
          <Box
            component="div"
            sx={{
              backgroundColor: pathname === "/" ? "primary.main" : "inherit",
              borderRadius: "8px",
            }}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block font-regular mb-2 text-white rounded-lg"
                  : "text-logo font-regular mb-2  block rounded-lg"
              }
              onClick={handleDrawerClose}
            >
              <ListItemButton
                sx={{
                  minHeight: 40,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className={`text-white w-5 h-5 ${
                      pathname === "/" ? "fill-white" : "fill-logo"
                    }`}
                  >
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                  </svg>
                </ListItemIcon>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{
                    transition: "all 0.1s ease-in-out",
                    display: open ? "block" : "hidden",
                    width: open ? "auto" : "0px",
                    overflow: "hidden",
                  }}
                >
                  Dashboard
                </Typography>
              </ListItemButton>
            </NavLink>
          </Box>
          <Box
            component="div"
            sx={{
              backgroundColor:
                pathname === "/users" ? "primary.main" : "inherit",
              borderRadius: "8px",
            }}
          >
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive
                  ? "block font-regular mb-2 text-white rounded-lg"
                  : "text-logo font-regular mb-2  block rounded-lg"
              }
              onClick={handleDrawerClose}
            >
              <ListItemButton
                sx={{
                  minHeight: 40,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className={` text-white w-5 h-5 ${
                      pathname.includes("/users") ? "fill-white" : "fill-logo"
                    }`}
                  >
                    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                  </svg>
                </ListItemIcon>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{
                    transition: "all 0.1s ease-in-out",
                    display: open ? "block" : "hidden",
                    width: open ? "auto" : "0px",
                    overflow: "hidden",
                  }}
                >
                  Users
                </Typography>
              </ListItemButton>
            </NavLink>
          </Box>
          <Box
            component="div"
            sx={{
              backgroundColor:
                pathname === "/forms" ? "primary.main" : "inherit",
              borderRadius: "8px",
            }}
          >
            <NavLink
              to="/forms"
              className={({ isActive }) =>
                isActive
                  ? "block font-regular mb-2 text-white rounded-lg"
                  : "text-logo font-regular mb-2  block rounded-lg"
              }
              onClick={handleDrawerClose}
            >
              <ListItemButton
                sx={{
                  minHeight: 40,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    className={`text-white w-5 h-5 ${
                      pathname.includes("forms") ? "fill-white" : "fill-logo "
                    }`}
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="FormSelectIcon"
                  >
                    <path d="M15 5H18L16.5 7L15 5M5 2H19C20.11 2 21 2.9 21 4V20C21 21.11 20.11 22 19 22H5C3.9 22 3 21.11 3 20V4C3 2.9 3.9 2 5 2M5 4V8H19V4H5M5 20H19V10H5V20M7 12H17V14H7V12M7 16H17V18H7V16Z"></path>
                  </svg>
                </ListItemIcon>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{
                    transition: "all 0.1s ease-in-out",
                    display: open ? "block" : "hidden",
                    width: open ? "auto" : "0px",
                    overflow: "hidden",
                  }}
                >
                  Forms
                </Typography>
              </ListItemButton>
            </NavLink>
          </Box>
        </List>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Divider
            sx={{
              height: "2px",
              backgroundColor: "#B6B6C0",
              width: open ? "16px" : "20px",
              marginRight: open ? "12px" : "auto",
              marginLeft: open ? "0px" : "auto",
            }}
          />{" "}
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              fontSize: "14px",
              color: "#B6B6C0",
              display: open ? "block" : "hidden",
              width: open ? "auto" : "0px",
            }}
          >
            BONUS SECTION
          </Typography>
        </Box>
        <List sx={{ paddingLeft: "8px", paddingRight: "8px" }}>
          <Box
            component="div"
            sx={{
              color: "#626477",
              marginBottom: "8px",
              display: "block",
              borderRadius: "8px",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 40,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: dropdown1 ? "#EDEFF1" : "",
              }}
              onClick={() => {
                setDropdown1(!dropdown1);
                setDropdown2(false);
                setDropdown3(false);
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <svg
                  className={`text-white w-5 h-5 ${
                    open ? "fill-logo" : "fill-logo"
                  } `}
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ArchiveOutlineIcon"
                >
                  <path d="M20 21H4V10H6V19H18V10H20V21M3 3H21V9H3V3M9.5 11H14.5C14.78 11 15 11.22 15 11.5V13H9V11.5C9 11.22 9.22 11 9.5 11M5 5V7H19V5H5Z"></path>
                </svg>
              </ListItemIcon>
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  transition: "all 0.1s ease-in-out",
                  display: open ? "flex" : "hidden",
                  alignItems: "center",
                  width: open ? "auto" : "0px",
                  overflow: "hidden",
                }}
              >
                Utility Pages
                <svg
                  className={`fill-logo w-5 h-5 transition-all ease-in-out duration-500 ml-12 ${
                    dropdown1 ? "rotate-90" : ""
                  }`}
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ChevronRightIcon"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                </svg>
              </Typography>
            </ListItemButton>
            <List
              sx={{
                transition: "all .5s ease-in-out",
                overflow: "hidden",
                height: dropdown1 ? "250px" : "0px",
                opacity: dropdown1 ? "1" : "0",
                marginTop: dropdown1 ? "8px" : "0px",
                paddingTop: "0px",
                paddingBottom: "0px",
              }}
            >
              <Box
                component="div"
                sx={{
                  backgroundColor:
                    pathname === "/util/coming-soon"
                      ? "primary.main"
                      : "inherit",
                  borderRadius: "8px",
                }}
              >
                <NavLink
                  to="/util/coming-soon"
                  className={({ isActive }) =>
                    isActive
                      ? "block font-regular mb-2 text-white rounded-lg"
                      : "text-logo font-regular mb-2  block rounded-lg"
                  }
                >
                  <ListItemButton
                    sx={{
                      minHeight: 40,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        component="div"
                        sx={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          marginLeft: "6px",
                          backgroundColor:
                            pathname === "/util/coming-soon"
                              ? "white"
                              : "#626477",
                        }}
                      />
                    </ListItemIcon>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      sx={{
                        transition: "all 0.5s ease-in-out",
                        display: open ? "block" : "hidden",
                        width: open ? "auto" : "0px",
                        overflow: "hidden",
                      }}
                    >
                      Coming Soon
                    </Typography>
                  </ListItemButton>
                </NavLink>
              </Box>
              <Box
                component="div"
                sx={{
                  backgroundColor:
                    pathname === "/util/under-maintenance"
                      ? "primary.main"
                      : "inherit",
                  borderRadius: "8px",
                }}
              >
                <NavLink
                  to="/util/under-maintenance"
                  className={({ isActive }) =>
                    isActive
                      ? "block font-regular mb-2 text-white rounded-lg"
                      : "text-logo font-regular mb-2  block rounded-lg"
                  }
                >
                  <ListItemButton
                    sx={{
                      minHeight: 40,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        component="div"
                        sx={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          marginLeft: "6px",
                          backgroundColor:
                            pathname === "/util/under-maintenance"
                              ? "white"
                              : "#626477",
                        }}
                      />
                    </ListItemIcon>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      sx={{
                        transition: "all 0.5s ease-in-out",
                        display: open ? "block" : "hidden",
                        width: open ? "auto" : "0px",
                        overflow: "hidden",
                      }}
                    >
                      Under Maintenance
                    </Typography>
                  </ListItemButton>
                </NavLink>
              </Box>
              <Box
                component="div"
                sx={{
                  backgroundColor:
                    pathname === "/util/page-not-found-404"
                      ? "primary.main"
                      : "inherit",
                  borderRadius: "8px",
                }}
              >
                <NavLink
                  to="/util/page-not-found-404"
                  className={({ isActive }) =>
                    isActive
                      ? "block font-regular mb-2 text-white rounded-lg"
                      : "text-logo font-regular mb-2  block rounded-lg"
                  }
                >
                  <ListItemButton
                    sx={{
                      minHeight: 40,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        component="div"
                        sx={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          marginLeft: "6px",
                          backgroundColor:
                            pathname === "/util/page-not-found-404"
                              ? "white"
                              : "#626477",
                        }}
                      />
                    </ListItemIcon>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      sx={{
                        transition: "all 0.5s ease-in-out",
                        display: open ? "block" : "hidden",
                        width: open ? "auto" : "0px",
                        overflow: "hidden",
                      }}
                    >
                      Page Not Found - 404
                    </Typography>
                  </ListItemButton>
                </NavLink>
              </Box>
              <Box
                component="div"
                sx={{
                  backgroundColor:
                    pathname === "/util/not-authorized-401"
                      ? "primary.main"
                      : "inherit",
                  borderRadius: "8px",
                }}
              >
                <NavLink
                  to="/util/not-authorized-401"
                  className={({ isActive }) =>
                    isActive
                      ? "block font-regular mb-2 text-white rounded-lg"
                      : "text-logo font-regular mb-2  block rounded-lg"
                  }
                >
                  <ListItemButton
                    sx={{
                      minHeight: 40,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        component="div"
                        sx={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          marginLeft: "6px",
                          backgroundColor:
                            pathname === "/util/not-authorized-401"
                              ? "white"
                              : "#626477",
                        }}
                      />
                    </ListItemIcon>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      sx={{
                        transition: "all 0.5s ease-in-out",
                        display: open ? "block" : "hidden",
                        width: open ? "auto" : "0px",
                        overflow: "hidden",
                      }}
                    >
                      Not Authorized - 401
                    </Typography>
                  </ListItemButton>
                </NavLink>
              </Box>
              <Box
                component="div"
                sx={{
                  backgroundColor:
                    pathname === "/util/server-error-500"
                      ? "primary.main"
                      : "inherit",
                  borderRadius: "8px",
                }}
              >
                <NavLink
                  to="/util/server-error-500"
                  className={({ isActive }) =>
                    isActive
                      ? "block font-regular mb-2 text-white rounded-lg"
                      : "text-logo font-regular mb-2  block rounded-lg"
                  }
                >
                  <ListItemButton
                    sx={{
                      minHeight: 40,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        component="div"
                        sx={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          marginLeft: "6px",
                          backgroundColor:
                            pathname === "/util/server-error-501"
                              ? "white"
                              : "#626477",
                        }}
                      />
                    </ListItemIcon>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      sx={{
                        transition: "all 0.5s ease-in-out",
                        display: open ? "block" : "hidden",
                        width: open ? "auto" : "0px",
                        overflow: "hidden",
                      }}
                    >
                      Server Error - 500
                    </Typography>
                  </ListItemButton>
                </NavLink>
              </Box>
            </List>
          </Box>
          <Box
            component="div"
            sx={{
              color: "#626477",
              marginBottom: "8px",
              display: "block",
              borderRadius: "8px",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 40,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: dropdown2 ? "#EDEFF1" : "",
              }}
              onClick={() => {
                setDropdown2(!dropdown2);
                setDropdown1(false);
                setDropdown3(false);
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <svg
                  className={`text-white w-5 h-5 ${
                    open ? "fill-logo" : "auto fill-logo"
                  }`}
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ArchiveOutlineIcon"
                >
                  <path d="M20 21H4V10H6V19H18V10H20V21M3 3H21V9H3V3M9.5 11H14.5C14.78 11 15 11.22 15 11.5V13H9V11.5C9 11.22 9.22 11 9.5 11M5 5V7H19V5H5Z"></path>
                </svg>
              </ListItemIcon>
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  transition: "all 0.1s ease-in-out",
                  display: open ? "flex" : "hidden",
                  alignItems: "center",
                  width: open ? "auto" : "0px",
                  overflow: "hidden",
                }}
              >
                Nested Routes
                <svg
                  className={`fill-logo w-5 h-5 transition-all ease-in-out duration-500 ml-8 ${
                    dropdown2 ? "rotate-90" : ""
                  }`}
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ChevronRightIcon"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                </svg>
              </Typography>
            </ListItemButton>
            <List
              sx={{
                transition: "all 0.5s ease-in-out",
                overflow: "hidden",
                height:
                  dropdown2 && !dropdown3
                    ? "100px"
                    : dropdown2 && dropdown3
                    ? "210px"
                    : "0px",
                opacity:
                  dropdown2 && !dropdown3
                    ? "1"
                    : dropdown2 && dropdown3
                    ? ""
                    : "0",
              }}
            >
              <Box
                sx={{
                  marginBottom: "8px",
                  borderRadius: "8px",
                  color: "#626477",
                  display: "block",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 40,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        marginLeft: "6px",
                        backgroundColor: "#626477",
                      }}
                    />
                  </ListItemIcon>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    sx={{
                      transition: "all 0.5s ease-in-out",
                      display: open ? "block" : "hidden",
                      width: open ? "auto" : "0px",
                      overflow: "hidden",
                    }}
                  >
                    L - 1
                  </Typography>
                </ListItemButton>
              </Box>
              <Box
                sx={{
                  marginBottom: "8px",
                  borderRadius: "8px",
                  color: "#626477",
                  display: "block",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 40,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    backgroundColor: dropdown3 ? "#EDEFF1" : "",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    setDropdown3(!dropdown3);
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        marginLeft: "6px",
                        backgroundColor:
                          pathname === "/util/server-error-501"
                            ? "white"
                            : "#626477",
                      }}
                    />
                  </ListItemIcon>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    sx={{
                      transition: "all 0.1s ease-in-out",
                      display: open ? "flex" : "hidden",
                      alignItems: "center",
                      width: open ? "auto" : "0px",
                      overflow: "hidden",
                    }}
                  >
                    L - 1B
                    <svg
                      className={`fill-logo w-5 h-5 transition-all ease-in-out duration-500 ml-[107px] ${
                        dropdown3 ? "rotate-90" : ""
                      }`}
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="ChevronRightIcon"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                    </svg>
                  </Typography>
                </ListItemButton>
                <List
                  sx={{
                    transition: "all 0.5s ease-in-out",
                    overflow: "hidden",
                    height: dropdown3 ? "110px" : "0px",
                    opacity: dropdown3 ? "1" : "0",
                    marginTop: dropdown3 ? "8px" : "0px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "8px",
                      borderRadius: "8px",
                      color: "#626477",
                      display: "block",
                    }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 40,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component="div"
                          sx={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            marginLeft: "6px",
                          }}
                        />
                      </ListItemIcon>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        sx={{
                          transition: "all 0.5s ease-in-out",
                          display: open ? "block" : "hidden",
                          width: open ? "auto" : "0px",
                          overflow: "hidden",
                          color: "#B6B6C0",
                        }}
                      >
                        L - 2
                      </Typography>
                    </ListItemButton>
                  </Box>
                  <Box
                    sx={{
                      marginBottom: "8px",
                      borderRadius: "8px",
                      color: "#626477",
                      display: "block",
                    }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 40,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component="div"
                          sx={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            marginLeft: "6px",
                          }}
                        />
                      </ListItemIcon>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        sx={{
                          transition: "all 0.5s ease-in-out",
                          display: open ? "block" : "hidden",
                          width: open ? "auto" : "0px",
                          overflow: "hidden",
                        }}
                      >
                        L - 2A
                      </Typography>
                    </ListItemButton>
                  </Box>
                </List>
              </Box>
            </List>
          </Box>
          <Box
            component="div"
            sx={{
              backgroundColor:
                pathname === "/theming-control" ? "primary.main" : "inherit",
              borderRadius: "8px",
            }}
          >
            <NavLink
              to="/theming-control"
              className={({ isActive }) =>
                isActive
                  ? "block font-regular mb-2 text-white rounded-lg"
                  : "text-logo font-regular mb-2  block rounded-lg"
              }
              onClick={handleDrawerClose}
            >
              <ListItemButton
                sx={{
                  minHeight: 40,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    className={`text-white w-5 h-5 ${
                      pathname.includes("theming-control")
                        ? "fill-white"
                        : "fill-logo "
                    }`}
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="GoogleCirclesExtendedIcon"
                  >
                    <path d="M18,19C16.89,19 16,18.1 16,17C16,15.89 16.89,15 18,15A2,2 0 0,1 20,17A2,2 0 0,1 18,19M18,13A4,4 0 0,0 14,17A4,4 0 0,0 18,21A4,4 0 0,0 22,17A4,4 0 0,0 18,13M12,11.1A1.9,1.9 0 0,0 10.1,13A1.9,1.9 0 0,0 12,14.9A1.9,1.9 0 0,0 13.9,13A1.9,1.9 0 0,0 12,11.1M6,19C4.89,19 4,18.1 4,17C4,15.89 4.89,15 6,15A2,2 0 0,1 8,17A2,2 0 0,1 6,19M6,13A4,4 0 0,0 2,17A4,4 0 0,0 6,21A4,4 0 0,0 10,17A4,4 0 0,0 6,13M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M12,10A4,4 0 0,0 16,6A4,4 0 0,0 12,2A4,4 0 0,0 8,6A4,4 0 0,0 12,10Z"></path>
                  </svg>
                </ListItemIcon>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{
                    transition: "all 0.1s ease-in-out",
                    display: open ? "block" : "hidden",
                    width: open ? "auto" : "0px",
                    overflow: "hidden",
                  }}
                >
                  Theming Control
                </Typography>
              </ListItemButton>
            </NavLink>
          </Box>
        </List>
      </Drawer>{" "}
      <Main
        open={open}
        sx={{
          p: 0,
          height: "100vh",
          position: "relative",
          maxWidth: 1600,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Header />
        <Box
          component="div"
          sx={{
            p: 0,
            height: "100vh",
            position: "relative",
            maxWidth: 1600,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {children}
        </Box>
        <Footer />
      </Main>
    </Box>
  );
};
export default Dashboard;
