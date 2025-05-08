import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/cards">Tarjetas</Link>
        </li>
        <li>
          <Link to="/budget">Presupuesto</Link>
        </li>
        <li>
          <Link to="/expenses">Gastos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;