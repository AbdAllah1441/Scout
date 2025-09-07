import React, { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* ✅ Left side: Logo + Links */}
      <div className="navbar-left">
        <div className="logo">✱ scout</div>

        <ul className="nav-links-desktop">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Docs</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>

      {/* ✅ Right side: Buttons + Hamburger */}
      <div className="navbar-right">
        <div className="nav-buttons">
          <button className="btn login">Login</button>
          <button className="btn signup">Sign Up</button>
        </div>

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <ul className={`nav-links-mobile ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Features
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Pricing
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Docs
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Blog
          </a>
        </li>

        <div className="nav-buttons-mobile">
          <button className="btn login" onClick={() => setIsMenuOpen(false)}>
            Login
          </button>
          <button className="btn signup" onClick={() => setIsMenuOpen(false)}>
            Sign Up
          </button>
        </div>
      </ul>
    </nav>
  );
}
