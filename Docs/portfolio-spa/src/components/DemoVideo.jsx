import React from 'react'

export default function DemoVideo() {
  return (
    <section id="demo" className="py-20 bg-gray-800 text-center">
      <h2 className="text-3xl font-semibold mb-6">60-Second Demo</h2>
      <div className="mx-auto w-full max-w-2xl">
        <video
          className="w-full h-auto rounded-lg shadow-lg"
          controls
          muted
          autoPlay={false}
          src="/demo.mp4"
          poster=""        /* optional: add a poster image if you have one */
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="mt-3 text-gray-400">
        All inference runs in the browser at <strong>59 FPS</strong> on a 2019 laptop.
      </p>
    </section>
  )
} 