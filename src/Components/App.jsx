import React from "react";
import Header from "../Components/Header";
import About  from "../Components/About";
import NavBar from "../Components/NavBar";

export default function App() {
  return (
    <div className="flex flex-col w-full mx-auto">
      <div className="flex flex-row bg-gray-900">
        <div className="flex w-1/3">
          <Header />
        </div>

        <div className="w-2/3">
          <NavBar />
        </div>
      </div>

      <div className="flex justify-center w-5/6 mx-auto">
        <About />
      </div>
    </div>
  );
}