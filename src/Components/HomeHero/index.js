import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import vdo from "../../Assets/new.mp4";
import logo from "../../Assets/newdesign.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <video
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
        src={vdo}
        autoPlay
        loop
        muted
      ></video>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: {
            md: "translate(-90%, -20%)",
            xs: "translate(-60%, -40%)",
          },
          textAlign: "left",
          color: "white",
          zIndex: 1,
          px: 2, // Padding for small screens
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" }, // Adjust font size for mobile
            fontWeight: "bold",
            fontFamily: "Helvetica Neue Condensed, Sans-serif",
            mb: 2, // Margin bottom for spacing
          }}
        >
          BRINGING BRANDS TO LIFE IN THE REAL WORLD
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" }, // Adjust font size for mobile
            fontWeight: "bold",
            fontFamily: "Helvetica Neue Condensed, Sans-serif",
            color: "#CEFF01",
          }}
        >
          SINCE 2022.
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(160%, -90%)",
          textAlign: "left",
          color: "white",
          zIndex: 1,
          display: { xs: "none", md: "block" }, // Hide logo on mobile
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "27vh", marginBottom: "16px" }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
