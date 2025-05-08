// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// styles is an object containing our CSS class names (so they don’t clash globally)
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      {/* Wrapper to keep everything in a neat row and centered */}
      <div className={styles.container}>

        {/* LEFT SIDE: your name/logo plus social icons */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* 
            Name acts as a “home” button.
          */}
          <Link to="/" className={styles.brand}>
            Beth Sharp.
          </Link>

          {/* 
            LinkedIn link:
            - target="_blank" opens it in a new tab
            - rel="noopener noreferrer" for security when opening new tabs
            - aria-label for screen readers announce “LinkedIn”
          */}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`${styles.link} ${styles.socialIcon}`}
          >
            {/* 
              This <i> tag shows the LinkedIn logo.
              styles.icon makes it big (2rem).
            */}
            <i className={`bi bi-linkedin ${styles.icon}`} />
            {/* 
              This <span> is hidden at first.
              On hover, we swap the icon out and show “Let’s connect” instead.
            */}
            <span className={styles.text}>LinkedIn</span>
          </a>

          {/* 
            GitHub link: same setup as LinkedIn above,
            just pointing to your GitHub URL and swapping "GitHub" on hover.
          */}
          <a
            href="https://github.com/BSharpDevon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`${styles.link} ${styles.socialIcon}`}
          >
            <i className={`bi bi-github ${styles.icon}`} />
            <span className={styles.text}>GitHub</span>
          </a>
        </div>

        {/* RIGHT SIDE: main navigation links */}
        <div className={styles.links}>

          {/*
            Each Link here follows the same pattern:
            - Icon shows by default (styles.icon)
            - Text label shows on hover(styles.text)
            - Underline and color-change on hover
          */}
          <Link to="/" className={styles.link} aria-label="Home">
            <i className={`bi bi-house ${styles.icon}`} />
            <span className={styles.text}>Home</span>
          </Link>

          <Link to="/about" className={styles.link} aria-label="About">
            <i className={`bi bi-file-person-fill ${styles.icon}`} />
            <span className={styles.text}>About</span>
          </Link>

          <Link to="/contact" className={styles.link} aria-label="Contact">
            <i className={`bi bi-envelope ${styles.icon}`} />
            <span className={styles.text}>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
