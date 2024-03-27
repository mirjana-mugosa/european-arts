import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArtDescription } from './ArtDescription';

const ArtDetails = () => {
  const { artId } = useParams();
  const [artDetails, setArtDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtDetails = async () => {
      try {
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch art details');
        }
        const data = await response.json();
        setArtDetails(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtDetails();
  }, [artId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mb-10 mt-10 mx-auto max-w-screen-xl flex flex-wrap">
      <div className=" lg:w-1/2 p-8">
        <a href="/" className="text-sm font-bold text-red-700 cursor-pointer hover:text-red-500">{artDetails.department}</a>
        <h1 className="text-xl font-bold mb-2 mt-4"></h1>
        <p className="mb-4 text-[35px] ">{artDetails.title}</p>
        <h1 className="text-l font-bold mb-2">Artist:</h1>
        <p className="mb-4">{artDetails.artistDisplayName} ({artDetails.artistDisplayBio})</p>
        <h1 className="text-l font-bold mb-2">Date:</h1>
        <p className="mb-4">{artDetails.objectDate}</p>
        <h1 className="text-l font-bold mb-2">Dimensions:</h1>
        <p className="mb-4">{artDetails.dimensions}</p>
        <h1 className="text-l font-bold mb-2">Credit Line:</h1>
        <p className="mb-4">{artDetails.creditLine}</p>
        <h1 className="text-xl font-bold mb-2">{artDetails.geographyType}</h1>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <img src={artDetails.primaryImage} className="w-full h-auto" alt="Artwork" />
    </div>
</div>
  );
};

export default ArtDetails;