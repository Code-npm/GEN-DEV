import { useState } from "react";
import "./roadmap.css";
import { Github } from "lucide-react";

export default function Ml() {
  const steps = [
    {
      title: "Step 1",
      text: ["Python", "Numpy , Pandas", "Mathpolib"],
    },
    {
      title: "Step 2",
      text: ["Stats", "Probability", "Algebra" , "Calculus"],
    },
    {
      title: "Step 3",
      text: ["Supervised Learning", "Linear Regression", "Logistic Regression", "Decision Trees & KNN" ,"Random Forest"],
    },
    {
      title: "Step 4",
      text: ["Unsupervised Learning", "K-Means Clustering", "Hierarchical Clustering", "Principal Component Analysis (PCA)" ],
    },
    {
      title: "Step 5",
      text: [" Model Evaluation & Tuning" , " Advanced ML & Deep Learning" , "Git & Github -Deployment"],
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
          <h3>Krish Naik</h3>
          <button>Source</button>
          </div>
          <div className="resl">
        <h3>365 DataScience</h3>
          <button>Source</button>
          </div>
          <div className="resl">
        <h3>KaggleLearn</h3>
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
          <h3>Coursera-Andrew NG</h3>
          <button>Source</button>
          </div>
          <div className="resl">
           <h3>DataCamp (Supervised Learning)</h3>
          <button>Source</button>
          </div>
      </div>
    </div>

    <div className="careerpath">
      <h1>🚀Career Path</h1><hr />
      <ul>
        <li>Machine Learning Engineer – Build predictive models for real-world problems
</li>
<li>Data Scientist – Combine analytics and ML to provide insights

</li>
<li>AI Engineer – Work on deep learning and neural networks

</li>
<li>Business Analyst – Use ML for decision-making

</li>
<li>Researcher – Innovate new ML algorithms or applications

</li>
      </ul>
      <h1>Average Salaries in India</h1><hr />
      <ul>
        <li>Beginner: ₹4–7 LPA</li> 
<li>Mid-level: ₹8–15 LPA</li>
<li>Senior: ₹20+ LPA</li>
      </ul>
    </div>
    <div className="tips">
      <h1>💡 Tips for Beginners</h1><hr />
      <ul>
        <li>Start with small datasets and simple algorithms


</li>
<li>Understand the math behind models, don’t just copy code


</li>
<li>Build projects and host them on GitHub


</li>
<li>Participate in Kaggle competitions to gain experience

</li>
<li>Keep learning; ML is constantly evolving</li>
      </ul>
    </div>
    </div>
  );
}
