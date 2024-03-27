import React, { useEffect, useState } from 'react';
import ImageAboutUs from './Home/ImageAboutUs';
import { AboutText } from './Home/AboutText';

export const About = () => {
  return (
    <div>
      <ImageAboutUs />
      <AboutText />
    </div>
  )
}
