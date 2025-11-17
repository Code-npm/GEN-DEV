import React from "react";
import { useNavigate } from "react-router-dom";

export default function WebDevRoadmap() {
      const navigate = useNavigate();
    
  return (
    <div className="webdev">

        <div className="nav-r">
            <h2>GEN-DEV</h2>
            <button onClick={() => navigate("/home")}>Back to Home</button>
        </div>
<h1>Web Development</h1>

</div>
    
  );
}
