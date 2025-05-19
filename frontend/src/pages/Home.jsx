// frontend/src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import GameCard from '../components/GameCard';

function Home() {
    return (
        <div>
            <Hero />
            
            <section className="section relative">
                <div className="absolute inset-0 bg-darker z-0"></div>
                <div className="absolute inset-0 bg-noise opacity-5 z-0"></div>
                
                <div className="container relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-glow">
                            Welcome to HandPi Games
                        </h2>
                        <p className="text-lg text-white/70 mb-8">
                            Learn and master sign language through our interactive camera-based games. 
                            Our cutting-edge technology detects your hand gestures and provides real-time feedback.
                        </p>
                        <Link to="/game" className="btn btn-primary">
                            Try the Demo Game
                        </Link>
                    </div>
                    
                    <div className="mt-16">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/2">
                                <GameCard 
                                    title="ASL Alphabet Challenge"
                                    description="Master the American Sign Language alphabet through our interactive game. Practice and perfect your hand gestures."
                                    image="/img/slider-1.png"
                                    link="/game"
                                />
                            </div>
                            <div className="md:w-1/2 flex flex-col">
                                <div className="card-highlight mb-6 p-6">
                                    <h3 className="text-2xl font-bold mb-4 text-white">Master the Basics</h3>
                                    <p className="text-gray-400 mb-4">
                                        Our first game teaches you the American Sign Language alphabet. 
                                        Start with letters A, B, C, and D in our demo version.
                                    </p>
                                </div>
                                
                                <div className="card-highlight flex-grow p-6">
                                    <h3 className="text-lg font-semibold mb-4 text-white">Key Features</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-white/80">
                                            <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary">✓</span>
                                            Real-time feedback on your gestures
                                        </li>
                                        <li className="flex items-center text-white/80">
                                            <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary">✓</span>
                                            Practice at your own pace
                                        </li>
                                        <li className="flex items-center text-white/80">
                                            <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary">✓</span>
                                            Track your progress
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <About />
            
            <section className="section relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-0"></div>
                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay z-0"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-darker to-transparent z-0"></div>
                
                <div className="container relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Start Your Journey Today
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
                        Jump in and start learning sign language in an interactive and fun way.
                    </p>
                    <Link to="/game" className="btn btn-primary text-lg px-8 py-3">
                        Play Now
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
