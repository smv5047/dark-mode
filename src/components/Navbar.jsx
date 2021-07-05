import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import DetailedView  from "./DetailedView"

const Navbar = ({coinData}) => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  //Return nav bar including coins mapped ot navbar
  return (
    <nav className="navbar">
      <Router>
        <Link className="coinLinks" exact to="/">
          <h1>Crypto Tracker</h1>
        </Link>
      </Router>

      
      <div className ="navLinks">
        {coinData.map(coin => (
        <Router>
            <Link className="coinLinks" exact 
              to={{
                pathname: `/${coin.name}`,
                state: {coinData}
              }}>
                <p>{coin.name}</p>
            </Link>
            <Switch>
              <Route path={`/${coin.name}`} component={DetailedView} />
            </Switch>
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

// `../pages/${coin.name}`}