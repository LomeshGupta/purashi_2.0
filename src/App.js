// App.js
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Attorney from "./Pages/Attorneys";
// import Contact from "./Pages/Contactus";
// import Expertise from "./Pages/Expertise";
import ScrollToTop from "./ScrollToTop.js";

const App = () => {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <ScrollToTop />
        </Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
