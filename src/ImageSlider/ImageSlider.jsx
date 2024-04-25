import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const goToNextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="relative">
            <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="w-full" />
            <button onClick={goToPreviousSlide}>
                Previous
            </button>
            <button onClick={goToNextSlide}>
                Next
            </button>
        </div>
    );
};

export default ImageSlider;