import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  const getLink = (href, label, external) => (
    <li onClick={() => setMenuOpen(false)}>
      {external ? <a href={href}>{label}</a> : <Link to={href}>{label}</Link>}
    </li>
  );

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container glass">
        <Link to="/" className="logo">
          <span className="text-gradient">Sidhan.</span>
        </Link>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li onClick={() => setMenuOpen(false)}>
            {isHome ? <a href="#home">Home</a> : <Link to="/">Home</Link>}
          </li>
          <li onClick={() => setMenuOpen(false)}>
            {isHome ? <a href="#about">About</a> : <Link to="/#about">About</Link>}
          </li>
          <li onClick={() => setMenuOpen(false)}>
            {isHome ? <a href="#skills">Skills</a> : <Link to="/#skills">Skills</Link>}
          </li>
          <li onClick={() => setMenuOpen(false)}>
            {isHome ? <a href="#certifications">Certifications</a> : <Link to="/#certifications">Certifications</Link>}
          </li>
          <li onClick={() => setMenuOpen(false)}>
            {isHome ? <a href="#projects">Projects</a> : <Link to="/#projects">Projects</Link>}
          </li>
          <li onClick={() => setMenuOpen(false)}>
            {isHome ? <a href="#contact">Contact</a> : <Link to="/#contact">Contact</Link>}
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
