import React, { useState, useEffect } from 'react';
import './Carousel.css';
import webDev from '../../assets/website-creator-concept-illustration.png';
import design from '../../assets/flat-design-rebranding-illustration.png';
import marketing from '../../assets/hand-drawn-illustration-people-with-smartphone-marketing.png';

const Carousel = () => {
  const slides = [
    {
      image: webDev,
      title: 'Desenvolvimento Web',
      description: 'Criamos sites profissionais e aplicações web que impulsionam seu negócio no ambiente digital.'
    },
    {
      image: design,
      title: 'Design Criativo',
      description: 'Design inovador que fortalece sua marca e cria conexões memoráveis com seu público.'
    },
    {
      image: marketing,
      title: 'Marketing Digital',
      description: 'Estratégias personalizadas para aumentar sua visibilidade online e conquistar mais clientes.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className={`carousel-slide ${isTransitioning ? 'transitioning' : ''}`}>
          <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
          <div className="slide-content">
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].description}</p>
          </div>
        </div>

        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel; 