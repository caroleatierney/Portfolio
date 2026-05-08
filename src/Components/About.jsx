import React from "react";
import HeadShot from "./../Assets/HeadShot.jpeg";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center w-7/8 mx-auto text-center">
      <div className="md:w-2/3 text-gray-900 p-10">
        <h3 className="text-xs md:text-lg lg:text-2xl">About</h3>

        <p className="font-extralight text-xs sm:text-sm md:text-lg max-w-screen-4xl pt-10 leading-relaxed mx-auto">
          I am an aspiring web developer working on mostly personal projects. I
          am no longer seeking a Front End Web Developer position, as I am back
          on the AS400 - Green Screen and all! I have experience in full stack
          web development using technologies such as HTML, CSS, JavaScript,
          NodeJS, PHP, Bootstrap, React Bootstrap, Tailwind, Flowbite-React,
          Bulma, Git, Heroku, MongoDB, PostgreSQL, and jQuery.
        </p>

        <p className="font-extralight text-xs sm:text-sm md:text-lg max-w-screen-9xl pt-36 leading-relaxed mx-auto">
          In my spare time, I enjoy painting murals, making cold process soap,
          and hanging out with my mini Aussie, Nina. Please take a look at some
          of my websites! This Website uses React, Flowbite React, Tailwind, and
          Vite. It is hosted on GitHub Pages.
        </p>
      </div>

      <div className="w-full md:w-1/3 pt-6 md:pt-10 px-5">
        <img
          className="w-full h-auto border-4 border-gray-400 mx-auto rounded-lg"
          src={HeadShot}
          alt="HeadShot of Carole Tierney"
        />
      </div>
    </div>
  );
}
