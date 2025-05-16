import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>Inicio</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/cards" className={styles.navLink}>Tarjetas</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/budget" className={styles.navLink}>Presupuesto</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/expenses" className={styles.navLink}>Gastos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;