import React from 'react';

function About() {
  return (
    <div className="page">
      <h1>About Lebanon Energy Saver</h1>
      <p className="lead-paragraph">This project was designed to provide crucial information and 
        tools for Lebanese households to manage their consumption effectively during the ongoing power and economic crisis. Our goal is transparency and empowerment.</p>

      <h2>Our Mission</h2>
      <p>To educate and empower Lebanese families to make smart, cost-saving energy choices by providing accurate usage calculations and 
        actionable conservation tips specific to the local context (E.O.L. vs. Generator). We focus on reducing dependency on expensive generator subscriptions.</p>

      <h2>Mobile App Integration (Future Phase)</h2>
      <p>The system is designed to seamlessly integrate with a companion mobile application (Phase 2/3). 
        This app will allow users to log their specific appliance models, track personal daily usage in real-time, and compare their savings with community benchmarks.</p>
    </div>
  );
}

export default About;