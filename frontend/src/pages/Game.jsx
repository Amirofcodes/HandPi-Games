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
        <div className="section relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-darker to-dark z-0"></div>
            <div className="absolute inset-0 bg-noise opacity-10 z-0"></div>
            <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-gradient-radial from-primary/5 to-transparent opacity-50 blur-[100px] z-0"></div>
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-gradient-radial from-accent/5 to-transparent opacity-50 blur-[100px] z-0"></div>
            
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
                    <div className="flex flex-col md:flex-row gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:w-3/5"
                        >
                            <div className="card-highlight overflow-hidden">
                                <div className="relative z-10">
                                    {!videoError ? (
                                        <div className="relative">
                                            <motion.img
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                ref={imgRef}
                                                src={`${apiBase}/video_feed`}
                                                alt="Video feed"
                                                onError={handleVideoError}
                                                className="w-full rounded-lg"
                                            />
                                            <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm shadow-glow">
                                                <span className="mr-2">● Live Camera</span>
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

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="md:w-2/5"
                        >
                            <div className="card-highlight h-full flex flex-col p-6">
                                <div className="relative z-10">
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold mb-4 text-white">Current Task</h2>
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
                                        <p className="text-center text-gray-400">Show this letter in sign language</p>
                                    </div>

                                    <div className="glass rounded-lg p-4 mb-6">
                                        <h3 className="font-semibold mb-2 text-white">Status</h3>
                                        <motion.p 
                                            className={`${
                                                message.includes('Correct') 
                                                    ? 'text-green-400' 
                                                    : message.includes('Incorrect') 
                                                        ? 'text-red-400' 
                                                        : 'text-gray-400'
                                            }`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            key={message}
                                        >
                                            {message}
                                        </motion.p>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="font-semibold mb-2 text-white">Detected Gesture</h3>
                                        <p className="text-lg font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                            {detectedGesture || 'None detected yet'}
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="font-semibold mb-2 text-white">Score</h3>
                                        <p className="text-lg font-medium text-white">
                                            <span className="text-primary">{score}</span> / {ALPHABET.length}
                                        </p>
                                    </div>

                                    <div className="mt-auto">
                                        <h3 className="font-semibold mb-3 text-white">Progress</h3>
                                        <div className="flex space-x-3 justify-center">
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
                                                    transition={{ delay: idx * 0.1 }}
                                                >
                                                    {letter}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
