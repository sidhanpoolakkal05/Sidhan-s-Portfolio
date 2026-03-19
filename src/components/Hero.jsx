import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <h2 className="fade-in">Hi, I'm</h2>
        <h1 className="text-gradient fade-in delay-1">Muhammad Sidhan P</h1>
        <h3 className="fade-in delay-2">AI Engineer & Full Stack Developer</h3>
        <p className="fade-in delay-3">
          I am a passionate tech enthusiast and a self-taught developer dedicated to building
          intelligent solutions and seamless web experiences.
        </p>
        <div className="hero-btns fade-in delay-4">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-visual fade-in delay-5">
        {/* Abstract AI/Tech Visual */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
    </section>
  );
};

export default Hero;
