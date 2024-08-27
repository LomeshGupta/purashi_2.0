// components/Partners.js
import React from "react";
import { Grid, Card, CardMedia, Box, Typography, Divider } from "@mui/material";
import Infinite from "./infintebanner";

// Create a context to import all images from the specified directory
const requireContext = require.context(
  "../../Assets/partners",
  false,
  /\.(png|jpe?g|svg|jpg)$/ // Include the file types you want to import
);

// Log filenames and their resolved paths
const images = requireContext.keys().map((filename) => {
  const imgModule = requireContext(filename);
  const imgPath = imgModule.default || imgModule; // Handle different module formats
  //   console.log(`Filename: ${filename}, Module:`, imgModule); // Debugging log
  //   console.log(`Image path for ${filename}:`, imgPath); // Debugging log
  return imgPath;
});

const Partners = () => {
  return (
    <Box>
      <Infinite />
      <Box p={7}>
        <Grid container spacing={5} justifyContent="center">
          {images.length > 0 ? (
            images.map((src, index) => (
              <Grid item xs={4} sm={4} md={2} lg={1} key={index}>
                <Box
                  sx={{
                    overflow: "hidden", // Ensure content does not overflow
                    position: "relative", // Position context for scaling
                    width: "100%",
                    height: 140,
                    "&:hover": {
                      transform: "scale(1.5)", // Scale container on hover
                      transition: "transform 0.3s ease-in-out", // Smooth transition
                    },
                  }}
                >
                  <Card
                    sx={{
                      boxShadow: "none", // Remove card shadow
                      border: "none", // Remove card border
                      borderRadius: 0, // Remove card border radius
                      height: "100%", // Ensure card takes full height
                      width: "100%", // Ensure card takes full width
                      display: "flex", // Flexbox for centering image
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={src}
                      alt={`Partner ${index + 1}`}
                      sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                        transition: "transform 1s ease-in-out", // Smooth image transition
                      }}
                    />
                  </Card>
                </Box>
              </Grid>
            ))
          ) : (
            <p>No images found</p>
          )}
        </Grid>

        {/* Section Below Partners */}
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            my: 8,
          }}
        >
          <Box
            sx={{
              width: { xs: "auto", md: "600px" }, // Adjust width for mobile
            }}
          >
            <Typography
              variant="h6"
              textAlign={{ xs: "center", md: "left" }}
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "5vh", md: "6vh" }, // Adjust font size for mobile
                mx: { xs: 0, md: 6 }, // Margin-x for mobile and desktop
              }}
            >
              Brands
              <br /> We Work With
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              mx: { xs: 0, md: 2 }, // Margin-x for desktop only
              my: { xs: 4, md: 0 }, // Margin-y for mobile only
              display: { xs: "none", md: "block" }, // Hide divider on mobile
            }}
          />
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" }, // Center text on mobile
              mx: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "4vh",
                mx: 2,
                mt: { xs: 3 },
              }}
              gutterBottom
            >
              OUR CLIENTS
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mx: 2,
              }}
            >
              From high-profile projects to decades-long relationships, we’re
              proud to work with such a range of brilliant brands. Want to work
              together? <a href="/contact">CLICK HERE</a> to contact us.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Partners;
