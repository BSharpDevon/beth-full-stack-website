// src/pages/Home.jsx
import React from 'react';
import IconCarousel from '../components/IconCarousel';
import profilePhoto from '../assets/images/bethPP.jpg';
// Step 1: import your CSS Module
import styles from './Home.module.css';

export default function Home() {
  return (
    // Step 2: wrap with your module class
    <div className={styles.page}>
      {/* Header section */}
      <header className={styles.header}>
        {/* Step 3: use module class on the img */}
        <img
          src={profilePhoto}
          alt="Beth Sharp"
          className={styles.avatar}
        />
        <h1 className={styles.title}>Hello, I’m Beth</h1>
        <p className={styles.subtitle}>
          Full Stack Developer | React | JavaScript
        </p>
      </header>

      {/* Main content (fills the gap) */}
      <main className={styles.main}>
        {/* ...other content... */}
      </main>

      {/* Carousel pinned to bottom */}
      <section className={styles.carousel}>
        <IconCarousel />
      </section>
    </div>
  );
}
