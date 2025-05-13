import React from 'react';
import './App.css';

const StaticFeatureCard = ({ icon, title, description }) => (
  <div className="static-feature-card">
    <div className="feature-card-icon-pill">
      <span className="feature-card-icon" role="img" aria-label="icon">{icon}</span>
    </div>
    <div className="feature-card-content">
      <div className="feature-card-title">{title}</div>
      <div className="feature-card-desc">{description}</div>
    </div>
  </div>
);

export default StaticFeatureCard; 