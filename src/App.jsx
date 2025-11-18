import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import Roadmap from "./roadmap";
import Webdev from "./WebDevRoadmap";
import DataSci from "./datascience";
import CareerChatbot from "./chatbot";
import Ml from "./ml"
import Dsa from "./dsa"


function Layout() {
  const location = useLocation();

  // routes where navbar should NOT appear
  const hideNavRoutes = ["/webdev" , "/datasci" ,"/ml" ,"/dsa"];



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
        <Route path="/webdev" element={<Webdev />} />
        <Route path="/datasci" element={<DataSci />} />
        <Route path="/ml" element={<Ml />} />
        <Route path="/dsa" element={<Dsa />} />
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
