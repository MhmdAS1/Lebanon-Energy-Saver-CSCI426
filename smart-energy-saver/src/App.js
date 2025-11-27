import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About' ;
import Features from './pages/Features'  ;
import Contact from './pages/Contact';
import Appliance from './pages/Appliance';
import Community from './pages/Community' ; 
import Services from './pages/Services';   
import Footer from './components/Footer' ; 
import './App.css'; 

const App = () => {
 return (
 <Router >
<div className="App"> 
 <Navbar />
 <main className="content-container">
<Routes>
<Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
<Route path="/features" element={<Features />} />
 <Route path="/services" element={<Services />} /> 
 <Route path="/community" element={<Community />} /> 
<Route path="/contact" element={<Contact />} />
<Route path="/appliance/:id" element={<Appliance />} />
</Routes>
</main>
<Footer />
</div>
</Router>
);
}

export default App;