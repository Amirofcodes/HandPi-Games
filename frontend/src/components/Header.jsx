// frontend/src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    return (
        <header className="bg-white shadow-smooth sticky top-0 z-50">
            <div className="container py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            HandPi
                        </span>
                        <span className="text-dark font-semibold">Games</span>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-dark hover:text-primary transition-colors font-medium">
                            Home
                        </Link>
                        <Link to="/game" className="btn btn-primary">
                            Play Now
                        </Link>
                    </nav>
                    
                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden text-dark"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
                
                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="md:hidden pt-4 pb-2 border-t mt-4 space-y-3">
                        <Link 
                            to="/" 
                            className="block py-2 text-dark hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/game" 
                            className="block py-2 text-primary font-semibold hover:text-secondary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Play Now
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;
