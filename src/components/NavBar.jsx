// src/components/NavBar.jsx

import React from 'react';
// Link gives us client-side routing (no full page reload)
import { Link } from 'react-router-dom';
// Import the CSS module so class names are scoped locally
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    // Semantic wrapper for navigation
    <nav className={styles.navbar}>
      {/* Centers content and constrains width */}
      <div className={styles.container}>

        {/* Your “brand” on the left; clicking this goes home */}
        <Link to="/" className={styles.brand}>
          Beth Sharp.
        </Link>

        {/* Group of links/buttons on the right */}
        <div className={styles.links}>

          {/*
            Home link:
            - Contains both icon and text
            - icon (.icon) shows by default
            - text (.text) appears only on hover
            - aria-label for screen readers
          */}
          <Link to="/" className={styles.link} aria-label="Home">
            {/* the house icon (shown by default) */}
            <i className={`bi bi-house ${styles.icon}`} />

            {/* the word “Home” (hidden by default) */}
            <span className={styles.text}>Home</span>
          </Link>

          {/* Plain text “About” link */}
          <Link to="/about" className={styles.link}>
            About
          </Link>

          {/* Plain text “Contact” link */}
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
