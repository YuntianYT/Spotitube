import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { getRecentTracks } from '../services/spotify';
import RecentTracksCard from '../components/RecentTracksCard';
import UserCard from '../components/UserCard';
function Recent() {
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    getRecentTracks()
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
        <div className='flex justify-between px-16 md:px-36 lg:px-60'>
          <div className='flex flex-col py-5 flex-grow'>
            <div className='font-semibold text-lg mb-8'>Recently played</div>
            {tracks?.map((track) => (
              <RecentTracksCard key={track.track.id} item={track} />
            ))}
          </div>
          <div className='hidden min-[1400px]:inline mt-10 h-48 p-10'>
            <UserCard />
          </div>
        </div>
      )}
    </>
  );
}
export default Recent;
