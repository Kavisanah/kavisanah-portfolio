import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events to apply header styling and detect active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'services', 'skills', 'projects', 'articles', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.navbar')) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Sync Dark/Light Mode state with root element class
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.remove('light-mode');
    } else {
      root.classList.add('light-mode');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar glass-panel ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        {/* Logo */}
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
          <span className="logo-text">Kavisanah</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          {['home', 'about', 'services', 'skills', 'projects', 'articles', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(section); }}
            >
              {section}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Theme Toggle */}
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              // Sun Icon SVG
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sun-icon">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              // Moon Icon SVG
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="moon-icon">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
          </button>

          {/* Hamburger Menu Toggle for Mobile */}
          <button
            className={`hamburger-menu ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer glass-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {['home', 'about', 'services', 'skills', 'projects', 'articles', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`mobile-link ${activeSection === section ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(section); }}
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
