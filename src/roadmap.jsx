import React from "react";
import { useNavigate } from "react-router-dom";

export default function CareerOptions() {
  
  const navigate = useNavigate();
  

  return (
    <div style={{ padding: "20px" }} className="options">
      <h2>Choose a Skill</h2>
      <div className="opt">

      <button onClick={() => navigate("/webdev")} className="Cbtn">
  Web Development
</button>

      <button onClick={() => handleClick("Data Scientist")} className='Cbtn'> 
        Data Scientist
      </button>

      <button onClick={() => handleClick("AI / ML Engineer")} className='Cbtn'>
        AI / ML Engineer
      </button>

      <button onClick={() => handleClick("Cyber Security")} className='Cbtn'>
        Cyber Security
      </button>

      <button onClick={() => handleClick("Software Engineer")} className='Cbtn'>
        Software Engineer
      </button>
      </div>
    </div>
  );
}
