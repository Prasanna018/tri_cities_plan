import React from "react";

import { Routes, Route } from 'react-router-dom'
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

import About from "./Pages/About";
import Committees from "./Components/Committees";
import Employees from "./Components/Employees";
import ContactUs from "./Components/ContactUs";
import FederalCertification from "./Components/FederalCertification";
import ProgramAndStudies from "./Pages/ProgramAndStudies";
// import ComprehensivePlan from "./Components/ComprehensivePlan";
import CorridorPlans from "./Components/CorridorPlans";
// import SmallAreaPlans from "./Components/SmallAreaPlans";
import ReginalPlans from "./Components/ReginalPlans";
import Reports from "./Components/Reports";
import Plans from "./Pages/Plans";
import MTP from "./Components/plans/MTP";
import MTIP from "./Components/plans/MTIP";
import CMP from "./Components/plans/CMP";
import UPWP from "./Components/plans/UPWP";
import PPP from "./Components/plans/PPP";
import FPM from "./Components/plans/FPM";
import ALOP from "./Components/plans/ALOP";
import Data from "./Pages/Data";
import ReginalTravelModel from "./Components/Data/ReginalTravelModel";
import Roadway from "./Components/Data/Roadway";
import EnvJustice from "./Components/Data/EnvJustice";
import TransportationDash from "./Components/Data/TransportationDash";
import Funding from "./Pages/Funding";
import FFA from "./Components/funding/FFA";
import Smart from "./Components/funding/Smart";
import footer from './assets/footer.jpg'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed navbar */}
      <div className="fixed top-6 left-0 right-0 z-50">
        <div className="md:w-3/4 mx-auto px-4 w-full">
          <NavBar />
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 mt-18 px-4">
        {/* Centered container for main content */}
        <div className=" mx-auto pt-6 text-white">


          <Routes>

            <Route path="/" element={<Home></Home>}></Route>
            {/* about routes */}
            <Route path="/about/" element={<About />}>
              <Route path="committees" element={<Committees />} />
              <Route path="employees" element={<Employees />} />
              <Route path="contact-us" element={<ContactUs></ContactUs>} />




              <Route path="federal-certification" element={<FederalCertification></FederalCertification>}></Route>

            </Route>

            <Route path="/program-studies" element={<ProgramAndStudies></ProgramAndStudies>}>
              {/* <Route path="comprehensive-plans" element={<ComprehensivePlan></ComprehensivePlan>}></Route> */}
              <Route path="corridor-plans" element={<CorridorPlans></CorridorPlans>}></Route>
              {/* <Route path="small-area-plans" element={<SmallAreaPlans></SmallAreaPlans>}></Route> */}
              <Route path="regional-plans" element={<ReginalPlans></ReginalPlans>}></Route>
              <Route path="reports" element={<Reports></Reports>}></Route>



            </Route>

            <Route path="/plan" element={<Plans></Plans>}>
              <Route path="metropolitan-transportation-plans" element={<MTP></MTP>}></Route>
              <Route path="metropolitan-transportation-improvement-programs" element={<MTIP></MTIP>}></Route>
              <Route path="congestion-management-process" element={<CMP></CMP>}></Route>
              <Route path="unified-planning-work-program" element={<UPWP></UPWP>}></Route>
              <Route path="public-participation-plan" element={<PPP></PPP>}></Route>
              <Route path="federal-performance-measures" element={<FPM></FPM>}></Route>
              <Route path="annual-listing-of-obligated-projects" element={<ALOP></ALOP>}></Route>
            </Route>

            <Route path="/data" element={<Data></Data>}>

              <Route path="regional-travel-model" element={<ReginalTravelModel></ReginalTravelModel>}></Route>
              <Route path="VDOT-roadway-functional-classification" element={<Roadway></Roadway>}></Route>
              <Route path="environmental-justice" element={<EnvJustice></EnvJustice>}></Route>
              <Route path="transportation-dashboard" element={<TransportationDash></TransportationDash>}></Route>
            </Route>

            <Route path="/funding" element={<Funding></Funding>}>
              <Route path="federal-funding-authorizations" element={<FFA></FFA>}></Route>
              <Route path="smart-scale" element={<Smart></Smart>}></Route>
            </Route>


          </Routes>

        </div>


      </main>

      {/* Footer */}
      <footer className="bg-[#012756]  text-white text-center flex space-y-6 ;lg:flex-row items-center justify-evenly py-4 h-[250px]">

        <div className="flex flex-col">
          <div className="flex justify-start py-3">

            <span className="text-xl">Crater Planning District Commission</span>
          </div>
          <div className="flex flex-row  ">
            <img src={footer}></img>
            <p className="text-start px-3">1964 Wakefield Street
              <br></br>
              PO Box 1808
              <br></br>
              Petersburg, VA 23805</p>
          </div>
        </div>


        <div className="flex flex-col">
          <div className="flex justify-start py-3">

            <span className="text-xl">Web Policies</span>

          </div>

          <div className="flex flex-col py-1 justify-start items-start">
            <a className="py-1 underline text-sm"

              href="https://craterpdc.org/about-us/website-accessibility/"
              target="_blank"
            >
              Website Accessibility</a>
            <a

              href="https://craterpdc.org/about-us/privacy/"
              target="_blank"
              className="py-1 underline text-sm ">
              Privacy
            </a>

          </div>

        </div>


        <div>
          <div className="flex justify-start">

            <span className="text-xl">Contact CPDC</span>

          </div>

          <div className="w-[200px] pb-10
           ">
            <p className="text-start lg:w-[300px] pt-3">For contact information and directions, visit our
              {" "}
              <a

                href="https://craterpdc.org/about-us/contact-directions/"
                target="_blank"
                className="underline"
              >
                contact page.
              </a>
            </p>

          </div>

        </div>




      </footer>
      <div className="bg-[#011a39] py-4 text-white lg:pl-52">
        <p>© Crater Planning District Commission</p>
      </div>
    </div>
  );
}

export default App;