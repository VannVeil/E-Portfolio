import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-rose-400 to-pink-500 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="font-bold text-xl">My Portfolio</h1>
      <ul className="flex space-x-4">
        <li><Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">About</Link></li>
        <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Projects</Link></li>
        <li><Link to="resume" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Resume</Link></li>
        <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Contact</Link></li>
      </ul>
    </nav>
  );
}
