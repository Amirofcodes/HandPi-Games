// frontend/src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    return (
        <header className="bg-dark/90 backdrop-blur-lg border-b border-white/5 sticky top-0 z-50">
            <div className="container py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <motion.span 
                            className="text-2xl font-extrabold heading-gradient"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            HandPi
                        </motion.span>
                        <motion.span 
                            className="text-white font-medium"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Games
                        </motion.span>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Link to="/" className="text-white/80 hover:text-primary transition-colors font-medium">
                                Home
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/game" className="btn btn-primary">
                                Play Now
                            </Link>
                        </motion.div>
                    </nav>
                    
                    {/* Mobile menu button */}
                    <motion.button 
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </motion.button>
                </div>
                
                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <motion.nav 
                        className="md:hidden pt-4 pb-2 border-t border-white/10 mt-4 space-y-3"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link 
                            to="/" 
                            className="block py-2 text-white/80 hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/game" 
                            className="block py-2 text-primary font-semibold hover:text-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Play Now
                        </Link>
                    </motion.nav>
                )}
            </div>
        </header>
    );
}

export default Header;
