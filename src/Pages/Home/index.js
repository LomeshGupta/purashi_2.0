import React, { lazy, Suspense } from "react";
import { CssBaseline, Container } from "@mui/material";
import cars from "../../Assets/Events/cars.jpeg";
import Work from "../../Components/work";

// Lazy load components
const HeroSection = lazy(() => import("../../Components/HomeHero"));
const About = lazy(() => import("../../Components/AboutHome"));
const Brands = lazy(() => import("../../Components/Brands"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <About />
        <Brands />
        <Work />
      </Suspense>
    </>
  );
};

export default Home;
