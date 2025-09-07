import React from "react";
import { Monitor, Settings, Key, Rocket, Bot, Inbox } from "lucide-react";
import "../styles/Features.css";

export default function Features() {
  const features = [
    {
      icon: Monitor,
      title: "AI where you work",
      desc: "Deploy Scout Apps to Slack or Discord",
      size: "wide",
    },
    {
      icon: Settings,
      title: "Customize your AI",
      desc: "Build custom workflows and apps in minutes",
    },
    {
      icon: Key,
      title: "Access to the right data",
      desc: "Control what your AI knows and what it forgets",
    },
    {
      icon: Rocket,
      title: "Accelerate your product",
      desc: "Use Scout API to enable AI-features for your customers",
    },
    {
      icon: Bot,
      title: "Automate your work",
      desc: "Connect your existing tools and eliminate the busy work",
    },
    {
      icon: Inbox,
      title: "An Inbox with superpowers",
      desc: "Curate responses and reviews results for each interaction",
      size: "wide",
    },
  ];

  return (
    <div className="features">
      <div className="features-container">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              className={`feature-card ${
                feature.size === "wide" ? "wide" : ""
              }`}
              key={index}
            >
              <div className="feature-icon">
                <IconComponent size={32} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
