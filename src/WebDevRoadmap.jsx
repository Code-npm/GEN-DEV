import React from "react";
import { useNavigate } from "react-router-dom";

export default function WebDevRoadmap() {
      const navigate = useNavigate();
    
  return (
    <div className="webdev">

        <div className="nav-r">
            <h1>GEN-DEV</h1>
            <button onClick={() => navigate("/home")}>Back to Home</button>
        </div>
      <h1 className="h-road">Web Development Roadmap</h1>
      
      
      <div className="r-info">

      <h2> Basics of the Web</h2>
      
        How websites work (client–server model) <br />
        What is HTTP / HTTPS <br />
        What is hosting, domain, DNS <br />
      
      </div>

  <div className="r-info">
    
      <h2 > HTML (Structure)</h2>
      
        Tags, Elements <br />
        Forms & Inputs <br />
        Semantic HTML <br />
      
  </div>

<div className="r-info">

      <h2 > CSS (Design)</h2>
      
        Selectors & Specificity <br />
        Flexbox & Grid <br />
        Animations <br />
        Responsive Design <br />
        Tailwind CSS (optional but powerful) <br />
      
</div>
<div className="r-info">

      <h2 > JavaScript (Logic)</h2>
      
        Variables, Loops, Functions <br />
        DOM Manipulation <br />
        Fetch API <br />
        Promises & Async /Await <br />
        ES6 Concepts <br />
      
</div>
<div className="r-info">

      <h2 > Git & GitHub</h2>
      
        Push, Pull, Merge <br />
        Branching <br />
        Deploy with GitHub Pages / Vercel <br />
      
<div className="r-info">

    <h2> Frontend Framework</h2>
       Node.js <br />
       React (Most Popular) <br />
       Next.js (React + Backend features) <br />
      
</div>

<div className="r-info">

      <h2 > Backend Development</h2>
      Node.js + Express.js <br />
    APIs, Authentication <br />
    Databases → MongoDB / MySQL <br />
      
</div>
<div className="r-info">

      <h2 > Full-Stack Path</h2>
      
        MERN → MongoDB + Express + React + Node <br />
        Deploy Full Apps <br />
      
</div>

<div className="r-info">
    
      <h2 > Advance Topics</h2>
      
        WebSockets <br />
        TypeScript <br />
        Testing <br />
        CI/CD <br />
      

</div>
      <p class>This is the complete roadmap 👍</p>
    </div>
    </div>
  );
}
