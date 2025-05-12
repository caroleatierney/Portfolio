import React from "react";
import Dogs from "./../Assets/Dogs.png";
import Butterflies from "./../Assets/ButterfliesOfNewEngland.png";
import Nina from "./../Assets/Nina.png";
import Maggie from "./../Assets/MensSalon.jpeg";
import Gene from "./../Assets/GeneShalit.png";
import Soap from "./../Assets/SoapScents.png";
import Marshfield from "./../Assets/MarBeachRec.png";
import Planner from "./../Assets/DinnerPlanner.png";
import TicTacToe from "./../Assets/TicTacToe.png";

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
                      <li>MockApI to store tallies</li>
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
                    className="w-full border-8 border-orange-300 mx-auto h-full"
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

        {/* ******************    Movie Review     ****************** */}
        <div className="bg-slate-600 border-8 border-slate-900 mt-10 mx-auto">
          <div className="text-slate-300 my-5">
            <h3 className="text-md md:text-4xl text-center text-yellow-700">
              Movie Review
            </h3>
            <p className="m-3 text-center text-xs md:text-lg p-2 md:w-3/4 mx-auto">
              The movie review app was an assignmnent to practice coding React
              components.
            </p>

            {/* Main Div */}
            <div className="flex flex-col md:flex-row justify-center md:m-5">
              {/* Left side section of larger screen */}
              <div className="justify-center m-1 md:my-5 md:w-1/2 items-center">
                <div className="w-full mx-auto">
                  <img
                    className="w-full border-8 border-yellow-700 mx-auto h-full"
                    src={Gene}
                    alt={"Gene Shalit"}
                  />
                </div>

                <div className="flex flex-row justify-evenly text-center text-xs my-3">
                  <a
                    href="https://caroleatierney.github.io/Movie_Review/"
                    class="website-link"
                    title="View Live"
                    target="_blank"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/caroleatierney/Movie_Review/"
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
                      <li>Reviews</li>
                      <li>Stars</li>
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
                      <li>There is a double fetch - need to debug</li>
                      <li>Fix reviews code</li>
                      <li>Add a star component</li>
                      <li>Make responsive</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ******************    Marshfield Travel App     ****************** */}
        <div className="bg-slate-600 border-8 border-slate-900 mt-10 mx-auto">
          <div className="text-slate-300 my-5">
            <h3 className="text-md md:text-4xl text-center text-blue-400">
              Marshfield Travel App
            </h3>
            <p className="m-3 text-center text-xs md:text-lg p-2 md:w-3/4 mx-auto">
              This was the final project. It is an app intended to be used by
              Marshfield, MA vacationers to explore the beaches and all that
              this South Shore Massachusetts vacation town has to offer.
            </p>

            {/* Main Div */}
            <div className="flex flex-col md:flex-row justify-center md:m-5">
              {/* Left side section of larger screen */}
              <div className="justify-center m-1 md:my-5 md:w-1/2 items-center">
                <div className="w-full mx-auto">
                  <img
                    className="w-full border-8 border-blue-400 mx-auto h-full"
                    src={Marshfield}
                    alt={"Marshfield"}
                  />
                </div>

                <div className="flex flex-row justify-evenly text-center text-xs my-3">
                  <a
                    href="https://caroleatierney.github.io/marbeachrec/"
                    class="website-link"
                    title="View Live"
                    target="_blank"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/caroleatierney/marbeachrec"
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
                      <li>
                        This app displays tide information from RapidAPI Tides
                      </li>
                      <li>
                        Website and data are hosted on Heroku (?) - Need to
                        figure this out - can you keep a backend?
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-md md:text-3xl">Technologies used:</h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>HTML</li>
                      <li>Bulma CSS Framework</li>
                      <li>JavaScript</li>
                      <li>PERN Stack</li>
                      <li>Postgres</li>
                      <li>Express</li>
                      <li>React</li>
                      <li>Node.JS</li>
                    </ul>
                    <h3 className="text-md md:text-3xl">
                      Room for improvement:
                    </h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>Figure out backend</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        {/* ******************    Tic-Tac-Toe     ****************** */}
        <div className="bg-slate-600 border-8 border-slate-900 mt-10 mx-auto">
          <div className="text-slate-300 my-5">
            <h3 className="text-md md:text-4xl text-center text-teal-600">
              Dinner Planner
            </h3>
            <p class="project-description">
              This application was designed to practice DOM manipulation, forms
              and tables. It uses Bootstrap and can add and delete rows from the
              table. The data in the table is hard coded to populate.
            </p>

            {/* Main Div */}
            <div className="flex flex-col md:flex-row justify-center md:m-5">
              {/* Left side section of larger screen */}
              <div className="justify-center m-1 md:my-5 md:w-1/2 items-center">
                <div className="w-full mx-auto">
                  <img
                    className="w-full border-8 border-teal-600 mx-auto h-full"
                    src={Planner}
                    alt={"Dinner Planner"}
                  />
                </div>

                <div className="flex flex-row justify-evenly text-center text-xs my-3">
                  <a
                    href="https://caroleatierney.github.io/Dinner_Planner/"
                    class="website-link"
                    title="View Live"
                    target="_blank"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/caroleatierney/Dinner_Planner"
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
                      <li>Bootstrap Table</li>
                      <li>Bootstrap Form</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-md md:text-3xl">Technologies used:</h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>DOM Manipulation</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                    </ul>
                    <h3 className="text-md md:text-3xl">
                      Room for improvement:
                    </h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>Add MockAPI to seed/save table data</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ******************    Soap Recipe App     ****************** */}
        <div className="bg-slate-600 border-8 border-slate-900 mt-10 mx-auto">
          <div className="text-slate-300 my-5">
            <h3 className="text-md md:text-4xl text-center text-green-600">
              Soap Recipe
            </h3>
            <p className="m-3 text-center text-xs md:text-lg p-2 md:w-3/4 mx-auto">
              This applicationt allows users to use a soap recipe application to
              view,create, edit and delete custom recipes.
            </p>

            {/* Main Div */}
            <div className="flex flex-col md:flex-row justify-center md:m-5">
              {/* Left side section of larger screen */}
              <div className="justify-center m-1 md:my-5 md:w-1/2 items-center">
                <div className="w-full mx-auto">
                  <img
                    className="w-full border-8 border-green-600 mx-auto h-full"
                    src={Soap}
                    alt={"Soap"}
                  />
                </div>

                <div className="flex flex-row justify-evenly text-center text-xs my-3">
                  <a
                    href="https://caroleatierney.github.io/Soap_Scents/"
                    class="website-link"
                    title="View Live"
                    target="_blank"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/caroleatierney/Soap_Scents"
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
                      <li>
                        Website and data are hosted on Heroku - Need to figure
                        this out - can you keep a backend?
                      </li>
                      <li>Uses Google Maps</li>
                      <li>Social Icons link to websites</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-md md:text-3xl">Technologies used:</h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                      <li>ExpressJS</li>
                      <li>Node.js</li>
                      <li>Mongoose</li>
                      <li>EJS</li>
                      <li>Mongo DB</li>
                      <li>CSS Grid</li>
                      <li>Full CRUD</li>
                      <li>7 RESTful Routes</li>
                    </ul>
                    <h3 className="text-md md:text-3xl">
                      Room for improvement:
                    </h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>Add a video</li>
                      <li>Lye to Water calculator</li>
                      <li>Add personal Soap Page</li>
                      <li>Ability to Purchase </li>
                      <li>Login</li>
                      <li>It's ugly!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ******************    Tic-Tac-Toe     ****************** */}
        <div className="bg-slate-600 border-8 border-slate-900 mt-10 mx-auto">
          <div className="text-slate-300 my-5">
            <h3 className="text-md md:text-4xl text-center text-white">
              Tic-Tac-Toe
            </h3>
            <p class="project-description">
              This application was to design a Tic-Tac-Toe game and display the
              current player, winner and whether there was a tie. There is an
              option to clear the grid and start over. I tried to add some fun
              images to play our family's betta fishes against eachother.
            </p>

            {/* Main Div */}
            <div className="flex flex-col md:flex-row justify-center md:m-5">
              {/* Left side section of larger screen */}
              <div className="justify-center m-1 md:my-5 md:w-1/2 items-center">
                <div className="w-full mx-auto">
                  <img
                    className="w-full border-8 border-white mx-auto h-full"
                    src={TicTacToe}
                    alt={"Tic-Tac-Toe"}
                  />
                </div>

                <div className="flex flex-row justify-evenly text-center text-xs my-3">
                  <a
                    href="https://caroleatierney.github.io/Tic_Tac_Toe"
                    class="website-link"
                    title="View Live"
                    target="_blank"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/caroleatierney/Tic_Tac_Toe"
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
                      <li>Although clunky, a lot of great DOM manipulation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-md md:text-3xl">Technologies used:</h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>CSS Grid</li>
                      <li>DOM Manipulation</li>
                    </ul>
                    <h3 className="text-md md:text-3xl">
                      Room for improvement:
                    </h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>Grid logic to determine winner - not bad loop</li>
                      <li>fix clunky</li>
                      <li>Put image in square with X or O over it</li>
                      <li>Getting a 404?</li>
                      <li>make responsive</li>
                      <li>Correct fish name - not player 1 or 2</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ******************    South Shore Men's Salon     ****************** */}
        <div className="bg-slate-600 border-8 border-slate-900 mt-10 mx-auto">
          <div className="text-slate-300 my-5">
            <h3 className="text-md md:text-4xl text-center text-amber-200">
              Men's Salon
            </h3>
            <p className="m-3 text-center text-xs md:text-lg p-2 md:w-3/4 mx-auto">
              Before I took my bootcamp, I made a simple website for my
              hairdresser. I was able to make the website following online
              tutorials. I have made modifications to it since graduating
              Bootcamp.
            </p>

            {/* Main Div */}
            <div className="flex flex-col md:flex-row justify-center md:m-5">
              {/* Left side section of larger screen */}
              <div className="justify-center m-1 md:my-5 md:w-1/2 items-center">
                <div className="w-full mx-auto">
                  <img
                    className="w-full border-8 border-amber-200 mx-auto h-full"
                    src={Maggie}
                    alt={"Men's Salon Image"}
                  />
                </div>

                <div className="flex flex-row justify-evenly text-center text-xs my-3">
                  <a
                    href="https://maggies-cuts.onrender.com/index"
                    class="website-link"
                    title="View Live"
                    target="_blank"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/caroleatierney/Maggies_Cuts"
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
                      <li>Google map link</li>
                      <li>Social Icons with Links</li>
                      <li>Link to Appointment Software</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-md md:text-3xl">Technologies used:</h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>PHP</li>
                      <li>Deployed on Render</li>
                    </ul>
                    <h3 className="text-md md:text-3xl">
                      Room for improvement:
                    </h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>Nicer styling</li>
                    </ul>
                    v
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