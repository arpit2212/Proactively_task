import React, { useState } from 'react';
import './Navbar.css';
 import logo from '../../../src/assets/Logo/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogin = () => {
    
    console.log('Login clicked');
  };

  const handleSignup = () => {
   
    console.log('Signup clicked');
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="ProVital Logo" className="logo-icon" />
          <span className="logo-text">ProVital</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav">
          <a href="#list-practice" className="nav-link">List your practice</a>
          <span className="separator">|</span>
          <a href="#employers" className="nav-link">For Employers</a>
           <span className="separator">|</span>
          <a href="#courses" className="nav-link">Courses</a>
           <span className="separator">|</span>
          <a href="#books" className="nav-link">Books</a>
           <span className="separator">|</span>
          <a href="#speakers" className="nav-link">Speakers</a>
           <span className="separator">|</span>
          <a href="#doctors" className="nav-link">Doctors</a>
          
         
          <div className="auth-dropdown-container">
            <button className="nav-link auth-dropdown-trigger" onClick={toggleDropdown}>
              <span className="login-signup-text">
                <span className="auth-link">Login</span>
                <span className="separator">/</span>
                <span className="auth-link">Signup</span>
              </span>
              <svg
                className={`dropdown-arrow ${isDropdownOpen ? 'dropdown-arrow-open' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="auth-dropdown">
                <div className="auth-section">
                  <div className="auth-row">
                    <span className="auth-label">Doctor</span>
                    <div className="auth-buttons">
                      <button className="auth-btn login-btn" onClick={handleLogin}>Login</button>
                      <button className="auth-btn signup-btn" onClick={handleSignup}>Sign up</button>
                    </div>
                  </div>
                  <div className="auth-row">
                    <span className="auth-label">Patients</span>
                    <div className="auth-buttons">
                      <button className="auth-btn login-btn" onClick={handleLogin}>Login</button>
                      <button className="auth-btn signup-btn" onClick={handleSignup}>Sign up</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          <button onClick={toggleMenu} className="menu-toggle">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={2}
  stroke="currentColor"
  className="menu-icon"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M4 6h16M4 12h16M4 18h16"
  />
</svg>

          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
        {/* Close Button */}
        <div className="mobile-nav-header">
          <div className="mobile-logo">
        <img src={logo} alt="ProVital Logo" className="logo-icon" />
            <span className="logo-text">ProVital</span>
          </div>
          <button onClick={toggleMenu} className="close-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="close-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

     
        <div className="mobile-auth-section">
         <div className='auth-dropdown-2'>
          <div className="mobile-auth-row auth-border">
            <span className="auth-label">Doctor</span>
            <div className="auth-buttons">
              <button className="auth-btn login-btn" onClick={handleLogin}>Login</button>
              <button className="auth-btn signup-btn" onClick={handleSignup}>Sign up</button>
            </div>
          </div>
          <div className="mobile-auth-row">
            <span className="auth-label">Patients</span>
            <div className="auth-buttons">
              <button className="auth-btn login-btn" onClick={handleLogin}>Login</button>
              <button className="auth-btn signup-btn" onClick={handleSignup}>Sign up</button>
            </div>
          </div>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div className="mobile-nav-links">
          <a href="#doctors" className="mobile-nav-link" onClick={toggleMenu}>
            <span>Doctors</span>
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#list-practice" className="mobile-nav-link" onClick={toggleMenu}>
            <span>List your practice</span>
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#employers" className="mobile-nav-link" onClick={toggleMenu}>
            <span>For Employers</span>
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#courses" className="mobile-nav-link" onClick={toggleMenu}>
            <span>Courses</span>
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#books" className="mobile-nav-link" onClick={toggleMenu}>
            <span>Books</span>
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#speakers" className="mobile-nav-link" onClick={toggleMenu}>
            <span>Speakers</span>
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="mobile-overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Navbar;