import React from 'react';


const ArtCard = ({ artImage, artTitle, artId, onClick }) => {

  const handleClick = () => {
    window.location.href = `/art-details/${artId}`;
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" onClick={handleClick}>
      <img className="w-full h-48 object-cover" src={artImage} alt={artTitle} />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2">{artTitle}</div>
      </div>
    </div>
  );
};

export default ArtCard;