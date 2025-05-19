// frontend/src/pages/Home.jsx

import React from 'react';
import Hero from '../components/Hero';

function Home() {
    return (
        <div>
            <Hero />
            <section className="my-8">
                <h2 className="text-3xl font-bold text-center mb-6">Welcome to HandPi Games</h2>
                <p className="text-center text-lg mb-8">
                    Learn and master sign language through interactive games and challenges. 
                    Start playing now and make learning fun!
                </p>
            </section>
        </div>
    );
}

export default Home;
