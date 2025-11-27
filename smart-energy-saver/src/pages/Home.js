import React from 'react';
import ApplianceCard from '../components/ApplianceCard';

function Home() {
  const appliances = [
    { id: 1, name: 'Air Conditioner (1.5hp)', usage: '270', cost: '81-135' },
    { id: 2, name: 'Refrigerator (Standard)', usage: '54', cost: '16-27' },
    { id: 3, name: 'Television (LED)', usage: '36', cost: '11-18' },
    { id: 4, name: 'Washing Machine (3x/week)', usage: '30', cost: '9-15' },
    { id: 5, name: 'Water Heater (Daily Use)', usage: '180', cost: '54-90' },
    { id: 6, name: 'LED Lights (6 Bulbs)', usage: '18', cost: '5-9' }
  ]; // add morrrre heree

  return (
    <div>
      <header className="hero">
        <h1>Smart Appliance Energy Saver</h1>
        <p className="hero-subtext">Manage Lebanon's Electricity Crisis - Calculate & Save Energy</p>
      </header>
      
      <section className="appliance-grid-section">
        <h2>Common Appliances in Lebanese Homes</h2>
        <div className="grid">
          {appliances.map(appliance => (
            <ApplianceCard key={appliance.id} appliance={appliance} />
          ))}
        </div>
      </section>
      
      <section className="lebanon-info">
        <h3>Lebanon Power Crisis Facts</h3>
        <ul>
          <li>Daily Power Cuts: 16-20 hours .</li>
          <li>Generator Costs: Often $0.40-$0.50/kWh (Private Generator)</li>
          <li>Government Electricity Supply: Typically 4-8 hours daily</li>
        </ul>
        <p className="note">*Cost estimates are based on generator rates, as this is the primary source of power.</p>
      </section>
    </div>
  );
}

export default Home;