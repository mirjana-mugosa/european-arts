import React from 'react';
import ImageComponent from './ImageComponent';
import { HomeText } from './HomeText';
import { PaintingsButton } from './PaintingsButton';

const HomePage = () => {
  return (
    <div>
      <ImageComponent alt="European Paintings Image" />
      <div className="text-center">
      <HomeText />
      </div>
    </div>
  );
};

export default HomePage;