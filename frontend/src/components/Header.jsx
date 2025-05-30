// frontend/src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    return (
        <header className="bg-dark/95 border-b border-primary/20 sticky top-0 z-50">
            <div className="container flex items-center justify-between py-4">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src="/img/header-logo.png" alt="HandPi Games Logo" className="h-10 w-auto" />
                </Link>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="text-white/80 hover:text-primary font-medium">Home</Link>
                    <Link to="/game" className="btn btn-primary">Play Now</Link>
                </nav>
                
                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>
            
            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <nav className="md:hidden flex flex-col items-center py-4 space-y-2 bg-dark border-t border-primary/20">
                    <Link to="/" className="text-white/80 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link to="/game" className="btn btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>Play Now</Link>
                </nav>
            )}
        </header>
    );
}

export default Header;
