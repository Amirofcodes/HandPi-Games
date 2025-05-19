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
        <section id="about" className="section relative overflow-hidden">
            {/* Background gradient & effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-darker to-dark z-0"></div>
            <div className="absolute inset-0 bg-noise opacity-10 z-0"></div>
            <div className="absolute right-1/4 top-1/4 w-72 h-72 bg-accent/10 rounded-full filter blur-[100px] z-0"></div>
            
            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-glow">
                        How It Works
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        HandPi Games uses computer vision technology to detect and recognize your hand gestures, making sign language learning interactive and fun.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="card-highlight hover:shadow-glow transition-all duration-300"
                        >
                            <div className="text-4xl mb-6 bg-gradient-to-br from-primary/20 to-accent/20 w-16 h-16 rounded-xl flex items-center justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;