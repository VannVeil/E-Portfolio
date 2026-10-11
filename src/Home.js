import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center h-[30vh] bg-gradient-to-b from-rose-100 to-pink-50"
    >
      <h2 className="text-4xl font-extrabold mb-3 text-gray-800">
        Welcome to My Portfolio
      </h2>
      <p className="text-base text-gray-700 max-w-xl leading-relaxed">
        Hi! I'm Yvonne Marie Rodriguez, a BSIT student at Cavite State University – Tanza Campus.
        I enjoy coding, gaming, and caring for my cats.
      </p>
    </section>
  );
}
