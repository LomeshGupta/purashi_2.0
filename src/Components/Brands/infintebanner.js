import React from "react";
import { Box, Typography, Link } from "@mui/material";

const InfiniteBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        zIndex: 1000,
        padding: "10px 0",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <Typography
        pt={2}
        pb={2}
        variant="h6"
        sx={{
          display: "inline-block",
          whiteSpace: "nowrap",
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "#fff",
          animation: "scroll 60s linear infinite",
          "@keyframes scroll": {
            "0%": {
              transform: "translateX(100%)",
            },
            "100%": {
              transform: "translateX(-100%)",
            },
          },
        }}
      >
        <span>
          <Link
            href="/contact"
            sx={{
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                textDecoration: "underline",
              },
              display: "inline-block",
            }}
          >
            Interested in working together? Click Here
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          {/* Add some space between repetitions */}
        </span>
        <span>
          <Link
            href="/contact"
            sx={{
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                textDecoration: "underline",
              },
              display: "inline-block",
            }}
          >
            Interested in working together? Click Here
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          {/* Add some space between repetitions */}
        </span>
        <span>
          <Link
            href="/contact"
            sx={{
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                textDecoration: "underline",
              },
              display: "inline-block",
            }}
          >
            Interested in working together? Click Here
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          {/* Add some space between repetitions */}
        </span>
        <span>
          <Link
            href="/contact"
            sx={{
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                textDecoration: "underline",
              },
              display: "inline-block",
            }}
          >
            Interested in working together? Click Here
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          {/* Add some space between repetitions */}
        </span>
        <span>
          <Link
            href="/contact"
            sx={{
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                textDecoration: "underline",
              },
              display: "inline-block",
            }}
          >
            Interested in working together? Click Here
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          {/* Add some space between repetitions */}
        </span>
        <span>
          <Link
            href="/contact"
            sx={{
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                textDecoration: "underline",
              },
              display: "inline-block",
            }}
          >
            Interested in working together? Click Here
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          {/* Add some space between repetitions */}
        </span>
        <span>
          <Link
            href="/contact"
            sx={{
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                textDecoration: "underline",
              },
              display: "inline-block",
            }}
          >
            Interested in working together? Click Here
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          {/* Add some space between repetitions */}
        </span>
        <span>
          <Link
            href="/contact"
            sx={{
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                textDecoration: "underline",
              },
              display: "inline-block",
            }}
          >
            Interested in working together? Click Here
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          {/* Add some space between repetitions */}
        </span>
      </Typography>
    </Box>
  );
};

export default InfiniteBanner;
