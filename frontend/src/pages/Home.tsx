import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            HandPi Games Demo
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            AI-Powered Hand Gesture Recognition Game
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 rounded-lg p-6 shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              🎮 About This Demo
            </h2>
            <p className="text-gray-300 mb-4">
              HandPi Games is an interactive educational game that uses computer vision 
              and machine learning to recognize hand gestures for letters A, B, C, and D.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              {/* Replace with your actual demo video */}
              <video 
                className="w-full"
                controls
                poster="/demo-thumbnail.jpg"
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 rounded-lg p-6 shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">
              🚧 Production Status
            </h2>
            <p className="text-gray-300 mb-4">
              Currently, this demo version is a showcase of the project's capabilities. 
              The full game requires camera access for gesture recognition, which we're 
              working to implement securely in a production environment.
            </p>
            <div className="space-y-4">
              <div className="border border-gray-700 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">
                  🔍 Try it Locally
                </h3>
                <p className="text-gray-300 mb-2">
                  Experience the full interactive version by running it locally:
                </p>
                <a 
                  href="https://github.com/Amirofcodes/HandPi-Games"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  View on GitHub
                </a>
              </div>
              
              <div className="border border-gray-700 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">
                  🛠 Technical Stack
                </h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>React 18 + Vite + TailwindCSS</li>
                  <li>Python Flask + OpenCV + TensorFlow</li>
                  <li>Docker + Kubernetes + ArgoCD</li>
                  <li>Real-time Computer Vision Processing</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            This project was developed as part of a portfolio demonstration, 
            showcasing full-stack development, AI integration, and modern DevOps practices.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 