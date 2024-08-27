import React from "react";
import { Box, Grid, Typography, Divider, useTheme } from "@mui/material";
import event from "../../Assets/Events/event.jpeg";
import desn from "../../Assets/newdesign.png";

const AboutSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: theme.spacing(4) }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section - Rotated Text */}
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            "@media (max-width:600px)": {
              marginBottom: "-40px",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              transform: "rotate(-90deg)",
              fontSize: "3rem",
              fontWeight: "bolder",
              letterSpacing: "0.05rem",
              color: "black",
              whiteSpace: "nowrap",
              textAlign: "left",
              "@media (max-width:600px)": {
                transform: "rotate(0deg)",
                fontSize: "2rem",
                textAlign: "center",
              },
            }}
          >
            EXPERIENTIAL
            <br /> MARKETING
          </Typography>
        </Grid>

        {/* Divider */}
        <Grid item xs={12} md={1}>
          <Divider
            orientation="vertical"
            flexItem
            color="black"
            sx={{
              borderRightWidth: 2,
              height: "100%",
              backgroundColor: theme.palette.background.paper,
              "@media (max-width:600px)": {
                display: "none",
              },
            }}
          />
        </Grid>

        {/* Right Section - Image and Description */}
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "flex-start" },
              gap: theme.spacing(2),
            }}
          >
            {/* Text */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: theme.spacing(2),
                maxWidth: { xs: "100%", md: "60%" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Box
                sx={{
                  "@media (max-width:600px)": {
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: theme.spacing(1),
                  },
                }}
              >
                <Box
                  component="img"
                  src={desn}
                  alt="Experiential Marketing"
                  pb={{ xs: 0, md: 4 }}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    width: { xs: "80px", md: "100px" },
                    height: { xs: "80px", md: "100px" },
                    borderRadius: theme.shape.borderRadius,
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bolder", marginBottom: theme.spacing(2) }}
                >
                  WE ARE PURANSHI EVENTS.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ marginBottom: theme.spacing(2) }}
                >
                  We are a global, full-service experiential marketing agency.
                  We design, build and deliver creative events and experiences
                  that bring brands and businesses to life in the real world.
                </Typography>
                <Typography variant="body1">
                  Whether it’s imaginative experiential, impactful sponsorship
                  activation or effective product trial, we work with global
                  brands and market challengers alike – including Baskin Robins,
                  VIVO, Adani, PHILIPS and Under Armour – to create memorable
                  moments that deliver business results.
                </Typography>
              </Box>
            </Box>

            {/* Image */}
            <Box
              sx={{
                "@media (max-width:600px)": {
                  display: "flex",
                  justifyContent: "center",
                  marginTop: theme.spacing(2),
                },
              }}
            >
              <Box
                component="img"
                src={event}
                alt="Experiential Marketing"
                sx={{
                  width: { xs: "100%", md: "400px" },
                  height: { xs: "auto", md: "400px" },
                  borderRadius: "2%",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
