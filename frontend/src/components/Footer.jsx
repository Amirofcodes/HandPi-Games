// frontend/src/components/Footer.jsx

import React from 'react';

function Footer() {
    return (
        <footer className="bg-primary text-white py-4">
            <div className="container text-center">
                &copy; {new Date().getFullYear()} HandPi Games. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
