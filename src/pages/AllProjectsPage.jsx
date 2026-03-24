import React from 'react';
import './AllProjectsPage.css';

const allProjects = [
  {
    title: "Leaf Disease Detector",
    description: "IBM Project for detecting leaf diseases.",
    tags: ["TypeScript", "AI", "React"],
    image: "https://via.placeholder.com/400x250/020617/38bdf8?text=Leaf+Disease+Detector",
    link: "https://leaf-disease-detector-one.vercel.app"
  },
  {
    title: "Contract Management Platform",
    description: "Task from UAE based company.",
    tags: ["JavaScript", "Web"],
    image: "https://via.placeholder.com/400x250/020617/38bdf8?text=Contract+Management",
    link: "https://sidhanpoolakkal05.github.io/Contract-Management-Platform/"
  },
  {
    title: "AI Resume Analyzer",
    description: "IBM Internship project for analyzing resumes.",
    tags: ["JavaScript", "AI"],
    image: "https://via.placeholder.com/400x250/020617/38bdf8?text=AI+Resume+Analyzer",
    link: "https://ai-resume-analyzer-dun-gamma.vercel.app"
  },
  {
    title: "HealthHive - Doctor Finder",
    description: "2nd year college project focused on finding doctors.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://via.placeholder.com/400x250/020617/38bdf8?text=HealthHive",
    link: "https://sidhanpoolakkal05.github.io/Medical-Website/"
  },
  {
    title: "BroKart",
    description: "An E-commerce web application.",
    tags: ["E-commerce", "Web"],
    image: "https://via.placeholder.com/400x250/020617/38bdf8?text=BroKart",
    link: "https://github.com/sidhanpoolakkal05/BroKart"
  },
  {
    title: "Project 2",
    description: "IBM Internship Project.",
    tags: ["JavaScript"],
    image: "https://via.placeholder.com/400x250/020617/38bdf8?text=Project+2",
    link: "https://github.com/sidhanpoolakkal05/-project-2"
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
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link || "#"} className="project-link" target="_blank" rel="noreferrer">View Live Project →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;
