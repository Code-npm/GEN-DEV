import { useState } from "react";
import "./roadmap.css";
import { Github } from "lucide-react";

export default function Dsa() {
  const steps = [
    {
      title: "Step 1",
      text: ["C++/Java/Python", "Basic of any language", "Arrays & Strings"],
    },
    {
      title: "Step 2",
      text: ["Linked Lists", "Stacks & Queues" , "recursion"],
    },
    {
      title: "Step 3",
      text: ["Trees", "Graphs", "Searching", "Sorting"],
    },
    {
      title: "Step 4",
      text: ["Hashing", "Advanced Topics", "Advanced Algorithm"],
    },
    {
      title: "Step 5",
      text: [" Project & Practice" , " Git & Github"],
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () =>
    setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="roadmap-section">
      <h2 className="roadmap-title">Home ▶ Data Structure
        
      </h2>

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
          <h3>Abdul Bari-Data structures</h3>
          <button>Source</button>
          </div>
          <div className="resl">
        <h3>Code With Harry-DSA</h3>
          <button>Source</button>
          </div>
          <div className="resl">
        <h3>Apni Kaksha(Shradha Mam)</h3>
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
          <h3>Coursera-DSA </h3>
          <button>Source</button>
          </div>
          <div className="resl">
           <h3>LeetCode-Learn</h3>
          <button>Source</button>
          </div>
      </div>
    </div>

    <div className="careerpath">
      <h1>🚀Career Path</h1><hr />
      <ul>
        <li>Software Engineer – Writing optimized code for real-world applications
</li>
<li>Competitive Programmer – Compete in coding competitions globally
</li>
<li>Backend Developer – Efficient data handling for servers and databases
</li>
<li>Interview Preparation – Most tech interviews focus heavily on DSA
</li>

      </ul>
      <h1>Average Salaries in India</h1><hr />
      <ul>
        <li>Beginner: ₹3–6 LPA</li> 
<li>Mid-level: ₹7–15 LPA</li>
<li>Senior: ₹20+ LPA</li>
      </ul>
    </div>
    <div className="tips">
      <h1>💡 Tips for Beginners</h1><hr />
      <ul>
        <li>Understand concepts clearly instead of memorizing code

</li>
<li>Practice problems daily; start from easy and move to medium & hard

</li>
<li>Use visualizations to understand algorithms

</li>
<li>Analyze time and space complexity

</li>
<li>Participate in coding contests to gain confidence</li>
      </ul>
    </div>
    </div>
  );
}
