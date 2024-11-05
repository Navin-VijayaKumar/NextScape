import React, { useState, useEffect } from 'react';
import './Home.css';
import reef from './Assertsp/reef.jpg';
import pond from './Assertsp/pond.jpg';
import r1 from './Assertsp/r1.jpg';
import slidern1 from './Assertsp/slidern1.jpg';
import slidern2 from './Assertsp/slidern2.jpg';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [reef, pond, r1, slidern1, slidern2]; 
  const texts = [
    { title: "Coral Reef Ecosystem", description: "Explore the vibrant life within coral reefs." },
    { title: "Beautiful Pond", description: "Discover the tranquility of a serene pond." },
    { title: "Rock Scape", description: "Witness the colorful underwater Rock world..." },
    { title: "Coral Reef and Rock Ecosystem", description: "Relax by the peaceful Rock Ecosystem view." },
    { title: "Planted Tank Make You feel alive", description: "A Piece of Nature Inside Your House" }
  ]; 
  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); 
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (direction) => {
    let newIndex = activeIndex + (direction === 'next' ? 1 : -1);
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousal-all">
      <div className="carousel" data-carousel>
        <button
          className="button1n"
          onClick={() => handleButtonClick('prev')}
          data-carousel-button="prev"
        >
          &#8656;
        </button>
        <button
          className="button2n"
          onClick={() => handleButtonClick('next')}
          data-carousel-button="next"
        >
          &#8658;
        </button>
        <ul data-slides>
          {images.map((image, index) => (
            <li
              key={index}
              className={`slider1 ${index === activeIndex ? 'active' : ''}`}
              data-active={index === activeIndex ? true : null}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
              {index === activeIndex && ( // Display text only for the active slide
                <div className="slide-text">
                  <h1>{texts[index].title}</h1>
                  <p>{texts[index].description}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
