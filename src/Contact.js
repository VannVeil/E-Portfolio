import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="p-10 bg-white/80 backdrop-blur-sm rounded-xl shadow-md my-6">
      <h2 className="text-3xl font-bold mb-4 text-rose-600">Contact Me</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 hover:shadow-lg transition duration-300"
          >
            Send
          </button>
        </form>
      ) : (
        <p className="text-green-600">✅ Message sent successfully!</p>
      )}
    </section>
  );
}
