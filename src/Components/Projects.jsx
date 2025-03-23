import React from 'react';
import TheFunBunch from "./../Assets/TheFunBunch.png";

export default function Projects() {
  return (
    <>
      <div>
        <h3 className="my-5 text-4xl">Project Experience</h3>

        <h3 className="text-2xl">The Fun Bunch</h3>

        <div className="flex justify-center m-10">
          <img
            className="w-full border-12 border-gray-600 mx-auto h-full"
            src={TheFunBunch}
            alt={"Grand Antigua Local's Party"}
          />
        </div>

        <div>
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

        <div>
          <h3>Project Description:</h3>
          <p>
            {" "}
            This is an ongoing project that will hold photos and videos from
            excursions with The Fun Bunch!
          </p>

          <h3>Notable features:</h3>
          <ul>
            <li>
              Full CRUD - Users can add, update and delete photos and comments
            </li>
            <li>Fully Reponsive</li>
          </ul>

          <h3>Technologies used:</h3>
          <ul>
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
    </>
  );
}