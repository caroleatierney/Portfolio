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
      <div className="flex justify-between items-center w-7/8">
        <Link title="Projects" to="/Projects">
          Post Bootcamp Projects
        </Link>

        <Link title="Boot Camp Projects" to="/BootCamp">
          Bootcamp Projects
        </Link>

        <a
          className="flex justify-center"
          title="View Resume"
          href={Resume}
          target="_blank"
        >
          Resume
        </a>

        {/* Certificates Button and Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-gray-300 bg-slate-800 hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-md px-5 py-1 text-center inline-flex items-center dark:bg-gray-200 dark:hover:bg-slate-800 dark:focus:ring-slate-800 border-1 border-gray-500 dark:border-gray-500"
            type="button"
          >
            Certificates
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
            className={`z-10 ${
              dropdownOpen ? "" : "hidden"
            } bg-gray-300 divide-y divide-gray-800 rounded-lg shadow-sm w-44 dark:bg-gray-200 absolute font-poppins`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href={GA}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-poppins"
                  target="_blank"
                  rel="noopener"
                >
                  General Assembly
                </a>
              </li>
              <li>
                <a
                  href={Promineo}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  target="_blank"
                  rel="noopener"
                >
                  Promineo
                </a>
              </li>
              <li>
                <a
                  href={Minos}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  target="_blank"
                  rel="noopener"
                >
                  Minos Labs
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center">
            <a
              title="Contact Me"
              href="https://www.linkedin.com"
              target="_blank"
            >
              <i className="fab fa-linkedin flex justify-center"></i>
            </a>
          </div>
          <div className="flex items-center">
            <a
              className="flex justify-center"
              title="View GitHub"
              href="https://www.github.com/caroleatierney"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
