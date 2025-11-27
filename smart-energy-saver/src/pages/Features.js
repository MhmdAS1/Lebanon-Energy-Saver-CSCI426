import React from 'react';

function Features() {
  return (
    <div className="page">
      <h1>Key Features</h1>
      
      <div className="feature-list">
        <div className="feature">
          <h3>Appliance Energy Calculator</h3>
          <p>Instantly calculate exact monthly energy usage (kWh) for common appliances based on your daily usage hours.</p>
        </div>
        
        <div className="feature">
          <h3>Lebanon-Specific Pricing</h3>
          <p>Get accurate cost estimations derived from current private generator rates, helping you budget better.</p>
        </div>
        
        <div className="feature">
          <h3>Energy Saving Tips</h3>
          <p>Practical, actionable advice tailored for Lebanese homes to reduce consumption during both E.O.L. and generator hours.</p>
        </div>
        
        <div className="feature">
          <h3>Mobile App Sync (Phase 2)</h3>
          <p>Future functionality to track personal, real-time usage and compare your savings against national and regional averages.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;