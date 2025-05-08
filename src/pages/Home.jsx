// src/pages/Home.jsx

import React from 'react';
import IconCarousel from '../components/IconCarousel';
import profilePhoto from '../assets/images/bethPP.jpg';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        {/* 
          Avatar:
          - popIn+spin once on load
          - spin once on hover
        */}
        <img
          src={profilePhoto}
          alt="Beth Sharp"
          className={styles.avatar}
        />

        {/* Slide-up title */}
        <h1 className={styles.title}>Hello, I’m Beth</h1>
        <p className={styles.subtitle}>
          Full Stack Developer | React | JavaScript
        </p>
      </header>

      <main className={styles.main}>{/* …other content… */}</main>

      <section className={styles.carousel}>
        <IconCarousel />
      </section>
    </div>
  );
}
