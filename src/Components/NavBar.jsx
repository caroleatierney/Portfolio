import React from "react";

export default function NavBar() {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-evenly h-full text-gray-300">
      <a title="Contact Me"
        href="https://www.linkedin.com"
        target="_blank">
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        title="View GitHub"
        href="https://www.github.com/caroleatierney"
        target="_blank"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        title="View Resume"
        href="/dist/Assets/Resume_2024.pdf"
        target="_blank"
      >
        Resume
      </a>
      <a
        title="Promineo Tech Certificate"
        href="/dist/Assets/Promineo_Tech.pdf"
        target="_blank"
      >
        Promineo Tech Certificate
      </a>
      <a
        title="General Assembly Certificate"
        href="/dist/Assets/General_Assembly.pdf"
        target="_blank"
      >
        General Assembly Certificate
      </a>
    </div>
  );
}
