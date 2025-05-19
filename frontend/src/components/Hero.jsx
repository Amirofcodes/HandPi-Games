// frontend/src/components/Hero.jsx

import React from 'react';

function Hero() {
    return (
        <section className="bg-primary text-white py-20 text-center">
            <h1 className="text-5xl font-bold mb-4">Master Sign Language</h1>
            <p className="text-lg mb-8">Learn the basics of sign language through fun and interactive games.</p>
            <img src="/img/slider-1.png" alt="Learning Sign Language" className="mx-auto w-64 rounded-lg shadow-lg" />
        </section>
    );
}

export default Hero;
