// frontend/src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-darker pt-8">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-24 w-full max-w-5xl mx-auto px-4 mb-8 rounded-2xl">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-light">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Learn Sign Language
                    </span>
                    <br />
                    <span className="text-primary">The Modern Way</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10">
                    Play interactive games powered by AI and your camera. Minimal, fun, and effective.
                </p>
                <Link to="/game" className="btn btn-primary text-lg px-10 py-4 rounded-full">
                    Start Playing
                </Link>
            </section>

            {/* Features Section */}
            <section className="w-full max-w-5xl mx-auto px-4 py-16 mb-8 rounded-2xl">
                <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass flex flex-col items-center p-8 rounded-2xl">
                        <div className="feature-icon">📷</div>
                        <h3 className="text-xl font-bold text-light mb-2">Camera Recognition</h3>
                        <p className="text-white/60">AI-powered hand gesture detection in real time.</p>
                    </div>
                    <div className="glass flex flex-col items-center p-8 rounded-2xl">
                        <div className="feature-icon">🎮</div>
                        <h3 className="text-xl font-bold text-light mb-2">Interactive Games</h3>
                        <p className="text-white/60">Learn by playing, not memorizing. Practice as you play.</p>
                    </div>
                    <div className="glass flex flex-col items-center p-8 rounded-2xl">
                        <div className="feature-icon">📈</div>
                        <h3 className="text-xl font-bold text-light mb-2">Progress Tracking</h3>
                        <p className="text-white/60">See your improvement and celebrate milestones.</p>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="w-full flex flex-col items-center justify-center py-16 max-w-5xl mx-auto px-4 rounded-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light text-center">
                    Ready to Start?
                </h2>
                <p className="text-lg mb-8 max-w-xl text-center text-white/70">
                    Jump in and start learning sign language in a modern, interactive way.
                </p>
                <Link to="/game" className="btn btn-primary text-lg px-10 py-4 rounded-full">
                    Play Now
                </Link>
            </section>
        </main>
    );
}

export default Home;
