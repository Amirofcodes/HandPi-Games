// frontend/src/components/Footer.jsx

import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-white shadow-smooth-t py-8">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                HandPi
                            </span>
                            <span className="text-dark font-medium">Games</span>
                        </div>
                        <p className="text-sm text-gray-500">
                            Learn sign language through interactive games
                        </p>
                    </div>
                    
                    <div className="text-sm text-gray-500">
                        &copy; {currentYear} HandPi Games. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
