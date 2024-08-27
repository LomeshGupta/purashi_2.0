import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LogoSrc from "../Assets/logo.png";

// Replace this with your logo component or image
const Logo = () => (
  <Box
    m={3}
    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <img src={LogoSrc} alt="Logo" style={{ maxHeight: "200px" }} />
  </Box>
);

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      pt={7}
      pb={7}
      sx={{ backgroundColor: "#000", color: "#fff", padding: "40px 40px" }}
    >
      <Grid
        container
        alignItems="center"
        spacing={isMobile ? 0 : 2}
        direction={isMobile ? "column" : "row"}
      >
        {/* Logo Section */}
        <Grid item xs="auto">
          <Logo />
        </Grid>

        {/* Vertical Divider (Hidden on mobile) */}
        {!isMobile && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ m: 4, bgcolor: "#fff", height: "200px" }}
          />
        )}

        {/* Location */}
        <Grid textAlign={isMobile ? "center" : "left"} mb={2} item xs>
          <Typography
            variant="h6"
            sx={{ color: "#D4FF00", marginBottom: "5px", fontSize: "2rem" }}
          >
            New Delhi
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1rem" }}>
            Office number 506, 5th floor, Ansal majestic tower <br /> Ak market,
            Vikaspuri, New Delhi, 110018
          </Typography>
        </Grid>

        {/* Vertical Divider (Hidden on mobile) */}
        {!isMobile && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ m: 4, bgcolor: "#fff", height: "200px" }}
          />
        )}

        {/* Navigation Links */}
        <Grid item xs>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={isMobile ? "center" : "flex-start"}
            m={isMobile ? 5 : 0}
          >
            <Link
              href="#"
              color="inherit"
              sx={{ marginBottom: "5px", fontSize: "1.75rem" }}
            >
              ABOUT
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{ marginBottom: "5px", fontSize: "1.75rem" }}
            >
              WORK
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{ marginBottom: "5px", fontSize: "1.75rem" }}
            >
              BLOG
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{ marginBottom: "5px", fontSize: "1.75rem" }}
            >
              STAFFING
            </Link>
            <Link href="#" color="inherit" sx={{ fontSize: "1.75rem" }}>
              CONTACT
            </Link>
          </Box>
        </Grid>

        {/* Vertical Divider (Hidden on mobile) */}
        {!isMobile && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ m: 4, bgcolor: "#fff", height: "200px" }}
          />
        )}

        {/* Social Icons & Footer Info */}
        <Grid item>
          <Box display="flex" alignItems="center" justifyContent="center">
            <IconButton sx={{ color: "#D4FF00", padding: "5px" }} href="#">
              <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton sx={{ color: "#D4FF00", padding: "5px" }} href="#">
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton sx={{ color: "#D4FF00", padding: "5px" }} href="#">
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton sx={{ color: "#D4FF00", padding: "5px" }} href="#">
              <YouTubeIcon fontSize="large" />
            </IconButton>
          </Box>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.9rem", textAlign: "center", marginTop: "5px" }}
          >
            Puranshi Events & Telecommunications. <br />© Puranshi 2023. All
            rights reserved.
          </Typography>
          <Box display="flex" justifyContent="center" sx={{ marginTop: "5px" }}>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              sx={{ marginRight: "10px", fontSize: "0.75rem" }}
            >
              PRIVACY
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              sx={{ marginRight: "10px", fontSize: "0.75rem" }}
            >
              COOKIES
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              sx={{ fontSize: "0.75rem" }}
            >
              TERMS & CONDITIONS
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
