import React from "react";
import TheFunBunch from "./../Assets/TheFunBunch.png";
import ParisAdventure from "./../Assets/ParisAdventure.png";
import Camryn from "./../Assets/Camryn.png";
import Jocelyn from "./../Assets/Jocelyn.png";
import BCLogo from "./../Assets/BCLogo.png";


export default function Projects() {
  return (
    <>
      <div className="m-2 flex flex-col">
        <h3 className="my-5 text-lg md:text-4xl text-center">
          Project Experience
        </h3>
        {/* ******************    The Fun Bunch     ****************** */}
        <div className="bg-slate-600 border-8 border-slate-900 pt-5 mx-auto w-7/8 mt-5 mb-10">
          <div className="text-slate-300 mb-5">
            <h3 className="text-md md:text-4xl text-center text-cyan-500">
              The Fun Bunch
            </h3>
            <p className="m-3 text-center text-xs md:text-lg p-2 md:w-3/4 mx-auto">
              This is an ongoing project that will hold photos and videos from
              excursions with The Fun Bunch! I built this based on a react
              project I started during my Promineo Boot Camp.
            </p>

            {/* Main Div */}
            <div className="flex flex-col md:flex-row justify-center md:m-5">
              {/* Left side section of larger screen */}
              <div className="justify-center m-1 md:my-5 md:w-1/2 items-center">
                <div className="w-full mx-auto">
                  <img
                    className="w-full border-8 border-cyan-500 mx-auto h-full"
                    src={TheFunBunch}
                    alt={"The Fun Bunch Main Page"}
                  />
                </div>

                <div className="flex flex-row justify-evenly text-center text-xs my-3">
                  <a
                    href="https://thefunbunch-client.onrender.com/"
                    title="View Live"
                    target="_blank"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/caroleatierney/TheFunBunch-Client"
                    title="View Client Code"
                    target="_blank"
                  >
                    View Client Code
                  </a>
                  <a
                    href="https://github.com/caroleatierney/TheFunBunch-Server"
                    title="View Server Code"
                    target="_blank"
                  >
                    View Server Code
                  </a>
                </div>
              </div>

              {/* Right side section of larger screen */}
              <div className="md:pl-10 flex flex-col md:w-1/2 items-center text-md justify-evenly">
                {/* Vertical list container */}
                <div className="pb-3">
                  <h3 className="text-md md:text-lg lg:text-3xl">
                    Notable features:
                  </h3>
                  <ul className="list-disc list-inside text-xs">
                    <li>
                      Full CRUD - Users can add, update and delete photos and
                      comments
                    </li>
                  </ul>
                  <h3 className="text-md md:text-3xl pt-10">
                    Technologies used:
                  </h3>
                  <ul className="text-xs list-disc list-inside">
                    <li>HTML</li>
                    <li>Tailwind</li>
                    <li>MongoDB</li>
                    <li>React</li>
                    <li>FlowBite React</li>
                    <li>Vite</li>
                    <li>Render</li>
                    <li>React Components</li>
                  </ul>
                  '{" "}
                  <h3 className="text-md md:text-3xl pt-5">
                    Room for improvement:
                  </h3>
                  <ul className="text-xs list-disc list-inside">
                    <li>color titles still on for sizing</li>
                    <li>Check responsiveness</li>
                  </ul>
                  '
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ******************    Paris Trip App     ****************** */}
        <div className="bg-slate-600 border-8 border-slate-900 pt-5 mx-auto w-7/8 my-10">
          <div className="text-slate-300 mb-5">
            <h3 className="text-md md:text-4xl text-center text-red-300">
              Trip to France
            </h3>
            <p className="m-3 text-center text-xs md:text-lg p-2 md:w-3/4 mx-auto">
              This website was designed to be a live scrapbook for a trip to
              Paris with my very good friend, Roseann. When it is finally
              complete, I plan to share it with all the other travellers on our
              French River Waterways River Barge Cruise aboard 'The Adrienne'.
              We started and ended in Paris! The background is intended to be
              fun and goofy.
            </p>

            {/* Main Div */}
            <div className="flex flex-col md:flex-row justify-center md:m-5">
              {/* Left side section of larger screen */}
              <div className="justify-center m-1 md:my-5 md:w-1/2 items-center">
                <div className="w-full mx-auto">
                  <img
                    className="w-full border-8 border-red-300 mx-auto h-full"
                    src={ParisAdventure}
                    alt={"Paris Adventure"}
                  />
                </div>

                <div className="flex flex-row justify-evenly text-center text-xs my-3">
                  <a
                    href="https://parisadventure-client.onrender.com"
                    className="website-link"
                    title="View Live"
                    target="_blank"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/caroleatierney/ParisAdventure-Client"
                    className="website-link"
                    title="View Client Code"
                    target="_blank"
                  >
                    View Client Code
                  </a>
                  <a
                    href="https://github.com/caroleatierney/ParisAdventure-Server"
                    className="website-link"
                    title="View Server Code"
                    target="_blank"
                  >
                    View Server Code
                  </a>
                </div>
              </div>

              {/* Right side section of larger screen */}

              <div className="md:pl-10 flex flex-col md:w-1/2 items-center text-md justify-evenly">
                {/* Vertical list container */}
                <div className="flex flex-col pb-3">
                  <h3 className="text-md md:text-lg lg:text-3xl">
                    Notable features:
                  </h3>
                  <ul className="list-disc list-inside text-xs">
                    <li>
                      Full CRUD - Users can add, update and delete photos and
                      comments
                    </li>
                    <li>
                      When you click on a photo, you can see comments people
                      have left
                    </li>
                  </ul>

                  <h3 className="text-md md:text-3xl pt-5">
                    Technologies used:
                  </h3>
                  <ul className="text-xs list-disc list-inside">
                    <li>HTML</li>
                    <li>Tailwind</li>
                    <li>MongoDB</li>
                    <li>React</li>
                    <li>FlowBite React</li>
                    <li>Vite</li>
                    <li>Render</li>
                    <li>React Components</li>
                  </ul>

                  <h3 className="text-md md:text-3xl pt-5">
                    Room for improvement:
                  </h3>
                  <ul className="text-xs list-disc list-inside">
                    <li>Add search back</li>
                    <li>Allow to search for any location and radius</li>
                    <li>
                      Remove specialty pages or allow to personalize them ???
                    </li>
                    <li>Currently making it responsive</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ******************    Camryn's Portfolio     ****************** */}
        <div className="bg-slate-600 border-8 border-slate-900 pt-5 mx-auto w-7/8 my-10">
          <div className="text-slate-300 mb-5">
            <h3 className="text-md md:text-4xl text-center text-red-800">
              Digital Portfolio - Camryn
            </h3>
            <p className="m-3 text-center text-xs md:text-lg p-2 md:w-3/4 mx-auto">
              This is a React project for a friend that was about to graduate.
              It is strictly HTML and Tailwind.
            </p>

            {/* Main Div */}
            <div className="flex flex-col md:flex-row justify-center md:m-5">
              {/* Left side section of larger screen */}
              <div className="justify-center m-1 md:my-5 md:w-1/2 items-center">
                <div className="w-full mx-auto">
                  <img
                    className="w-full border-8 border-red-800 mx-auto h-full"
                    src={Camryn}
                    alt={"Camryn's Portfolio Main Page"}
                  />
                </div>

                <div className="flex flex-row justify-evenly text-center text-xs my-3">
                  <a
                    href="https://caroleatierney.github.io/Camryn-Portfolio/"
                    title="View Live"
                    target="_blank"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/caroleatierney/Camryn-Portfolio"
                    title="View Client Code"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* Right side section of larger screen */}

              <div className="md:pl-10 flex flex-col md:w-1/2 items-center text-md justify-evenly">
                {/* Vertical list container */}
                <div className="pb-3">
                  <h3 className="text-md md:text-lg lg:text-3xl">
                    Notable features:
                  </h3>
                  <ul className="list-disc list-inside text-xs">
                    <li>Form that sends an email via EmailJS</li>
                    <li>Customized Flowbite-React Components</li>
                    <li>Fully Reponsive</li>
                  </ul>

                  <h3 className="text-md md:text-3xl pt-10">
                    Technologies used:
                  </h3>
                  <ul className="text-xs list-disc list-inside">
                    <li>HTML</li>
                    <li>Tailwind</li>
                    <li>Flowbite-React</li>
                    <li>React</li>
                    <li>Vite</li>
                    <li>EmailJS</li>
                  </ul>

                  <h3 className="text-md md:text-3xl pt-10">
                    Room for improvement:
                  </h3>
                  <ul className="text-xs list-disc list-inside">
                    <li>Make Responsive</li>
                    <li>Event Proposal Carousel - Make 1/2?</li>
                    <li>Fix main image</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ******************    Jocelyn's Portfolio     ****************** */}
        <div className="bg-slate-600 border-8 border-slate-900 pt-5 mx-auto w-7/8 my-10">
          <div className="text-slate-300 mb-5">
            <h3 className="text-md md:text-4xl text-center text-indigo-200">
              Digital Portfolio - Jocelyn
            </h3>
            <p className="m-3 text-center text-xs md:text-lg p-2 md:w-3/4 mx-auto">
              This is an individual project for my daughter who ws about to
              graduate. It uses HTML and Bootstrap 4.
            </p>

            {/* Main Div */}
            <div className="flex flex-col md:flex-row justify-center md:m-5">
              {/* Left side section of larger screen */}
              <div className="justify-center m-1 md:my-5 md:w-1/2 items-center">
                <div className="w-full mx-auto">
                  <img
                    className="w-full border-8 border-blue-900 mx-auto h-full"
                    src={Jocelyn}
                    alt={"Jocelyn's Portfolio Main Page"}
                  />
                </div>

                <div className="flex flex-row justify-evenly text-center text-xs my-3">
                  <a
                    href="https://caroleatierney.github.io/Jocelyn-Portfolio/"
                    title="View Live"
                    target="_blank"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/caroleatierney/Jocelyn-Portfolio"
                    title="View Client Code"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* Right side section of larger screen */}

              <div className="md:pl-10 flex flex-col md:w-1/2 items-center text-md justify-evenly">
                {/* Vertical list container */}

                <div className="pb-3">
                  <h3 className="text-md md:text-lg lg:text-3xl">
                    Notable features:
                  </h3>
                  <ul className="list-disc list-inside text-xs">
                    <li>Bootsrap form</li>
                    <li>Bootstrap table</li>
                    <li>Bootstrap grid</li>
                    <li>Font Awesome</li>
                  </ul>

                  <h3 className="text-md md:text-3xl pt-10">
                    Technologies used:
                  </h3>
                  <ul className="text-xs list-disc list-inside">
                    <li>HTML</li>
                    <li>Bootstrap only for styling (no CSS)</li>
                    <li>EmailJS</li>
                  </ul>

                  <h3 className="text-md md:text-3xl pt-10">
                    Room for improvement:
                  </h3>
                  <ul className="text-xs list-disc list-inside">
                    <li>Smaller, better image</li>
                    <li>About me and contact words larger</li>
                    <li>About me page larger</li>
                    <li>Ad a link to her resume</li>
                    <li>Search for other art work </li>
                    <li>Nana's sign</li>
                    <li>Sal's sign</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ******************    BC Goal     ****************** */}

        <div className="bg-slate-600 border-8 border-slate-900 pt-5 mx-auto w-7/8 my-10">
          <div className="text-slate-300 mb-5">
            <h3 className="text-md md:text-4xl text-center text-yellow-200">
              Boston College Field Goal
            </h3>
            <p className="m-3 text-center text-xs md:text-lg p-2 md:w-3/4 mx-auto">
              This is a tribute to my husband who kicked a field goal at Boston
              College and won a car.
            </p>

            {/* Main Div */}
            <div className="flex flex-col md:flex-row justify-center md:m-5">
              {/* Left side section of larger screen */}
              <div className="justify-center m-1 md:my-5 md:w-1/2 items-center">
                <div className="w-full mx-auto">
                  <img
                    className="w-full border-8 border-black mx-auto h-full"
                    src={BCLogo}
                    alt={"Boston College Logo"}
                  />
                </div>

                <div className="flex flex-row justify-evenly text-center text-xs my-3">
                  <a
                    href="https://caroleatierney.github.io/BCGoal/"
                    title="View Live"
                    target="_blank"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/caroleatierney/BCGoal"
                    title="View Client Code"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* Right side section of larger screen */}

              {/* Right side section of larger screen */}

              <div className="md:pl-10 flex flex-col md:w-1/2 items-center text-md justify-evenly">
                {/* Vertical list container */}

                <div className="pb-3">
                  <h3 className="text-md md:text-lg lg:text-3xl">
                    Notable features:
                  </h3>
                  <ul className="list-disc list-inside text-xs">
                    <li>Not much!</li>
                  </ul>

                  <h3 className="text-md md:text-3xl pt-10">
                    Technologies used:
                  </h3>
                  <ul className="text-xs list-disc list-inside">
                    <li>React</li>
                    <li>Tailwind for styling (no CSS)</li>
                  </ul>

                  <h3 className="text-md md:text-3xl pt-10">
                    Room for improvement:
                  </h3>
                  <ul className="text-xs list-disc list-inside">
                    <li>Nothing - just a simple website</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
