import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function GameCard({ title, description, image, link }) {
    return (
        <div className="card hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="relative h-48 overflow-hidden rounded-t-xl -mx-6 -mt-6 mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold z-20">{title}</h3>
            </div>
            
            <p className="text-gray-600 mb-6">{description}</p>
            
            <Link 
                to={link} 
                className="inline-flex items-center font-medium text-primary hover:text-secondary transition-colors"
            >
                Play Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </Link>
        </div>
    );
}

GameCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default GameCard;