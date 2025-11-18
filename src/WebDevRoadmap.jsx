import { useState } from "react";
import "./roadmap.css";

export default function RoadmapCarousel() {
  const steps = [
    {
      title: "Step 1",
      text: ["How Internet Works", "Internet Protocol", "HTTP/HTTPS"],
    },
    {
      title: "Step 2",
      text: ["HTML", "CSS", "Javascript"],
    },
    {
      title: "Step 3",
      text: ["DOM", "Frameworks(React , Vue etc)", "Git & Github"],
    },
    {
      title: "Step 4",
      text: ["Node.js", "Express.js", "SQL / MongoDB "],
    },
    {
      title: "Step 5",
      text: ["Tailwind Css" , "SCSS" , "Framer Motion(GSAP)"],
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () =>
    setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="roadmap-section">
      <h2 className="roadmap-title">Home ▶ Web Development</h2>

      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${index * 350}px)` }}
        >
          {steps.map((step, i) => (
            <div className="roadmap-card" key={i}>
              <h3>{step.title}</h3>
              <ul>
                {step.text.map((t, j) => (
                  <li key={j}>• {t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="rbtn">

        <button className="btn-prev" onClick={prev}>◀</button>
        <button className="btn-next" onClick={next}>▶</button>
        </div>
      </div>
    <div className="resource">
      <h1>Resources</h1>
      <div className="links">
        <p>Free resources:-</p>
        <div className="resl">
          <h3>Code with Harry (Both)</h3>
          <button>Source</button>
          </div>
          <div className="resl">
        <h3>Shreyians Coding School (Both)</h3>
          <button>Source</button>
          </div>
          <div className="resl">
        <h3>Coding With Sagar (for Frontend)</h3>
          <button>Source</button>
          </div>
      </div>
      <div className="links">
        <p>Paid Courses:-</p>
        <div className="resl">
          <h3>Shreyains Coding School 
          (Both)</h3>

          <button>Source</button>
          </div>
          <div className="resl">
          <h3>Udemy(Dr. Angela)(Frontend)</h3>
          <button>Source</button>
          </div>
          <div className="resl">
           <h3>Apna College (Both)</h3>
          <button>Source</button>
          </div>
      </div>
    </div>

    <div className="careerpath">
      <h1>🚀Career Path</h1><hr />
      <ul>
        <li>Frontend Developer – UI/UX focus</li>
<li>Backend Developer – Server-side logic</li>
<li>Full Stack Developer – Both frontend + backend</li>
<li>Freelancer – Build websites for clients</li>
<li>Startup Builder – Create your own apps/products</li>
      </ul>
      <h1>Average Salaries in India</h1><hr />
      <ul>
        <li>Beginner: ₹3–6 LPA</li> 
<li>Mid-level: ₹8–15 LPA</li>
<li>Senior: ₹20+ LPA</li>
      </ul>
    </div>
    <div className="tips">
      <h1>💡 Tips for Beginners</h1><hr />
      <ul>
        <li>Take one step at a time: HTML → CSS → JS → React → Backend
</li>
<li>Practice daily, even for 1 hour
</li>
<li>Make small projects, don’t wait for perfect ideas
</li>
<li>Share your work on GitHub and LinkedIn
</li>
<li>Be patient; learning web development takes months</li>
      </ul>
    </div>
    </div>
  );
}
