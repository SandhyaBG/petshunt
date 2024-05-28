import * as React from "react";
import { useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Typography,
  Toolbar,
} from "@mui/material";
import Home from "@mui/icons-material/Home";
import Logout from "@mui/icons-material/Logout";

import { useAuth } from "../../utils/hooks/useAuth";

export default function NavBar() {
  const { logout } = useAuth();
  const { pathname } = useLocation();

  if (pathname === "/login") {
    return null;
  }

  const logoutHandler = () => {
    try {
      logout();
    } catch (error) {
      console.log(
        "An error has occurred while logging out."
      );
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          >
            <Home />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pet Store
          </Typography>
          <Button color="inherit" startIcon={<Logout />} onClick={logoutHandler}>  {/* Adding the Logout icon */}
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
