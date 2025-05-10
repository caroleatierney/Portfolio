import React from "react";
import Dogs from "./../Assets/Dogs.png";
import Butterflies from "./../Assets/ButterfliesOfNewEngland.png";
import Nina from "./../Assets/Nina.png";

export default function BootCamp() {
  return (
    <>
      <div className="m-2">
        <h3 className="my-5 text-lg md:text-4xl text-center">
          Project Experience
        </h3>
        {/* ******************    Nina's Website     ****************** */}

        <div className="bg-slate-600 border-8 border-slate-900 pt-5 mx-auto">
          <div className="text-slate-300 mb-5">
            <h3 className="text-md md:text-4xl text-center text-cyan-500">
              Nina
            </h3>
            <p className="m-3 text-center text-xs md:text-lg p-2 md:w-3/4 mx-auto">
              The purpose of this project was to use strictly HTML and a CSS
              Stylesheet (no inline styling) to create a website.
            </p>

            {/* Main Div */}
            <div className="flex flex-col md:flex-row justify-center md:m-5">
              {/* Left side section of larger screen */}
              <div className="justify-center m-1 md:my-5 md:w-1/2 items-center">
                <div className="w-full mx-auto">
                  <img
                    className="w-full border-8 border-cyan-500 mx-auto h-full"
                    src={Nina}
                    alt={"Nina"}
                  />
                </div>

                <div className="flex flex-row justify-evenly text-center text-xs my-3">
                  <a
                    href="https://caroleatierney.github.io/Nina_Story/"
                    class="website-link"
                    title="View Live"
                    target="_blank"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/caroleatierney/Nina_Story"
                    class="website-link"
                    title="View Code"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* Right side section of larger screen */}

              <div className="md:pl-10 flex flex-col md:w-1/2 items-center justify-center mx-auto text-md">
                <div className="flex flex-col pt-5">
                  {/* Horizontal list container */}
                  <div className="pb-3">
                    <h3 className="text-md md:text-lg lg:text-3xl">
                      Notable features:
                    </h3>
                    <ul className="list-disc list-inside text-xs">
                      <li>Multiple pages</li>
                      <li>Includes images and video links</li>
                      <li>Chart with website links</li>
                      <li>List</li>
                      <li>Radio buttons</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-md md:text-3xl">Technologies used:</h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>HTML</li>
                      <li>CSS stylesheet using selectors</li>
                      <li>FlexBox</li>
                      <li>Used Coolor's Widget for color pallet</li>
                    </ul>
                    <h3 className="text-md md:text-3xl">
                      Room for improvement:
                    </h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>Use Google to send an email from a static page</li>
                      <li>Add back and Fix Leprechan image size</li>
                      <li>
                        Add some inline javascript to keep count of viewer's
                        Aussie coat tallies
                      </li>
                      <li>MockApI to store tallies></li>
                      <li>Make responsive</li>
                      <li>
                        Note: I had a big issue with GH-Pages and deleted the
                        project locally. When I was able to deply it to GH-Pages
                        the styling changed a lot. Maybe related to an NPM
                        package that needs to be re-installed.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ******************    Dog App     ****************** */}

        <div className="bg-slate-600 border-8 border-slate-900 pt-5 mx-auto">
          <div className="text-slate-300 mb-5">
            <h3 className="text-md md:text-4xl text-center text-pink-600">
              Dog App
            </h3>
            <p className="m-3 text-center text-xs md:text-lg p-2 md:w-3/4 mx-auto">
              This app performs full CRUD using MockApi. Mock API was seeded
              with data from an api, "thedogapi".
            </p>

            {/* Main Div */}
            <div className="flex flex-col md:flex-row justify-center md:m-5">
              {/* Left side section of larger screen */}
              <div className="justify-center m-1 md:my-5 md:w-1/2 items-center">
                <div className="w-full mx-auto">
                  <img
                    className="w-full border-8 border-cyan-500 mx-auto h-full"
                    src={Dogs}
                    alt={"Dogs App Image"}
                  />
                </div>

                <div className="flex flex-row justify-evenly text-center text-xs my-3">
                  <a
                    href="https://caroleatierney.github.io/Dogs/"
                    class="website-link"
                    title="View Live"
                    target="_blank"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/caroleatierney/Dogs/"
                    class="website-link"
                    title="View Code"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* Right side section of larger screen */}

              <div className="md:pl-10 flex flex-col md:w-1/2 items-center justify-center mx-auto text-md">
                <div className="flex flex-col pt-5">
                  {/* Horizontal list container */}
                  <div className="pb-3">
                    <h3 className="text-md md:text-lg lg:text-3xl">
                      Notable features:
                    </h3>
                    <ul className="list-disc list-inside text-xs">
                      <li>Used Bootswatch to try some different styling</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-md md:text-3xl">Technologies used:</h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>CSS</li>
                      <li>HTML</li>
                      <li>React</li>
                      <li>Bootstrap</li>
                    </ul>
                    <h3 className="text-md md:text-3xl">
                      Room for improvement:
                    </h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>
                        Uses "thedogsapi" to seed MockAPI based on a search box
                      </li>
                      <li>Make the search to be based on a category</li>
                      <li>Make responsive</li>
                      <li>testUncaught TypeError: t.map is not a function</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ******************    Butterflies of New England     ****************** */}
        <div className="bg-slate-600 border-8 border-slate-900 mt-10 mx-auto">
          <div className="text-slate-300 my-5">
            <h3 className="text-md md:text-4xl text-center text-orange-300">
              Butterflies of New England
            </h3>
            <p className="m-3 text-center text-xs md:text-lg p-2 md:w-3/4 mx-auto">
              This project was intended to create a full CRUD application using
              a mock API. I chose MockAPI.
            </p>

            {/* Main Div */}
            <div className="flex flex-col md:flex-row justify-center md:m-5">
              {/* Left side section of larger screen */}
              <div className="justify-center m-1 md:my-5 md:w-1/2 items-center">
                <div className="w-full mx-auto">
                  <img
                    className="w-full border-8 border-cyan-500 mx-auto h-full"
                    src={Butterflies}
                    alt={"Butterfly App Image"}
                  />
                </div>

                <div className="flex flex-row justify-evenly text-center text-xs my-3">
                  <a
                    href="https://caroleatierney.github.io/Butterflies_of_New_England/"
                    class="website-link"
                    title="View Live"
                    target="_blank"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/caroleatierney/Butterflies_of_New_England"
                    class="website-link"
                    title="View Code"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* Right side section of larger screen */}

              <div className="md:pl-10 flex flex-col md:w-1/2 items-center justify-center mx-auto text-md">
                <div className="flex flex-col pt-5">
                  {/* Horizontal list container */}
                  <div className="pb-3">
                    <h3 className="text-md md:text-lg lg:text-3xl">
                      Notable features:
                    </h3>
                    <ul>
                      <li>This application uses JSON Server</li>
                      <li>
                        Full CRUD - Users can add, update and delete photos and
                        comments
                      </li>
                      <li>Fully Reponsive</li>
                      <li>
                        When you click on a photo, you can see comments people
                        have left
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-md md:text-3xl">Technologies used:</h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>CSS</li>
                      <li>HTML</li>
                      <li>Bootstrap</li>
                    </ul>
                    <h3 className="text-md md:text-3xl">
                      Room for improvement:
                    </h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>Seed API using butterfly api</li>
                      <li>Make responsive</li>
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
