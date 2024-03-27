import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react";
import { StaticComponent } from "./components/StaticComponent";
import { PropComponent } from "./components/PropComponent";
import { ArtTitle } from "./components/ArtTitle";
import { ArtDescription } from "./components/ArtDescription"
import { About } from "./components/About";
import { NotFound } from "./components/NotFound";
import ArtDetails from "./components/ArtDetails";
import technigo from "./assets/technigo-logo.svg";
import Paintings from "./components/Home/Paintings";
import HomePage from "./components/Home/HomePage";

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="flex flex-col sm:flex-row justify-between items-center bg-red-700 py-4 px-4 sm:px-20">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Museum_icon_%28white%29.svg/1024px-Museum_icon_%28white%29.svg.png?20190324153322" alt="Logo" className="h-12 w-auto" />
        <nav>
          <ul className="flex items-center text-lg space-x-12">
            <li className="text-white hover:text-gray-300"> 
              <Link to="/">Home Page</Link>
            </li>
            <li className="text-white hover:text-gray-300"> 
              <Link to="/paintings">Paintings</Link>
            </li>
            <li className="text-white hover:text-gray-300">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/paintings" element={<Paintings />} />     
        <Route path="/art-details/:artId" element={<ArtDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};
