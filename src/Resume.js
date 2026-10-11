
import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="p-10 bg-white/80 backdrop-blur-sm rounded-xl shadow-md my-6">
      <h2 className="text-3xl font-bold mb-4 text-rose-600">Resume</h2>
      <p className="text-gray-700">Education: BSIT, CvSU – Tanza Campus</p>
      <p className="text-gray-700">Skills: Basic React, Tailwind (still learning), GitHub fundamentals</p>
      <a
        href="/resume.pdf"
        download
        className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 hover:shadow-lg transition duration-300"
      >
        Download CV
      </a>
    </section>
  );
}
