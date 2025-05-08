// src/pages/About.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import beth from '../assets/images/beth.jpg';
import bethAndBloom from '../assets/images/bethAndBloom.jpg';

export default function About() {
  return (
    <div className={styles.page}>

      <header className={styles.header}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.intro}>
          Hi! I'm Beth Sharp, a journalist-turned-comms specialist who swapped being landlocked for seaside life when I moved to Devon. Five years ago, I left journalism for communications and reignited my passion for tech with a digital transformation team.
        </p>
      </header>

      {/* First section now shows bethAndBloom on the left */}
      <section className={styles.content}>
        <img src={bethAndBloom} alt="Beth and Bloom" className={styles.imageLeft} />
        <p>
          When my daughter arrived two years ago, my priorities shifted. I decided spending 40-plus hours a week doing something I’m good at but didn’t enjoy wasn’t enough for me or my family. Inspired by a Code First Girls alumna and friend, I dove into coding and discovered my passion ran deeper than I imagined.
        </p>
        <p>
          I spent two hours a night, four nights a week attending classes, plus an extra 20 hours a week on homework for six months. While juggling a full-time job with extended hours and being a mum, I achieved a Full-Stack Nanodegree with Code First Girls (Distinction, 92%) and a Master’s in Cyber Security (Merit, 87%).
        </p>
      </section>

      {/* Second section now shows beth.jpg on the right */}
      <section className={styles.content}>
        <img src={beth} alt="Beth Sharp" className={styles.imageRight} />
        <p>
          Every Tuesday, I virtually meet two fellow “girl-coders” to push our final-project app forward—just for fun. We’ve already sketched out our next two builds. It’s become a hobby, letting me enjoy complex problem-solving and benefit from pair-programming.
        </p>
        <p>
          My dream employer values continuous learning and progression, invests in both its own and its employees’ futures, and supports underrepresented groups. I bring commitment, camaraderie, and a sense of humour to every team.
        </p>
        <p>
          Our family motto is “it’s nice to be nice.” Compassion, empathy and treating everyone as I’d like to be treated have helped me build work families and lifelong friendships across walks of life.
        </p>
      </section>

      <div className={styles.ctaWrapper}>
        <Link to="/contact" className={styles.ctaButton}>
          Get in touch
        </Link>
      </div>
    </div>
  );
}
