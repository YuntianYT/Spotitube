import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import ArtistCard from '../components/ArtistCard';
import { getTopArtists } from '../services/spotify';
import UserCard from '../components/UserCard';

function Artists() {
  const [isLoading, setIsLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    getTopArtists()
      .then((res) => {
        console.log(res.data.items);
        setArtists(res.data.items);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='flex justify-between px-16 md:px-36 lg:px-96'>
          <div className='flex flex-col items-center'>
            {artists?.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
          <div className='hidden min-[1800px]:inline mt-10 h-48 p-10'>
            <UserCard />
          </div>
        </div>
      )}
    </>
  );
}

export default Artists;
