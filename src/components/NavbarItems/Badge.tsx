import React from 'react';
import './Badge.css';

interface VersionIndicatorProps {
  version: string;
}

const Badge: React.FC<VersionIndicatorProps> = ({ version }) => {
  return (
    <div className="version-indicator">
      <img src="/images/love-app-icon.svg" alt="LÖVE Icon" className="love-icon" />
      <span className="version-text">LÖVE {version}</span>
    </div>
  );
};

export default Badge;
