import React from 'react';


const ArtCard = ({ artImage, artTitle, artId, url, artDate, artArtist }) => {

  const handleClick = () => {
    const id = url.slice(23 , 29)
    // console.log((id));
    window.location.href = `/art-details/${id}`;
  };

  return (
  <div className="shadow-lg cursor-pointer " onClick={handleClick}>
    <img className="w-full h-64 object-cover" src={artImage} alt={artTitle} />
      <div className="px-6 py-4">
        <div className="font-BitterLight font-bold text-lg mb-2">{artTitle}</div>
        <div className="text-gray-700 text-base">{artArtist}</div>
        {/* <div className="text-gray-700 text-base">{artDate}</div> */}
      </div>
  </div>
  );
};

export default ArtCard;