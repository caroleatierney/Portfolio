import React from "react";
import { Link } from "react-router-dom";
import Resume from "./../Assets/Resume-2024.pdf";
import Promineo from "./../Assets/Promineo.pdf";
import GA from "./../Assets/GeneralAssembly.pdf";
import Minos from "./../Assets/MinosLabs.pdf";

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

        <a title="View Resume" href={Resume} target="_blank">
          Resume
        </a>

        <a title="Promineo Tech Certificate" href={Promineo} target="_blank">
          Promineo Tech Certificate
        </a>

        <a title="Minos Labs Certificate" href={Minos} target="_blank">
          Minos Labs Certificate
        </a>

        <a title="General Assembly Certificate" href={GA} target="_blank">
          General Assembly Certificate
        </a>
      </div>

      <div className="flex justify-evenly w-1/2">
        <Link title="Projects" to="/Projects">
          Post Bootcamp Projects
        </Link>

        <Link title="Boot Camp Projects" to="/BootCamp">
          Bootcamp Projects
        </Link>
      </div>
    </div>
  );
}
