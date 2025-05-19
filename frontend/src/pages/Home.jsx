// frontend/src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';

function Home() {
    return (
        <div className="bg-neutral">
            <Hero />
            
            <section className="section">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to HandPi Games</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Learn and master sign language through our interactive camera-based games. 
                            Our cutting-edge technology detects your hand gestures and provides real-time feedback.
                        </p>
                        <Link to="/game" className="btn btn-primary">
                            Try the Demo Game
                        </Link>
                    </div>
                    
                    <div className="mt-16 card p-8">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                                <h3 className="text-2xl font-bold mb-4">Master the Alphabet</h3>
                                <p className="text-gray-600 mb-4">
                                    Our first game teaches you the American Sign Language alphabet. 
                                    Start with letters A, B, C, and D in our demo version.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        Real-time feedback on your gestures
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        Practice at your own pace
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        Track your progress
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <img 
                                    src="/img/slider-1.png" 
                                    alt="Sign Language Alphabet" 
                                    className="rounded-lg shadow-card max-w-sm w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <About />
            
            <section className="section bg-gradient-to-br from-primary to-secondary text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Journey Today</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Jump in and start learning sign language in an interactive and fun way.
                    </p>
                    <Link to="/game" className="btn bg-white text-primary hover:bg-neutral hover:text-secondary text-lg px-8 py-3">
                        Play Now
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
