import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP", "Robotics", "PyTorch/TensorFlow"]
    },
    {
      title: "Full Stack Development",
      skills: ["Python (Django/Flask)", "JavaScript (React)", "HTML5 & CSS3", "Node.js", "REST APIs", "SQL & NoSQL"]
    },
    {
      title: "Tools & Analytics",
      skills: ["Git & GitHub", "Docker", "Jupyter Notebooks", "Data Analysis", "Cloud (AWS/GCP)", "Linux"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="skills-container">
        <h2 className="section-title text-gradient">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card glass">
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
