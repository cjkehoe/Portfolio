// Navbar.js

import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full py-3 px-10 bg-transparent text-white fixed z-50">
      <div>
        <h1 className="text-2xl">Chris Kehoe</h1>
      </div>
      <div className="space-x-4">
        <Link 
          to="project1" 
          spy={true} 
          smooth={true} 
          className="cursor-pointer hover:text-blue-500 transition-colors duration-300 relative group"
        >
          Projects
          <span className="h-0.5 bg-blue-500 w-0 group-hover:w-full transition-all duration-300 absolute bottom-[-6px] left-1/2 transform -translate-x-1/2"></span>
        </Link>
        <Link 
          to="contact" 
          spy={true} 
          smooth={true} 
          className="cursor-pointer hover:text-blue-500 transition-colors duration-300 relative group"
        >
          Contact
          <span className="h-0.5 bg-blue-500 w-0 group-hover:w-full transition-all duration-300 absolute bottom-[-6px] left-1/2 transform -translate-x-1/2"></span>
        </Link>
      </div>
      <div>
        <button className="bg-white text-black py-1 px-4 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300">Resume</button>
      </div>
    </nav>
  );
}

export default Navbar;
