import { X } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { lazy, Suspense } from "react";

// Lazy load components
const Slideshow = lazy(() => import("./slideshow"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Box
          height={300}
          m={5}
          mt={0}
          mr={0}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
          maxWidth={{ xs: "80%", md: "63%" }}
        >
          <Box
            sx={{
              transform: "rotate(-90deg) Translate(-140px, 120px)",
              fontSize: "4rem",
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
            SEE OUR <br /> LATEST WORK
          </Box>
          <Box width="100%">
            <Slideshow />
          </Box>
        </Box>
      </Suspense>
    </>
  );
};

export default Home;
