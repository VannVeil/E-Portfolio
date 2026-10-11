import React, { useState } from "react";

export default function Projects() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="projects" className="p-10 bg-white/80 backdrop-blur-sm rounded-xl shadow-md my-6">
      <h2 className="text-3xl font-bold mb-4 text-rose-600">Projects</h2>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 hover:shadow-lg transition duration-300"
      >
        {showDetails ? "Hide Details" : "View More"}
      </button>
      {showDetails && (
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">Calculator Website</h3>
            <p className="text-gray-600">Built with React and Tailwind CSS.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">XML Portfolio Project</h3>
            <p className="text-gray-600">Structured portfolio using XML, DTD, and XSLT.</p>
          </div>
        </div>
      )}
    </section>
  );
}
