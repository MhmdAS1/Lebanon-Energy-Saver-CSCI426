import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Appliance = () => {
 const { id } = useParams();
 
 const [dailyHours, setDailyHours] = useState(8); 
 
 const applianceData = {
 1: { 
name: 'Air Conditioner (1.5hp)', 
wattage: 1500, 
 tips: [
'Use during government electricity hours whenever possible.',
 'Set thermostat higher (e.g., 24°C vs 18°C) to save 30% of energy.',
'Clean air filters monthly for a 10-15% boost in efficiency.'
] 
 },
 2: { 
 name: 'Refrigerator (Standard)', 
 wattage: 150, 
 tips: [
 'Keep the refrigerator 3/4 full for better cooling retention.',
'Check door seals regularly to prevent cold air loss.',
 'Allow hot food to cool completely before placing it inside.'
] 
 },
 3: { name: 'Television (LED)', wattage: 100, tips: ['Unplug or use a switchable power strip when off (phantom load).'] },
 4: { name: 'Washing Machine', wattage: 500, tips: ['Always wash full loads only.', 'Use cold water cycles—heating water is a major energy user.'] },
 5: { name: 'Water Heater', wattage: 3000, tips: ['Only turn on 1 hour before you need it.', 'Insulate the tank if possible.'] },
6: { name: 'LED Lights', wattage: 15, tips: ['Turn off lights when leaving the room.'] },
 };


const appliance = applianceData[id] || applianceData[1];

const getMonthlyUsageKWH = () => {
const hoursUsed = parseFloat(dailyHours);

 if (isNaN(hoursUsed) || hoursUsed <= 0) return 0;

return ((appliance.wattage * hoursUsed * 30) / 1000).toFixed(1);
};

const getEstimatedCostUSD = () => {
const kWh = parseFloat(getMonthlyUsageKWH());
const generatorRate = 0.40; 
if (isNaN(kWh) || kWh <= 0) return 0;

return (kWh * generatorRate).toFixed(2);
 };

const showResults = parseFloat(dailyHours) > 0;

 return (
<div className="page appliance-detail-page">
<h1>{appliance.name} Usage & Savings</h1>

 <div className="calculator-panel">
  <h3 className="calculator-title">Energy Calculator</h3>
 
<div className="input-group">
<label htmlFor="daily-hours">Daily Usage Hours:</label>
 <input 
id="daily-hours"
type="number" 
value={dailyHours} 
onChange={(e) => setDailyHours(e.target.value)}
min="0"
max="24" />
 </div>

<div className="results-panel">
<p>Monthly Wattage: <strong>{appliance.wattage} Watts</strong></p>

<p>Monthly Usage: 
<strong className="usage-result">
{showResults ? `${getMonthlyUsageKWH()} kWh` : '--'}
</strong>
 </p>
<p>Estimated Monthly Cost: 
<strong className="cost-result">
{showResults ? `$${getEstimatedCostUSD()}` : 'Enter usage above'}
</strong> (generator rate)
</p>
 </div>
 </div>

<div className="tips-section">
<h3>Lebanon Energy Saving Tips</h3>
 <ul>
 {appliance.tips.map((tip, index) => (
 <li key={index}>{tip}</li>
 ))}
 </ul>
 </div>

<div className="mobile-connection-promo">
<h3>Track Your Savings (Future Sync)</h3>
<p>In the next phase, you will be able to track your exact usage patterns in our mobile application and compare them with Lebanese averages.</p>
</div>
 </div>
 );
}

export default Appliance;