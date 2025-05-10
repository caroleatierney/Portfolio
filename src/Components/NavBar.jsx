import React, { useState } from "react";
import { Link } from "react-router-dom";
import Resume from "./../Assets/Resume-2024.pdf";
import Promineo from "./../Assets/Promineo.pdf";
import GA from "./../Assets/GeneralAssembly.pdf";
import Minos from "./../Assets/MinosLabs.pdf";

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Certificates x
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href={GA}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                General Assembly
              </a>
            </li>
            <li>
              <a
                href={Promineo}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Promineo
              </a>
            </li>
            <li>
              <a
                href={Minos}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Minos Labs
              </a>
            </li>
          </ul>
        </div>

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
