import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";

const requireContext = require.context(
  "../../../Assets/Events",
  false,
  /\.(png|jpe?g|svg|jpg)$/ // Include the file types you want to import
);

// Import images
const images = requireContext.keys().map((filename) => {
  const imgModule = requireContext(filename);
  const imgPath = imgModule.default || imgModule; // Handle different module formats
  return imgPath;
});

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Slideshow = () => {
  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index} style={{ position: "relative" }}>
          <Box
            component="img"
            src={img}
            alt={`Slide ${index}`}
            sx={{
              marginTop: { xs: "10%", md: "0%" },
              width: { xs: "100%", md: "100%" },
              height: { xs: "280px", md: "540px" },
              borderRadius: 2,
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              p: 2,
              background: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
              borderRadius: "4px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Title {index + 1}
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              Subtitle {index + 1}
            </Typography>
          </Box>
        </div>
      ))}
    </Slider>
  );
};

export default Slideshow;
