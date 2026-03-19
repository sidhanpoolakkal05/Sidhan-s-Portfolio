import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container glass">
        <Link to="/" className="logo">
          <span className="text-gradient">Sidhan.</span>
        </Link>
        <ul className="nav-links">
          <li>{isHome ? <a href="#home">Home</a> : <Link to="/">Home</Link>}</li>
          <li>{isHome ? <a href="#about">About</a> : <Link to="/#about">About</Link>}</li>
          <li>{isHome ? <a href="#skills">Skills</a> : <Link to="/#skills">Skills</Link>}</li>
          <li><Link to="/projects">Projects</Link></li>
          <li>{isHome ? <a href="#contact">Contact</a> : <Link to="/#contact">Contact</Link>}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
