import { useState } from "react";
import "./roadmap.css";
import { Github } from "lucide-react";

export default function DataSci() {
  const steps = [
    {
      title: "Step 1",
      text: ["Python", "Numpy , Pandas", "Mathpolib"],
    },
    {
      title: "Step 2",
      text: ["Stats", "Probability", "Data Cleaning & Preprocessing"],
    },
    {
      title: "Step 3",
      text: ["Machine Learning Basics ", "Linear Regression", "Logistic Regression", "Decision Trees & KNN"],
    },
    {
      title: "Step 4",
      text: ["Advanced Machine Learning", "Deep Learning (Neural Networks)", "Data Visualization  "],
    },
    {
      title: "Step 5",
      text: ["Projects & Portfolio" , "Git & Github" , "Deployment"],
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () =>
    setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="roadmap-section">
      <h2 className="roadmap-title">Home ▶ Data Science</h2>

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
          <h3>365 DataScience</h3>
          <button>Source</button>
          </div>
          <div className="resl">
        <h3>Shreyians Coding School (Data Science)</h3>
          <button>Source</button>
          </div>
          <div className="resl">
        <h3>CampusX (Machine Learning)</h3>
          <button>Source</button>
          </div>
      </div>
      <div className="links">
        <p>Paid Courses:-</p>
        <div className="resl">
          <h3>Shreyains Coding School </h3>

          <button>Source</button>
          </div>
          <div className="resl">
          <h3>Code With Harry</h3>
          <button>Source</button>
          </div>
          <div className="resl">
           <h3>Coding With Sagar</h3>
          <button>Source</button>
          </div>
      </div>
    </div>

    <div className="careerpath">
      <h1>🚀Career Path</h1><hr />
      <ul>
        <li>Data Analyst – Work on analyzing and visualizing data</li>
<li>Machine Learning Engineer – Build predictive models
</li>
<li>Data Scientist – Combine analytics and ML to provide insights
</li>
<li>Business Analyst – Use data for decision-making
</li>
<li>Freelancer – Projects on data analysis or ML models
</li>
      </ul>
      <h1>Average Salaries in India</h1><hr />
      <ul>
        <li>Beginner: ₹3–6 LPA</li> 
<li>Mid-level: ₹7–12 LPA</li>
<li>Senior: ₹15+ LPA</li>
      </ul>
    </div>
    <div className="tips">
      <h1>💡 Tips for Beginners</h1><hr />
      <ul>
        <li>Focus on one step at a time: Python → Libraries → Statistics → ML → Projects

</li>
<li>Practice daily with small datasets

</li>
<li>Build projects and add them to GitHub

</li>
<li>Read real-world datasets and try to find insights

</li>
<li>Be patient; Data Science is learned gradually through practice</li>
      </ul>
    </div>
    </div>
  );
}
