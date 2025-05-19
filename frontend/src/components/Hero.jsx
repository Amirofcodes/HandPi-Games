// frontend/src/components/Hero.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="section bg-gradient-to-br from-primary to-secondary text-white">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Master Sign Language 
                            <span className="block text-accent">Through Play</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-lg">
                            Learn the fundamentals of sign language with our interactive, camera-based games that make learning both fun and effective.
                        </p>
                        <div className="flex space-x-4">
                            <Link to="/game" className="btn bg-white text-primary hover:bg-neutral hover:text-secondary font-semibold shadow-lg">
                                Start Playing
                            </Link>
                            <a href="#about" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="absolute -inset-2 bg-white/20 rounded-2xl blur-lg"></div>
                            <img 
                                src="/img/slider-1.png" 
                                alt="Learning Sign Language" 
                                className="relative rounded-2xl shadow-lg w-full max-w-md object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
