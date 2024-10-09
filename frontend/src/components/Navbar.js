import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Add your styles here

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/login">Login</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/register">Register</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/livescoreboard">Live Scoreboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
