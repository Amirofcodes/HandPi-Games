// frontend/src/components/Footer.jsx

import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-dark border-t border-white/5 py-8">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div 
                        className="mb-6 md:mb-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="text-xl font-bold heading-gradient-2">
                                HandPi
                            </span>
                            <span className="text-white font-medium">Games</span>
                        </div>
                        <p className="text-sm text-gray-400">
                            Learn sign language through interactive games
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        className="text-sm text-gray-400 md:text-right"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="mb-2">Made with 
                            <motion.span 
                                className="text-red-500 inline-block mx-1"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ 
                                    duration: 1.5, 
                                    repeat: Infinity,
                                    repeatType: "reverse" 
                                }}
                            >
                                ❤️
                            </motion.span> 
                            for sign language learners
                        </p>
                        <p>&copy; {currentYear} HandPi Games. All rights reserved.</p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
