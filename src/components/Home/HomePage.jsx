import React, { useState, useEffect } from 'react';
import ArtCard from './ArtCard';

const HomePage = () => {
  const [artWorks, setArtWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const link = "/art-details";

  useEffect(() => {
    const fetchArtWorks = async () => {
      try {
        const response = await fetch('https://www.metmuseum.org/api/collection/collectionlisting?showOnly=withImage&department=11&material=Oak');
        if (!response.ok) {
          throw new Error('Failed to fetch Art Works');
        }
        const data = await response.json();
        setArtWorks(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtWorks();
  }, []);

  const handleCardClick = (artId) => {
    window.location.href = `/art-details/${artId}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {artWorks.map((artWork, index) => (
        <ArtCard
          key={index}
          artTitle={artWork.title}
          // Ensure you pass the correct props according to your ArtCard component
          // For example, you might pass artImage, artistName, etc.
          link={link}
          artId={artWork.id}
          artWorkLink={artWork.api_link}
          onClick={() => handleCardClick(artWork.id)}
        />
      ))}
    </>
  );
};

export default HomePage;


// const countryList = [
//   {url: "", name: "France"},
//   {url: "", name: "Italy"}, 
//   {url: "", name: "Spain"}
// ]

// return (
//   <>
//     {countryList.map((country) =>
//       <CountryCard 
//         countryImage={country.url}
//         countryName={country.name}
//       />
//     )}
//   </>
// )


{/* //   <div>
//     <CountryCard
//       imageUrl="https://picsum.photos/200"
//       title="Card 1"
//     />
//     <CountryCard
//       imageUrl="https://picsum.photos/200"
//       title="Card 2"
//     />
//   </div>
// </div> */}