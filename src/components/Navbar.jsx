import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Navbar = ({coinData}) => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className ="navLinks">
        {coinData.map(coin => (
        <Router>
            <Link to={`../pages/${coin.name}`}>
                
                <p>{coin.name}</p>
            </Link>
        </Router>
        ))}
      </div>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
