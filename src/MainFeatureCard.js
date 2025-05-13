import React, { useState, useEffect } from 'react';
import './App.css';

const TAG_TEXT = 'Why Spotter';

const MainFeatureCard = () => {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    if (visibleLetters < TAG_TEXT.length) {
      const timeout = setTimeout(() => {
        setVisibleLetters(visibleLetters + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [visibleLetters]);

  return (
    <div className="main-feature-card main-feature-card-row">
      <div className="main-feature-card-main">
        <div className="main-feature-tag">
          {TAG_TEXT.slice(0, visibleLetters)}
        </div>
        <h1 className="main-feature-title">
          The internet's most <span className="main-feature-accent">accurate</span> visitor identifier
        </h1>
        <div className="main-feature-sub">
          <b>Industry-leading accuracy</b> that lasts for months<br />or years, even when cookies are cleared.
        </div>
        <button className="main-feature-btn">Learn More</button>
        <div className="main-feature-graph">
          <svg width="100%" height="110" viewBox="0 0 500 110">
           
            <polyline fill="none" stroke="#FF6A2B" strokeWidth="2" points="0,50 40,48 80,47 120,46 160,48 200,50 240,52 280,54 320,55 360,56 400,57 440,58 480,59 500,60" />
            
            <polyline fill="none" stroke="#7B61FF" strokeWidth="2" points="0,52 40,50 80,49 120,50 160,55 200,60 240,65 280,70 320,75 360,80 400,85 440,90 480,95 500,100" />
            
            <line x1="30" y1="10" x2="30" y2="100" stroke="#e5e7eb" strokeWidth="1" />
            
            <line x1="30" y1="100" x2="490" y2="100" stroke="#e5e7eb" strokeWidth="1" />
            
            <text x="30" y="108" fontSize="12" fill="#bbb">0</text>
            <text x="130" y="108" fontSize="12" fill="#bbb">30</text>
            <text x="230" y="108" fontSize="12" fill="#bbb">60</text>
            <text x="330" y="108" fontSize="12" fill="#bbb">90</text>
            <text x="430" y="108" fontSize="12" fill="#bbb">120</text>
            <text x="60" y="120" fontSize="12" fill="#bbb" letterSpacing="2">ACCURACY DROPOFF</text>
            <text x="320" y="120" fontSize="12" fill="#bbb" letterSpacing="2">DAYS AFTER INITIAL IDENTIFICATION</text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MainFeatureCard;