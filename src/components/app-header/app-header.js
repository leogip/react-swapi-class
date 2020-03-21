import React from 'react';
import { NavLink } from 'react-router-dom';

export const AppHeader = () => (
  <nav className="navbar mb-2">
    <NavLink className="navbar-brand" to="/">
      SWAPI
    </NavLink>
    <ul className="nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/people/">
          People
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/planets/">
          Planets
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/starships/">
          Starship
        </NavLink>
      </li>
    </ul>
  </nav>
);
