import React from "react";
import "../styles/Footer.css";
import { FaSlack, FaTimes, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="logo">✶ scout</h2>
            <span className="status-badge">
              <span className="status-dot"></span> All Systems Operational
            </span>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Links</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Docs</a>
              <a href="#">Blog</a>
            </div>
            <div className="footer-column">
              <h4>Solutions</h4>
              <a href="#">Slack Bot</a>
              <a href="#">Discord Bot</a>
              <a href="#">Command</a>
              <a href="#">Onsite Chat</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2024 Scout. All rights reserved.</p>
          <div className="social-icons">
            <a href="#" aria-label="Slack">
              <FaSlack />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
