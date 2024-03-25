import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import React from 'react'

export const NotFound = () => {
  return (
   <>
    <div className="flex justify-center items-center">
      <p className="text-4xl text-blue-500">Page not found</p>
      <Link to="/">Go Home</Link>
    </div>
  </> 
 )
}