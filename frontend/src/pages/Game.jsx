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
        <div className="min-h-screen bg-[#32264e] text-white flex flex-col items-center justify-start pt-8 px-4">
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent"
            >
                COMMENCER l'ALPHABET
            </motion.h1>

            {(!gameStarted || gameCompleted) ? (
                <>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg mb-6 text-center max-w-2xl"
                    >
                        Pratiquez l'alphabet en langue des signes avec notre jeu interactif. Montrez les gestes devant la caméra et voyez si vous pouvez compléter tout l'alphabet !
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        onClick={startGame}
                        className="bg-gradient-to-r from-gradientStart to-gradientEnd hover:opacity-90 text-black font-bold py-3 px-14 rounded-full"
                    >
                        {gameCompleted ? 'Play Again' : 'Start Game'}
                    </motion.button>
                </>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center w-full max-w-3xl"
                >
                    {/* Video feed */}
                    {!videoError ? (
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            ref={imgRef}
                            src={`${apiBase}/video_feed`}
                            alt="Video feed"
                            onError={handleVideoError}
                            className="rounded-lg mb-6 w-full"
                        />
                    ) : (
                        <div className="mb-6 p-4 bg-red-600 text-white rounded-lg">
                            Video feed unavailable. Please check your camera.
                        </div>
                    )}

                    <p className="text-xl mb-2 text-center">{message}</p>
                    <p className="text-2xl mb-2">Show the letter: {ALPHABET[currentLetterIndex]}</p>
                    <p className="text-xl mb-2">Detected gesture: {detectedGesture}</p>
                    <p className="text-xl mb-6">Score: {score} / {ALPHABET.length}</p>

                    <div className="flex space-x-2 mb-8">
                        {ALPHABET.map((letter, idx) => (
                            <motion.span
                                key={letter}
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${idx < currentLetterIndex ? 'bg-green-500' : idx === currentLetterIndex ? 'bg-yellow-500' : 'bg-gray-600'}`}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
}
