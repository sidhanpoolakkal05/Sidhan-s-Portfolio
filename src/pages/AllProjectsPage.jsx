import React from 'react';
import './AllProjectsPage.css';

const allProjects = [
  {
    title: "AI Resume Analyzer",
    description: "An intelligent system that parses resumes and matches them with job descriptions using NLP.",
    tags: ["Python", "NLP", "React"],
    image: "https://via.placeholder.com/400x250/020617/38bdf8?text=AI+Resume+Analyzer"
  },
  {
    title: "Autonomous Robotics System",
    description: "A ROS-based control system for autonomous navigation and mapping.",
    tags: ["ROS", "Python", "Computer Vision"],
    image: "https://via.placeholder.com/400x250/020617/38bdf8?text=Robotics+System"
  },
  {
    title: "E-Commerce AI Chatbot",
    description: "Customer support bot with sentiment analysis and product recommendations.",
    tags: ["Node.js", "AI", "MongoDB"],
    image: "https://via.placeholder.com/400x250/020617/38bdf8?text=AI+Chatbot"
  },
  {
    title: "Smart Garden IoT",
    description: "Automated plant care system with sensor data analytics.",
    tags: ["IoT", "Python", "Flask"],
    image: "https://via.placeholder.com/400x250/020617/38bdf8?text=Smart+Garden"
  },
  {
    title: "Real-time Object Detection",
    description: "Computer Vision application for security monitoring.",
    tags: ["OpenCV", "TensorFlow", "C++"],
    image: "https://via.placeholder.com/400x250/020617/38bdf8?text=Object+Detection"
  },
  {
    title: "Finance Sentiment Analyzer",
    description: "Scrapes news and performs sentiment analysis on stocks.",
    tags: ["Python", "Scrapy", "NLP"],
    image: "https://via.placeholder.com/400x250/020617/38bdf8?text=Finance+Analyzer"
  }
];

const AllProjectsPage = () => {
  return (
    <div className="all-projects-page section">
      <h1 className="text-gradient">Projects</h1>
      <p className="subtitle">Exploration of my technical journey and creative solutions.</p>

      <div className="projects-grid">
        {allProjects.map((project, index) => (
          <div key={index} className="project-card glass">
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;
