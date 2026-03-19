import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      image: "https://via.placeholder.com/400x250/020617/38bdf8?text=Finance+Analyzer",
      title: "AI Resume Analyzer",
      description: "A deep learning powered platform to analyze resumes and suggest improvements for ATS optimization.",
      tech: ["Python", "NLTK", "React", "Deep Learning"],
      link: "#"
    },
    {
      image: "https://via.placeholder.com/400x250/020617/38bdf8?text=Finance+Analyzer",
      title: "Autonomous Robotics System",
      description: "Simulation and control software for autonomous robotic navigation and obstacle avoidance.",
      tech: ["Python", "Robotics", "Computer Vision", "ROS"],
      link: "#"
    },
    {
      image: "https://via.placeholder.com/400x250/020617/38bdf8?text=Finance+Analyzer",
      title: "E-Commerce AI Chatbot",
      description: "Smart customer support bot with sentiment analysis and natural language understanding.",
      tech: ["Python", "NLP", "Flask", "React"],
      link: "#"
    },
    {
      image: "https://via.placeholder.com/400x250/020617/38bdf8?text=Finance+Analyzer",
      title: "AI Resume Analyzer",
      description: "A deep learning powered platform to analyze resumes and suggest improvements for ATS optimization.",
      tech: ["Python", "NLTK", "React", "Deep Learning"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section masterpiece-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title text-gradient">Masterpiece Projects</h2>
          <p className="section-subtitle">A curated selection of my most impactful work and technical breakthroughs.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass">
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
              <div className="project-info">
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link">View Live Project →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <Link to="/projects" className="btn secondary">View All Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
