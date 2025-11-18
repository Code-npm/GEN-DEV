import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import Roadmap from "./roadmap";
import RoadmapCarousel from "./WebDevRoadmap";
import CareerChatbot from "./chatbot";


function Layout() {
  const location = useLocation();

  // routes where navbar should NOT appear
  const hideNavRoutes = ["/webdev"];

  return (
    <>
      {/* Show navbar only if route NOT in hideNavRoutes */}
      {!hideNavRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* Default route → Home */}
        <Route path="/" element={<Home />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/webdev" element={<RoadmapCarousel />} />
        <Route path="/chatbot" element={<CareerChatbot/>}/>
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
