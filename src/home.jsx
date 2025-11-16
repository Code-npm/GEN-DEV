import React from "react";
import { Link } from "react-router-dom"; 
// import {Regu}
import myImage from "./assets/cybernetic-brain-fusion-biology-technology.png"; 
import myImage2 from "./assets/—Pngtree—developers are coding programs on_14867886.png";

const Home = () => {
  return (
    <div className="text-center bg-white text-black p-4 ">
      <div className="nav">
        
        <img src={myImage2}  className="img2"/>
        <div className="links">
        <button className="btn2"><Link to="/login" className="login1">Login</Link></button>
        <button className="btn2"><Link to="/register" className="login1">Register</Link></button>
      </div></div>
      <div className="name">GEN-DEV</div>
      <h3 className="h3">Personalized AI-Powered Roadmap</h3>
      <div className="parent">
      <img src={myImage} alt="Preview" width="300" /></div>
              {/* <button className="btn2"><Link to="/draggable" className="login1">Drag</Link></button> */}

    </div>
  );
};

export default Home;
