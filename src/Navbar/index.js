import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png"; // Adjust the path to your logo image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Toggle drawer open/close
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuOpen(open);
  };

  // Menu items for the drawer
  const menuItems = [
    { text: "ABOUT", path: "/about" },
    { text: "WORK", path: "/work" },
    { text: "BLOG", path: "/blog" },
    { text: "STAFFING", path: "/staffing" },
    { text: "CONTACT", path: "/contact" },
  ];

  // Drawer content
  const drawerList = (
    <Box
      sx={{
        width: isMobile ? "250px" : "250px", // Increase drawer width here
        bgcolor: "black",
        height: "100%",
        color: "white",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.text}>
            <ListItem button component={NavLink} to={item.path}>
              <ListItemText
                primary={
                  <Typography
                    variant="h4"
                    color="white"
                    sx={{
                      "&.active": {
                        fontWeight: "bold",
                        color: "lightblue",
                      },
                      "&:hover": {
                        color: "lightblue",
                      },
                    }}
                  >
                    {item.text}
                  </Typography>
                }
              />
            </ListItem>
            {index < menuItems.length - 1 && (
              <Divider sx={{ bgcolor: "white" }} />
            )}
          </React.Fragment>
        ))}
      </List>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, pr: 3 }}>
        <IconButton sx={{ color: "lightblue" }}>
          <TwitterIcon sx={{ fontSize: 28 }} />
        </IconButton>
        <IconButton sx={{ color: "lightblue" }}>
          <InstagramIcon sx={{ fontSize: 28 }} />
        </IconButton>
        <IconButton sx={{ color: "lightblue" }}>
          <LinkedInIcon sx={{ fontSize: 28 }} />
        </IconButton>
        <IconButton sx={{ color: "lightblue" }}>
          <YouTubeIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <AppBar position="fixed" sx={{ bgcolor: "black" }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <img
            src={logo}
            alt="Puranshi Logo"
            style={{ height: "14vh", marginRight: "20px" }}
          />
          {!isMobile ? (
            <Typography variant="h5" sx={{ color: "white" }}>
              Puranshi Events <br />& Telecommunications
            </Typography>
          ) : null}
        </Box>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={menuOpen}
          onClose={toggleDrawer(false)}
          transitionDuration={{ enter: 500, exit: 500 }}
        >
          <Fade in={menuOpen}>{drawerList}</Fade>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
