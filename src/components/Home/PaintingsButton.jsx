import React from 'react'
import { Link } from 'react-router-dom'

export const PaintingsButton = () => {
  return (
    <Link to="/paintings">
      <button className="bg-white hover:bg-red-700 hover:text-white text-black font-bold py-3 px-4 rounded">
        Discover Collection
      </button>
    </Link>
  )
}
