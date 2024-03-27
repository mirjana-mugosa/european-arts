import React, { useState, useEffect } from 'react';
import ArtCard from './ArtCard';

const HomePage = () => {
  const [artWorks, setArtWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtWorks = async () => {
      try {
        const response = await fetch('https://www.metmuseum.org/api/collection/collectionlisting?showOnly=withImage&department=11');
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mb-10 mt-10 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
      {artWorks.map((artWork, index) => (
        <div key={index}>
          <ArtCard
            artTitle={artWork.title}
            artImage={artWork.image}
            url={artWork.url}
            artArtist={artWork.artist}
            // artDate={artWork.date}
          />
      </div>
  ))}
  </div>
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