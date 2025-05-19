// frontend/src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-primary text-white py-4 shadow-md">
            <div className="container flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold">
                    HandPi Games
                </Link>
                <nav>
                    <Link to="/" className="mx-2 hover:text-gray-200">Home</Link>
                    <Link to="/game" className="mx-2 hover:text-gray-200">Play</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
