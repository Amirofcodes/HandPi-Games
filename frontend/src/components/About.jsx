import React from 'react';

function About() {
    const features = [
        {
            title: "Camera Recognition",
            description: "Our machine learning model accurately recognizes hand gestures in real-time",
            icon: "📷"
        },
        {
            title: "Interactive Learning",
            description: "Practice sign language through engaging and fun challenges",
            icon: "✨"
        },
        {
            title: "Progress Tracking",
            description: "See your scores and track your improvement over time",
            icon: "📊"
        }
    ];

    return (
        <section id="about" className="section bg-neutral">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        HandPi Games uses computer vision technology to detect and recognize your hand gestures, making sign language learning interactive and fun.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;