// import React from 'react'
import React, { useState, useEffect } from 'react';
import './slider.css'
function Slider1({ slides, interval }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % slides.length);
        }, interval);

        return () => clearInterval(timer);
    }, [currentSlide, interval, slides.length]);

    return (
        <div className="slider">
            {slides.map((slide, index) => (
                <div key={index} className={index === currentSlide ? 'slide active ' : 'slide'}>
                    <img src={slide.imageUrl} alt={slide.caption} />
                    {/* <div className="caption">{slide.caption}</div> */}
                </div>
            ))}
        </div>
    );
}

export default Slider1
