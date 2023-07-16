import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import './App.css';

const slides = [
  {
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmAMQIa5E1PJszM-3pUXt0a_T67OWlmIjVg&usqp=CAU`,
    text: 'Random Text 1',
  },
  {
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmAMQIa5E1PJszM-3pUXt0a_T67OWlmIjVg&usqp=CAU`,
    text: 'Random Text 2',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmAMQIa5E1PJszM-3pUXt0a_T67OWlmIjVg&usqp=CAU',
    text: 'Random Text 3',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmAMQIa5E1PJszM-3pUXt0a_T67OWlmIjVg&usqp=CAU',
    text: 'Random Text 4',
  },
];

function App() {
  return (
    <div className="App">
      <div className="carousel-container">
        <Carousel
          axis="vertical"
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          emulateTouch={true}
          swipeable={true}
          interval={3000}
          transitionTime={1000}
          className="carousel"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                className="arrow-prev"
                onClick={onClickHandler}
                title={label}
              />
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                className="arrow-next"
                onClick={onClickHandler}
                title={label}
              />
            )
          }
          renderThumbs={() => null}
        >
          {slides.map((slide, index) => (
            <motion.div
              className="slider-slide"
              key={`slide-${index}`}
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: '0%' }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ duration: 1 }}
            >
              <div className="slide-content">
                <div className="image-container">
                  <img src={slide.image} alt={`Slide ${index + 1}`} />
                </div>
                <div className="text-container">
                  <p>{slide.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
