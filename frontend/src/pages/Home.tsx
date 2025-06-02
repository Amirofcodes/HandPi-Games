import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            HandPi Games Demo
          </h1>
          <p className="text-xl text-gray-300">
            AI-Powered Hand Gesture Recognition Game
          </p>
        </motion.div>

        {/* Main content with larger video */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-gray-800 rounded-lg p-8 shadow-xl flex flex-col h-full"
          >
            <h2 className="text-3xl font-semibold mb-4 text-blue-400">
              🎮 Watch the Demo
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              HandPi Games is an interactive educational game that uses computer vision 
              and machine learning to recognize hand gestures for letters A, B, C, and D.
            </p>
            <div className="flex-1 min-h-[600px] flex items-center bg-black rounded-lg overflow-hidden">
              <video 
                className="w-full max-h-full"
                controls
                poster="/demo-thumbnail.jpg"
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          <div className="lg:col-span-2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800 rounded-lg p-8 shadow-xl"
            >
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                🚧 Production Status
              </h2>
              <p className="text-gray-300 mb-6">
                Currently, this demo version is a showcase of the project's capabilities. 
                The full game requires camera access for gesture recognition, which we're 
                working to implement securely in a production environment.
              </p>
              <div className="space-y-6">
                <div className="border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">
                    🔍 Try it Locally
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Experience the full interactive version by running it locally:
                  </p>
                  <a 
                    href="https://github.com/Amirofcodes/HandPi-Games"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-800 rounded-lg p-8 shadow-xl"
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                🛠 Technical Stack
              </h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">•</span>
                  React 18 + Vite + TailwindCSS
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">•</span>
                  Python Flask + OpenCV + TensorFlow
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">•</span>
                  Docker + Kubernetes + ArgoCD
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">•</span>
                  Real-time Computer Vision Processing
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 text-lg">
            This project was developed as part of a portfolio demonstration, 
            showcasing full-stack development, AI integration, and modern DevOps practices.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 