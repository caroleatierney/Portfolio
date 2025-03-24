import React    from "react";
import Header   from "../Components/Header";
import About    from "../Components/About";
import NavBar   from "../Components/NavBar";
import Projects from "../Components/Projects";

export default function App() {
  return (
    <div className="flex flex-col w-full mx-auto bg-gray-200">
      <div className="flex flex-row bg-slate-800">
        <div className="flex w-1/3">
          <Header />
        </div>

        <div className="w-2/3">
          <NavBar />
        </div>
      </div>
      <div className="bg-slate-200">
        <div className="flex justify-center w-5/6 mx-auto">
          <About />
        </div>

        <div className="flex justify-center w-5/6 mx-auto">
          <Projects />
        </div>
      </div>
    </div>
  );
}