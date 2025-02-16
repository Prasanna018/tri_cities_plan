import React from "react";

import { Routes, Route } from 'react-router-dom'
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from "lucide-react";
import About from "./Pages/About";

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
            <Route path="/about" element={<About></About>}></Route>
          </Routes>

        </div>


      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center flex space-y-6 flex-col items-center justify-center py-4 h-[200px]">
        <div className="w-full flex justify-center object-center 
        ">
          <Instagram
            className="transition-transform duration-300 ease-in-out hover:-translate-y-2 m-2"
            size={40}
          />
          <Twitter
            className="transition-transform duration-300 ease-in-out hover:-translate-y-2 m-2"
            size={40}
          />
          <Facebook
            className="transition-transform duration-300 ease-in-out hover:-translate-y-2 m-2"
            size={40}
          />



        </div>
        <div>
          <p>© 2025 Future Coders. All rights reserved.

            499 Canyon Ave. | Suite 300 | Fort Collins, CO 80521</p>
        </div>
      </footer>
    </div>
  );
}

export default App;