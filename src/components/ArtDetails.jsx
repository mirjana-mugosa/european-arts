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
    <div>
      <h1>{artDetails.department}</h1>
      <h1>Title: {artDetails.title}</h1>
      <h1>Artist: {artDetails.artistDisplayName} ({artDetails.artistDisplayBio})</h1>
      <h1>Date: {artDetails.objectDate}</h1>
      <h1>Dimensions: {artDetails.dimensions}</h1>
      <h1>Credit Line: {artDetails.creditLine}</h1>
      <h1>{artDetails.geographyType}</h1>
      <img src={artDetails.primaryImage} />
    </div>
  );
};

export default ArtDetails;