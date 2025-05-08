import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="text-xs md:text-lg flex flex-col w-full items-center justify-evenly h-full text-gray-300">
      <div className="flex justify-between w-7/8">
        <a title="Contact Me" href="https://www.linkedin.com" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          title="View GitHub"
          href="https://www.github.com/caroleatierney"
          target="_blank"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          title="View Resume"
          href="/dist/Assets/Resume_2024.pdf"
          target="_blank"
        >
          Resume
        </a>
        <a
          title="Promineo Tech Certificate"
          href="/dist/Assets/Promineo_Tech.pdf"
          target="_blank"
        >
          Promineo Tech Certificate
        </a>
        <a
          title="General Assembly Certificate"
          href="/dist/Assets/General_Assembly.pdf"
          target="_blank"
        >
          General Assembly Certificate
        </a>
      </div>

      <div className="flex justify-evenly w-1/2">
        <Link title="Home" to="/Home">
          Home
        </Link>

        <Link title="Boot Camp Projects" to="/BootCamp">
          Boot Camp Projects
        </Link>
      </div>
    </div>
  );
}
