// src/components/IconCarousel.jsx
import React, { useEffect, useRef, useState } from 'react';
import './IconCarousel.css';  

// --- ICONS ---
// Array of objects defining each icon's URL and accessible name.
const ICONS = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg', alt: 'HTML5' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg', alt: 'CSS3' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg', alt: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
  { src: 'https://miro.medium.com/v2/resize:fit:1200/1*In1BgimeWvX8_9NjKwoY2w.png', alt: 'Vite' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg', alt: 'MySQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg', alt: 'Git' },
  { src: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg', alt: 'GitHub' },
  { src: 'https://i.ytimg.com/vi/H46C8rEaVHg/maxresdefault.jpg', alt: 'CodePen' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original-wordmark.svg', alt: 'Postman' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg', alt: 'VS Code' },
  { src: 'https://cdn.dribbble.com/userupload/10426970/file/still-d2c7ea827bf4b90f4fdd39cf15e9a835.png?format=webp&resize=400x300&vertical=center', alt: 'Figma' }
];

/**
 * A continuously scrolling carousel of tech icons.
 * Duplicates icons to fill space and loops infinitely.
 */
const IconCarousel = () => {
  // Reference to the scrolling container element
  const scrollContainerRef = useRef(null);
  // State holds the icons array and duplicates for continuous scrolling
  const [icons, setIcons] = useState(ICONS);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return; // DOM node not yet available

    // Duplicate icons if there's not enough width to scroll smoothly
    const ensureEnoughContent = () => {
      const visibleWidth = scrollContainer.offsetWidth;
      const totalWidth = scrollContainer.scrollWidth;
      if (totalWidth < 2 * visibleWidth) {
        setIcons(prev => [...prev, ...prev]);
      }
    };
    ensureEnoughContent();

    let animationFrameId;
    const scrollSpeed = 0.5; // pixels per frame

    // moveIcons: moves the carousel and loops it back to start
    const moveIcons = () => {
      scrollContainer.scrollLeft += scrollSpeed;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(moveIcons);
    };

    moveIcons();
    // Cleanup: stop the animation when the component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Render scrolling container and each icon image
  return (
    <div className="tech-carousel-container">
      <div className="tech-carousel" ref={scrollContainerRef}>
        {icons.map((icon, idx) => (
          <div className="tech-item" key={idx}>
            <img height={80} src={icon.src} alt={icon.alt} />
            <div className="tech-label">{icon.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconCarousel;