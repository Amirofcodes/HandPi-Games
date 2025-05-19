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
        <div className="section bg-gradient-to-br from-primary/10 to-accent/10 min-h-[calc(100vh-140px)]">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Sign Language Game
                    </h1>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Practice sign language by showing the requested gestures to your camera.
                    </p>
                </motion.div>

                {(!gameStarted || gameCompleted) ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="card max-w-2xl mx-auto text-center p-8"
                    >
                        <h2 className="text-2xl font-bold mb-6">
                            {gameCompleted ? 'Game Complete!' : 'Ready to Start?'}
                        </h2>
                        <p className="text-gray-600 mb-8">
                            {gameCompleted 
                                ? `Congratulations! You've completed the game with a score of ${score}/${ALPHABET.length}.` 
                                : 'Show the requested sign language gestures to your camera and see if you can complete all the letters.'}
                        </p>
                        <button
                            onClick={startGame}
                            className="btn btn-primary px-10"
                        >
                            {gameCompleted ? 'Play Again' : 'Start Game'}
                        </button>
                    </motion.div>
                ) : (
                    <div className="flex flex-col md:flex-row gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:w-3/5"
                        >
                            <div className="card overflow-hidden">
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
                                        <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                                            Live Camera
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-8 bg-red-50 text-red-600 rounded-lg text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <h3 className="text-xl font-bold mb-2">Camera Not Available</h3>
                                        <p>Please check your camera access permissions and try again.</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="md:w-2/5"
                        >
                            <div className="card h-full flex flex-col">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold mb-2">Current Task</h2>
                                    <div className="flex justify-center items-center h-24 w-24 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto mb-4">
                                        <span className="text-4xl font-bold text-white">{ALPHABET[currentLetterIndex]}</span>
                                    </div>
                                    <p className="text-center text-gray-600">Show this letter in sign language</p>
                                </div>

                                <div className="bg-neutral rounded-lg p-4 mb-6">
                                    <h3 className="font-semibold mb-2">Status</h3>
                                    <p className={`${message.includes('Correct') ? 'text-green-600' : message.includes('Incorrect') ? 'text-red-600' : 'text-gray-600'}`}>
                                        {message}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h3 className="font-semibold mb-2">Detected Gesture</h3>
                                    <p className="text-lg font-medium">
                                        {detectedGesture || 'None detected yet'}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h3 className="font-semibold mb-2">Score</h3>
                                    <p className="text-lg font-medium">{score} / {ALPHABET.length}</p>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="font-semibold mb-2">Progress</h3>
                                    <div className="flex space-x-2">
                                        {ALPHABET.map((letter, idx) => (
                                            <div
                                                key={letter}
                                                className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                                                    idx < currentLetterIndex 
                                                        ? 'bg-green-500 text-white' 
                                                        : idx === currentLetterIndex 
                                                            ? 'bg-primary text-white' 
                                                            : 'bg-gray-200 text-gray-500'
                                                }`}
                                            >
                                                {letter}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
}
