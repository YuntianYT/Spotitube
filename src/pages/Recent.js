import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { getRecentTracks } from '../services/spotify';
import RecentTracksCard from '../components/RecentTracksCard';
function Recent() {
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    getRecentTracks()
      .then((res) => {
        console.log(res.data.items);
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
        <div className='flex flex-col items-center justify-center flex-grow'>
          {tracks?.map((track) => (
            <RecentTracksCard key={track.id} item={track} />
          ))}
        </div>
      )}
    </>
  );
}
export default Recent;
