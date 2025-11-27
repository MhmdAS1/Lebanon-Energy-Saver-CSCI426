import React from 'react';
import { Link } from 'react-router-dom';

function ApplianceCard({ appliance }) {
  return (
  <div className="appliance-card">
  <h3>{appliance.name}</h3>
  <p>Typical Usage: <span className="text-highlight">{appliance.usage} kWh/month</span></p>
  <p>Est. Generator Cost: <span className="text-highlight">${appliance.cost}/month*</span></p>
      <Link to={`/appliance/${appliance.id}`} className="card-link-button">
        <button>View Details & Calculate</button>
      </Link>
    </div>
  );
}
export default ApplianceCard;