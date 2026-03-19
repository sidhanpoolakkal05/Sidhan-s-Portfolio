import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section glass">
      <div className="about-container">
        <h2 className="section-title text-gradient">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm <strong>Muhammad Sidhan P</strong>, a dedicated <strong>AI Engineer & Full Stack Developer</strong> with a deep passion for building intelligent systems. 
              As a self-taught developer, I've spent countless hours mastering the intricacies of Python, Deep Learning, and modern web technologies.
            </p>
            <p>
              My journey began with a fascination for how tech can solve real-world problems. Today, I focus on bridging the gap between 
              advanced AI models and user-friendly web applications. I thrive on challenges and am constantly exploring the realms of 
              <strong> Robotics, Machine Learning, and Scalable Architectures</strong>.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>Self-Taught</h3>
                <p>Learning Journey</p>
              </div>
              <div className="stat">
                <h3>AI Enthusiast</h3>
                <p>DL & ML Focus</p>
              </div>
              <div className="stat">
                <h3>Full Stack</h3>
                <p>End-to-End Dev</p>
              </div>
            </div>
          </div>
          <div className="about-image">
             <div className="image-placeholder glass">
                <span>AI & Robotics Focus</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
