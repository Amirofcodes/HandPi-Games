// frontend/src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Game from './pages/Game';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <main className="container mx-auto px-4 py-6">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game" element={<Game />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
