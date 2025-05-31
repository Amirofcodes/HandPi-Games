import React from 'react';
import Hero from './components/Hero';
import DemoVideo from './components/DemoVideo';
import TechStack from './components/TechStack';
import HowItWorks from './components/HowItWorks';
import LocalSetup from './components/LocalSetup';
import NextSteps from './components/NextSteps';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <HowItWorks />
      <DemoVideo />
      <TechStack />
      <LocalSetup />
      <NextSteps />
      <Footer />
    </div>
  );
}

export default App; 