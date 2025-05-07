import React from "react";
import TheFunBunch from "./../Assets/TheFunBunch.png";

export default function Projects() {
  return (
    <>
      <div className="m-2" >
      <h3 className="my-5 text-lg text-center">Project Experience</h3>

        <div className="bg-slate-600 border-8 border-slate-900 pt-5 mx-auto">
          <div className="text-slate-300 mb-5">
            <h3 className="text-md md:text-xl text-center">The Fun Bunch</h3>
            <h3 className="text-md md:text-xl text-center pt-4">Project Description:</h3>
            <p className="m-3 text-center text-xs md:text-md p-2">
              This is an ongoing project that will hold photos and videos from
              excursions with The Fun Bunch!
            </p>

            {/* Main Div */}
            <div className="flex flex-col md:flex-row justify-center md:m-5">
              {/* Left side section of larger screen */}
              <div className="justify-center m-1 md:my-5 md:w-1/2 items-center">
                <div className="w-full mx-auto">
                  <img
                    className="w-full border-8 border-cyan-500 mx-auto h-full"s
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

              <div className="md:pl-10 flex flex-col md:w-1/2 items-center justify-center mx-auto text-md">
                <div className="flex flex-col pt-5">
                  {/* Horizontal list container */}
                  <div className="pb-3">
                    <h3 className="text-md md:text-lg lg:text-3xl">Notable features:</h3>
                    <ul className="list-disc list-inside text-xs">
                      <li>
                        Full CRUD - Users can add, update and delete photos and
                        comments
                      </li>
                      <li>Fully Reponsive</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-md md:text-3xl">Technologies used:</h3>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
