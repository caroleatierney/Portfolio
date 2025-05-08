import React    from "react";
import Header   from "../Components/Header";
import About    from "../Components/About";
import NavBar   from "../Components/NavBar";
import Projects from "../Components/Projects";
import BootCamp from "../Components/BootCamp";
import Footer   from "../Components/Footer";

export default function App() {
  return (
    <div className="flex flex-col w-7/8 mx-auto bg-gray-200 font-poppins">
      <div className="flex flex-col md:flex-row justify-center bg-slate-800 pb-2">
        <div className="flex justify-center w-full md:w-1/3">
          <Header />
        </div>

        <div className="flex w-full md:w-2/3">
          <NavBar />
        </div>
      </div>

      <div className="bg-slate-200 flex flex-col justify-center w-full mx-auto pt-2">
        <div className="">
          <About />
        </div>

        <div>
          <Projects />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}