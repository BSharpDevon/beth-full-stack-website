import React from 'react';
import IconCarousel from '../components/IconCarousel';

function Home() {
    return (
      <div className="home-page">
        <div className="container text-center mt-5">
          <h1 className="display-4">Welcome to Beth’s Portfolio</h1>
          <p className="lead">Full-stack developer and creative human.</p>
        </div>  
    
        {/* Carousel */}
        <div className="carousel-bottom">
          <IconCarousel/>
        </div>
      </div>
    );
  }
  export default Home;
  