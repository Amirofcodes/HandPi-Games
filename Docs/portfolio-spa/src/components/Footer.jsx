// frontend/src/components/Footer.jsx

import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-dark border-t border-primary/20 py-8">
            <div className="container flex flex-col items-center text-center">
                <img src="/img/footer-logo.png" alt="HandPi Games Logo" className="h-12 w-auto mb-2" />
                <p className="text-sm text-white/60 mb-1">
                    Made with <span className="text-primary">♥</span> for sign language learners
                </p>
                <p className="text-xs text-white/40">&copy; {currentYear} HandPi Games. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
