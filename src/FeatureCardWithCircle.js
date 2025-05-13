import React, { useState } from 'react';
import './App.css';

const FeatureCardWithCircle = () => {
  const [circle, setCircle] = useState({ visible: false, x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCircle({
      visible: true,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setCircle({ ...circle, visible: false });
  };

  return (
    <div className="feature-card-dotgrid feature-card-vertical">
      {/* Top: interactive area for the circle */}
      <div
        className="feature-card-vertical-top"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {circle.visible && (
          <div
            className="feature-card-mouse-circle"
            style={{ left: circle.x, top: circle.y }}
          />
        )}
        <div className="feature-card-dotgrid-bg" />
      </div>
      {/* Bottom: icon and text */}
      <div className="feature-card-vertical-bottom">
        <div className="feature-card-icon-pill">
          <span role="img" aria-label="anonymous" className="feature-card-icon">🕵️‍♂️</span>
        </div>
        <div className="feature-card-content">
          <div className="feature-card-title">Identify all anonymous visitors.</div>
          <div className="feature-card-desc">
            Get details on suspicious visitors even when VPN, incognito mode, or a tampered browser or device is used.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCardWithCircle; 