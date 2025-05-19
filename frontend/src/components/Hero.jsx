// frontend/src/components/Hero.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <section className="pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden relative">
            {/* Background gradient & effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark to-darker z-0"></div>
            <div className="absolute inset-0 bg-noise opacity-20 z-0"></div>
            
            {/* Animated background elements */}
            <motion.div 
                className="absolute left-1/2 top-1/3 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px] z-0"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.2, 0.3]
                }}
                transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    easings: ["easeInOut"]
                }}
            />
            <motion.div 
                className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-[100px] z-0"
                animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    easings: ["easeInOut"],
                    delay: 1
                }}
            />
            <motion.div 
                className="absolute left-1/4 bottom-1/3 w-48 h-48 bg-accent2/10 rounded-full filter blur-[80px] z-0"
                animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.2, 0.1, 0.2]
                }}
                transition={{ 
                    duration: 12,
                    repeat: Infinity,
                    easings: ["easeInOut"],
                    delay: 2
                }}
            />
            
            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <motion.div 
                        className="md:w-1/2 mb-12 md:mb-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h1 
                            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Master <span className="heading-gradient">Sign Language</span> Through Play
                        </motion.h1>
                        <motion.p 
                            className="text-lg md:text-xl mb-8 text-white/80 max-w-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Learn the fundamentals of sign language with our interactive, camera-based games that make learning both fun and effective.
                        </motion.p>
                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/game" className="btn btn-primary w-full sm:w-auto">
                                    <span className="mr-2">Start Playing</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <a href="#about" className="btn btn-outline w-full sm:w-auto">
                                    Learn More
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className="md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div 
                            className="relative"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ 
                                duration: 4, 
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent rounded-2xl blur opacity-50 animate-pulse"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"></div>
                            <div className="relative rounded-2xl glass shadow-card overflow-hidden">
                                <img 
                                    src="/img/slider-1.png" 
                                    alt="Learning Sign Language" 
                                    className="rounded-2xl shadow-lg w-full max-w-md object-cover z-10 relative"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-60"></div>
                                
                                {/* UI decoration elements */}
                                <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                                    Live Camera
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="bg-dark/80 backdrop-blur-sm rounded-lg p-2 border border-white/10">
                                        <div className="text-xs text-white/70 mb-1">Detection</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm font-medium text-white">Hand Gesture: <span className="text-primary">A</span></div>
                                            <div className="bg-green-500/20 text-green-500 px-2 py-0.5 rounded text-xs">90%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
