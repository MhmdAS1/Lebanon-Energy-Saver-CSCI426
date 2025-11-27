import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => { 
 return (
<nav className="navbar">
<h2>Lebanon Energy Saver</h2>
<div className="links">
 <Link to="/">Home</Link>
 <Link to="/about">About</Link>
 <Link to="/features">Features </Link>
 <Link to="/services">Services</Link>
 <Link to="/community">Community </Link>
<Link to="/contact">Contact</Link>
</div>

 </nav>
);
}

export default Navbar;