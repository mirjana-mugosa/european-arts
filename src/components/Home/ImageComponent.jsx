import React from "react";
import { PaintingsButton } from "./PaintingsButton";

const ImageComponent = ({ alt }) => {
  return (
    <div className="relative">
      <img
        src="https://cdn.sanity.io/images/cctd4ker/production/2549f95f432b442ec454dfa6c4d0dcd9aee4b435-5121x1707.jpg?w=1920&q=75&auto=format"
        alt={alt}
      />
      <div className="absolute bottom-10 right-0 mb-6 mr-10">
        <PaintingsButton />
      </div>
    </div>
  );
  };
  
  export default ImageComponent;