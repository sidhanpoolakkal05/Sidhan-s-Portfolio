import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      image: "https://via.placeholder.com/400x250/020617/38bdf8?text=Leaf+Disease+Detector",
      title: "Leaf Disease Detector",
      description: "IBM Project for detecting leaf diseases.",
      tech: ["TypeScript", "React", "AI"],
      link: "https://leaf-disease-detector-one.vercel.app"
    },
    {
      image: "https://via.placeholder.com/400x250/020617/38bdf8?text=Contract+Management",
      title: "Contract Management Platform",
      description: "Task from UAE based company.",
      tech: ["JavaScript", "React"],
      link: "https://sidhanpoolakkal05.github.io/Contract-Management-Platform/"
    },
    {
      image: "https://via.placeholder.com/400x250/020617/38bdf8?text=AI+Resume+Analyzer",
      title: "AI Resume Analyzer",
      description: "IBM Internship project for analyzing resumes.",
      tech: ["JavaScript", "React", "AI"],
      link: "https://ai-resume-analyzer-dun-gamma.vercel.app"
    },
    {
      image: "https://via.placeholder.com/400x250/020617/38bdf8?text=Medical+Website",
      title: "HealthHive - The Doctor Finder",
      description: "2nd year college project focused on finding doctors.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://sidhanpoolakkal05.github.io/Medical-Website/"
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
                <a href={project.link} className="project-link" target="_blank" rel="noreferrer">View Live Project →</a>
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
