import React from "react";
import TheFunBunch from "./../Assets/TheFunBunch.png";

export default function Projects() {
  return (
    <>
      <div>
        <h3 className="my-5 text-4xl text-center">Project Experience</h3>

        <div className="bg-slate-600 border-8 border-slate-900 w-7/8 pt-5 mx-auto">
          <h3 className=" text-slate-300 text-4xl text-center">
            The Fun Bunch
          </h3>

          {/* Main Div */}
          <div className="flex flex-row justify-center text-slate-300 m-5">
            {/* Left side section of larger screen */}
            <div className="flex flex-col justify-center my-5 w-1/2">
              <div>
                <img
                  className="w-full border-8 border-slate-300 mx-auto h-full"
                  src={TheFunBunch}
                  alt={"Grand Antigua Local's Party"}
                />
              </div>

              <div className="flex flex-row justify-evenly my-3 text-gray-100">
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

            <div className="flex flex-col w-1/2 items-center justify-center mx-auto pl-10">
              <h3 className="text-center">Project Description:</h3>
              <p className="my-3">
                This is an ongoing project that will hold photos and videos from
                excursions with The Fun Bunch!
              </p>
              <div className="flex flex-row w-full pt-5">
                {" "}
                {/* Horizontal list container */}
                <div className="w-1/2">
                  <h3>Notable features:</h3>
                  <ul className="list-disc list-inside">
                    <li>
                      Full CRUD - Users can add, update and delete photos and
                      comments
                    </li>
                    <li>Fully Reponsive</li>
                  </ul>
                </div>
                <div className="w-1/2 mx-5">
                  <h3>Technologies used:</h3>
                  <ul className="list-disc list-inside">
                    <li>HTML</li>
                    <li>Tailwind</li>
                    <li>MongoDB</li>
                    <li>React</li>
                    <li>FlowBite React</li>
                    <li>Vite</li>
                    <li>Render</li>
                    <li>React Components</li>
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
