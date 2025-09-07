import React from "react";
import "../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="beta-badge">✱ scout is currently in beta ❯</div>
        <h1>
          AI for teams building <br className="desktop-break" />
          <span className="mobile-break">AI for teams building </span>
          what's next.
        </h1>
        <p>
          Scout gives you the tools to build custom agents and{" "}
          <br className="desktop-break" />
          <span className="mobile-break">
            Scout gives you the tools to build custom agents and{" "}
          </span>
          workflows in record time.
        </p>
        <button className="btn primary">Get Started ❯</button>
      </div>
    </section>
  );
}
