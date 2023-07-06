import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { getTopTracksLong } from '../services/spotify';
import TracksCard from '../components/TracksCard';
function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  // trackName,
  // artistName,
  // albumName,
  // artistImageURL,
  // trackImageURL,
  useEffect(() => {
    getTopTracksLong()
      .then((res) => {
        setTracks(res.data.items);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className='p-2 flex flex-wrap gap-5'>
            {tracks?.map((track) => (
              <TracksCard key={track.id} track={track} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Home;
