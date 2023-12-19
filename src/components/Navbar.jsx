import React from "react";
import { NavLink } from "react-router-dom";
import cvPDF from "../doc/Pasindu Perakum - CV.pdf";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">PP</p>
      </NavLink>
      <nav className="flex text-lg gap-7">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
      <button>
        <a
          href={cvPDF}
          download
          className="text-white bg-blue-500 py-2 px-4 rounded-md"
        >
          Download CV
        </a>
      </button>
    </header>
  );
};

export default Navbar;
