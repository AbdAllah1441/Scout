import React, { useState } from "react";
import "../styles/Testimonials.css";
import {
  FiBarChart2,
  FiGitBranch,
  FiZap,
  FiMessageCircle,
  FiMail,
  FiSearch,
} from "react-icons/fi";

export default function Testimonials() {
  const testimonials = [
    {
      logo: <FiBarChart2 />,
      company: "Statsig",
      quote:
        "Scout is an indispensable tool for our Engineering, DS and Sales teams to engage with our customers. We rely on Scout daily, making it an integral part of our operations.",
      author: "Vijaye Raji",
      role: "CEO of Statsig",
    },
    {
      logo: <FiGitBranch />,
      company: "OctoTech",
      quote:
        "Scout has streamlined our workflow and improved efficiency across the board. It's a game changer for our team.",
      author: "Sarah Johnson",
      role: "CTO of OctoTech",
    },
    {
      logo: <FiZap />,
      company: "HyperLabs",
      quote:
        "We've saved countless hours with Scout. The automation features allow us to focus on what really matters.",
      author: "David Kim",
      role: "Head of Product at HyperLabs",
    },
    {
      logo: <FiMessageCircle />,
      company: "ChatFlow",
      quote:
        "Communication has never been easier. Scout helps us stay connected across teams and deliver faster.",
      author: "Emily Chen",
      role: "VP of Engineering at ChatFlow",
    },
    {
      logo: <FiMail />,
      company: "MailWorks",
      quote:
        "The inbox features are incredible. Reviewing results and managing responses is seamless.",
      author: "James Carter",
      role: "COO of MailWorks",
    },
    {
      logo: <FiSearch />,
      company: "VisionAI",
      quote:
        "The insights from Scout give us clarity into our workflows like never before.",
      author: "Anna Smith",
      role: "Head of Data at VisionAI",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="testimonials">
      <div className="testimonials-container">
        {/* Mobile navigation dots */}
        <div className="mobile-nav">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="testimonials-grid">
          {/* Left logos */}
          <div className="logos-grid left-logos">
            {testimonials.slice(0, 3).map((t, index) => (
              <div
                key={index}
                className={`logo-item ${active === index ? "active" : ""}`}
                onClick={() => setActive(index)}
                title={t.company}
              >
                <div className="logo-icon">{t.logo}</div>
                <span className="company-name">{t.company}</span>
              </div>
            ))}
          </div>

          {/* Middle testimonial */}
          <div className="testimonial-content">
            <p className="quote">"{testimonials[active].quote}"</p>
            <div className="author">
              <img
                src={`https://i.pravatar.cc/80?img=${
                  active === 4 ? 15 : active + 1
                }`}
                alt={testimonials[active].author}
                loading="lazy"
              />
              <div className="author-info">
                <h4>{testimonials[active].author}</h4>
                <p>{testimonials[active].role}</p>
              </div>
            </div>
          </div>

          {/* Right logos */}
          <div className="logos-grid right-logos">
            {testimonials.slice(3, 6).map((t, index) => (
              <div
                key={index + 3}
                className={`logo-item ${active === index + 3 ? "active" : ""}`}
                onClick={() => setActive(index + 3)}
                title={t.company}
              >
                <div className="logo-icon">{t.logo}</div>
                <span className="company-name">{t.company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile company selector */}
        <div className="mobile-companies">
          <div className="company-grid">
            {testimonials.map((t, index) => (
              <button
                key={index}
                className={`company-item ${active === index ? "active" : ""}`}
                onClick={() => setActive(index)}
              >
                <div className="logo-icon">{t.logo}</div>
                <span>{t.company}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
