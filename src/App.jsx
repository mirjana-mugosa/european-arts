import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react";
import { StaticComponent } from "./components/StaticComponent";
import { PropComponent } from "./components/PropComponent";
import { ArtTitle } from "./components/ArtTitle";
import { ArtDescription } from "./components/ArtDescription"
import { ArtImage } from "./components/ArtImage";
import { ListOfArt } from "./components/ListOfArt";
import { NotFound } from "./components/NotFound";
import HomePage from "./components/Home/HomePage"
import ArtDetails from "./components/ArtDetails";
import technigo from "./assets/technigo-logo.svg";

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="flex justify-between items-center bg-amber-600 py-6 px-20">
        <nav>
          <ul className="flex items-center text-lg space-x-12">
            <li className="text-white hover:text-gray-300"> 
              <Link to="/">Home Page</Link>
            </li>
            <li className="text-white hover:text-gray-300">
              <Link to="/list-of-arts">List of Arts</Link>
            </li>
            <li className="text-white hover:text-gray-300">
              <Link to="/art-details">Art Details</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list-of-arts" element={<ListOfArt />} />   
        <Route path="/art-details/:artId" element={<ArtDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};
