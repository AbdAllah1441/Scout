import React from "react";
import "../styles/Partners.css";

export default function Partners() {
  const denoLogo =
    "https://upload.wikimedia.org/wikipedia/commons/e/e8/Deno_2021.svg";

  return (
    <section className="partners">
      <div className="partners-container">
        {/* Top row logos */}
        <div className="partners-logos">
          <div className="partner-item">
            <img src={denoLogo} alt="Statsig" />
            <span>Statsig</span>
          </div>
          <div className="partner-item">
            <img src={denoLogo} alt="Deno" />
            <span>Deno</span>
          </div>
          <div className="partner-item">
            <img src={denoLogo} alt="Modal" />
            <span>Modal</span>
          </div>
          <div className="partner-item">
            <img src={denoLogo} alt="Hyper" />
            <span>Hyper</span>
          </div>
        </div>

        {/* Center text */}
        <p className="partners-text">
          Used by teams at Statsig, Deno, Dagster, Evidence and more.
        </p>

        {/* Bottom row logos */}
        <div className="partners-logos">
          <div className="partner-item">
            <img src={denoLogo} alt="Evidence" />
            <span>Evidence</span>
          </div>
          <div className="partner-item">
            <img src={denoLogo} alt="Dagster" />
            <span>Dagster</span>
          </div>
          <div className="partner-item">
            <img src={denoLogo} alt="Case Status" />
            <span>Case Status</span>
          </div>
          <div className="partner-item">
            <img src={denoLogo} alt="DG South" />
            <span>DG South</span>
          </div>
        </div>
      </div>
    </section>
  );
}
