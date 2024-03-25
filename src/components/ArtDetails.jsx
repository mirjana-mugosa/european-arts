import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArtDetails = () => {
  const { artId } = useParams();
  const [artTitle, setArtTitle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtDetails = async () => {
      try {
        const response = await fetch(`https://www.metmuseum.org/api/collection/collectionlisting/${artId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch art details');
        }
        const data = await response.json();
        setArtTitle(data.results);
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
      <h1>{artTitle.title}</h1>
      {/* Render other details as needed */}
    </div>
  );
};

export default ArtDetails;