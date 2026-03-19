import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Analyzer",
      description: "A deep learning powered platform to analyze resumes and suggest improvements for ATS optimization.",
      tech: ["Python", "NLTK", "React", "Deep Learning"],
      link: "#"
    },
    {
      title: "Autonomous Robotics System",
      description: "Simulation and control software for autonomous robotic navigation and obstacle avoidance.",
      tech: ["Python", "Robotics", "Computer Vision", "ROS"],
      link: "#"
    },
    {
      title: "E-Commerce AI Chatbot",
      description: "Smart customer support bot with sentiment analysis and natural language understanding.",
      tech: ["Python", "NLP", "Flask", "React"],
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
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Details →</a>
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
