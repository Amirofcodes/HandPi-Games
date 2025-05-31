import React from 'react'

export default function Hero() {
  return (
    <section className="bg-gray-900 text-center py-20">
      <h1 className="text-5xl font-bold mb-4">HandPi Games</h1>
      <p className="text-xl mb-6">
        Real-time sign-language gesture AI in the browser.
      </p>
      <a
        href="#demo"
        className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full mr-4"
      >
        Watch 40-sec Demo
      </a>
      <a
        href="https://github.com/Amirofcodes/HandPi-Games"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full"
      >
        View Source on GitHub
      </a>
    </section>
  )
} 