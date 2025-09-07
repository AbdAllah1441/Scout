import React from "react";
import "../styles/Pricing.css";

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="pricing-container">
        <h2 className="pricing-title">A plan for every need.</h2>
        <p className="pricing-subtitle">
          Whether you are just starting or require massive scale, we have a
          solution.
        </p>

        {/* Pricing Plans */}
        <div className="pricing-plans">
          <div className="plan-card">
            <span className="badge green">Hobby</span>
            <h3>$0</h3>
            <p>
              Great for personal use or a first step to explore the Scout
              platform.
            </p>
            <button className="btn">Sign Up</button>
            <ul>
              <li>100 Interactions (GPT-3.5 Only)</li>
              <li>Deploy 1 App</li>
              <li>Connect 1 Collection</li>
              <li>10GB of Storage</li>
              <li>Community Support (Discord)</li>
            </ul>
          </div>

          <div className="plan-card popular">
            <span className="badge purple">Pro</span>
            <h3>$50</h3>
            <p>Perfect for building and scaling models with limited context.</p>
            <button className="btn primary">Sign Up</button>
            <ul>
              <li>Unlimited Interactions</li>
              <li>$0.09 per Interaction</li>
              <li>Deploy 10 Apps</li>
              <li>Connect 10 Collections</li>
              <li>1TB of Storage</li>
              <li>Community & Email Support</li>
            </ul>
          </div>

          <div className="plan-card">
            <span className="badge blue">Enterprise</span>
            <h3>Custom</h3>
            <p>For large scale models with large and ever-changing context.</p>
            <button className="btn">Request Access</button>
            <ul>
              <li>Unlimited Interactions</li>
              <li>Custom Interaction Pricing</li>
              <li>Unlimited Apps</li>
              <li>Unlimited Collections</li>
              <li>Unlimited Storage</li>
              <li>Dedicated Support</li>
            </ul>
          </div>
        </div>

        {/* Dedicated Support */}
        <div className="support-section">
          <div className="support-card">
            <h3>Dedicated Support</h3>
            <p>
              Get started with a dedicated engineer to help scope your models
              and get deployed.
            </p>
            <div className="support-features">
              <div className="support-feature">
                <i>✔</i> Shared Slack Channel
              </div>
              <div className="support-feature">
                <i>✔</i> Prompt Engineering
              </div>
              <div className="support-feature">
                <i>✔</i> Dedicated Engineer
              </div>
              <div className="support-feature">
                <i>✔</i> Context Guidance
              </div>
            </div>
          </div>

          <div className="addon-card">
            <span className="badge pink">Add On</span>
            <h3>
              $750 <span className="monthly">/monthly</span>
            </h3>
            <button className="btn primary">Request Access</button>
            <p className="note">No long term contract obligation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
