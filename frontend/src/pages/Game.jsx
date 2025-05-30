// frontend/src/pages/Game.jsx

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const ALPHABET = ['A', 'B', 'C', 'D'];

export default function Game() {
    const [message, setMessage] = useState('No game in progress');
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameCompleted, setGameCompleted] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const [detectedGesture, setDetectedGesture] = useState('');
    const imgRef = useRef(null);

    // ENV url helper
    const apiBase = import.meta.env.VITE_API_URL;

    useEffect(() => {
        startGame();
    }, []);

    // Poll every second to let backend evaluate gesture
    useEffect(() => {
        if (!gameStarted || gameCompleted) return;
        const id = setInterval(runCheckLoop, 1000);
        return () => clearInterval(id);
    }, [gameStarted, gameCompleted, currentLetterIndex]);

    const startGame = async () => {
        try {
            await axios.post(`${apiBase}/start`);
            setGameStarted(true);
            setGameCompleted(false);
            setScore(0);
            setCurrentLetterIndex(0);
            setMessage(`Game started! Show the letter: ${ALPHABET[0]}`);
            setVideoError(false);
        } catch (err) {
            console.error(err);
            setMessage('Error starting game, please try again.');
        }
    };

    const runCheckLoop = async () => {
        try {
            const { data } = await axios.get(`${apiBase}/check`);
            const { message: m, new_letter, score: sc, predicted_gesture, expected_letter } = data;

            if (predicted_gesture) setDetectedGesture(predicted_gesture);
            if (m === 'Correct!') {
                setScore(sc);
                if (currentLetterIndex === ALPHABET.length - 1) {
                    // Completed
                    setGameCompleted(true);
                    setMessage('Congratulations! You\'ve completed the game!');
                    return;
                }
                setCurrentLetterIndex(prev => prev + 1);
                setMessage(`Correct! Now show the letter: ${new_letter}`);
            } else if (m === 'Incorrect, try again') {
                setMessage(`Incorrect. Expected: ${expected_letter}, Detected: ${predicted_gesture}. Try again!`);
            } else if (m === 'No game in progress') {
                setGameStarted(false);
                setMessage('Game session expired. Please start again.');
            }
        } catch (err) {
            console.error(err);
            setMessage('Error checking gesture, ensure camera works.');
        }
    };

    const handleVideoError = () => {
        setVideoError(true);
        setMessage('Video feed unavailable. Check your camera.');
    };

    return (
        <div className="min-h-screen bg-darker text-white flex flex-col">
            <div className="flex-1 flex flex-col justify-center py-8">
                <motion.div 
                    className="container relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-10"
                    >
                        <h1 className="heading-gradient text-4xl md:text-5xl font-bold mb-4">
                            Sign Language Game
                        </h1>
                        <p className="text-white/70 max-w-xl mx-auto">
                            Practice sign language by showing the requested gestures to your camera.
                        </p>
                    </motion.div>

                    {(!gameStarted || gameCompleted) ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="card-highlight max-w-2xl mx-auto text-center p-8"
                        >
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                    {gameCompleted ? 'Game Complete! 🎉' : 'Ready to Start?'}
                                </h2>
                                <p className="text-gray-400 mb-8">
                                    {gameCompleted 
                                        ? `Congratulations! You've completed the game with a score of ${score}/${ALPHABET.length}.` 
                                        : 'Show the requested sign language gestures to your camera and see if you can complete all the letters.'}
                                </p>
                                <motion.button
                                    onClick={startGame}
                                    className="btn btn-primary px-10"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {gameCompleted ? 'Play Again' : 'Start Game'}
                                </motion.button>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="flex flex-col items-center justify-center space-y-12 px-4">
                            {/* Video Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative mx-auto w-full max-w-4xl"
                            >
                                <div className="card-highlight overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-primary/20">
                                    <div className="relative aspect-video w-full flex justify-center items-center bg-black/10">
                                        {!videoError ? (
                                            <div className="relative w-full h-full">
                                                <motion.img
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    ref={imgRef}
                                                    src={`${apiBase}/video_feed`}
                                                    alt="Video feed"
                                                    onError={handleVideoError}
                                                    className="w-full h-full object-cover"
                                                />
                                                {/* Live Indicator */}
                                                <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-green-400 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                                    <span>Live Camera</span>
                                                </div>
                                                {/* AI Detection Indicator */}
                                                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                                                    AI Detection Active
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="p-8 bg-red-900/20 border border-red-500/30 text-red-400 rounded-lg text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                </svg>
                                                <h3 className="text-xl font-bold mb-2 text-red-400">Camera Not Available</h3>
                                                <p>Please check your camera access permissions and try again.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Game Status - Centered and Clean */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="w-full max-w-4xl text-center"
                            >
                                {/* Status Message */}
                                <motion.div 
                                    className="mb-8"
                                    key={message}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <p className={`text-xl font-semibold ${
                                        message.includes('Correct') 
                                            ? 'text-green-400' 
                                            : message.includes('Incorrect') 
                                                ? 'text-red-400' 
                                                : 'text-gray-300'
                                    }`}>
                                        {message}
                                    </p>
                                </motion.div>

                                {/* Game Info Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                    {/* Current Letter */}
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-white font-semibold mb-4 text-lg">Show the letter:</h3>
                                        <div className={`letter-box ${currentLetterIndex > 0 ? 'letter-box-active' : ''}`}>
                                            <motion.span 
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                key={ALPHABET[currentLetterIndex]}
                                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                            >
                                                {ALPHABET[currentLetterIndex]}
                                            </motion.span>
                                        </div>
                                    </div>

                                    {/* Detected Gesture */}
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-white font-semibold mb-4 text-lg">Detected gesture:</h3>
                                        <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-3xl font-bold">
                                            {detectedGesture || 'Unknown'}
                                        </div>
                                    </div>

                                    {/* Score */}
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-white font-semibold mb-4 text-lg">Score:</h3>
                                        <div className="text-3xl font-bold">
                                            <span className="text-primary">{score}</span>
                                            <span className="text-gray-400"> / {ALPHABET.length}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Indicators */}
                                <div className="flex space-x-2 justify-center flex-wrap gap-2">
                                    {ALPHABET.map((letter, idx) => (
                                        <motion.div
                                            key={letter}
                                            className={`
                                                ${idx < currentLetterIndex ? 'progress-item-completed' : ''}
                                                ${idx === currentLetterIndex ? 'progress-item-current' : ''}
                                                ${idx > currentLetterIndex ? 'progress-item-pending' : ''}
                                                progress-item
                                            `}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                        >
                                            {letter}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
