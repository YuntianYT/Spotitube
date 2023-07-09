import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import {
  getTopTracksLong,
  getTopTracksMedium,
  getTopTracksShort,
} from '../services/spotify';
import UserCard from '../components/UserCard';
import TopTrackCard from '../components/TopTrackCard';

function Tracks() {
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [timeRange, setTimeRange] = useState('long');
  const apiCalls = {
    long: getTopTracksLong(),
    medium: getTopTracksMedium(),
    short: getTopTracksShort(),
  };

  const setRangeData = (range) => {
    setIsLoading(true);
    const apiCall = apiCalls[range];
    apiCall
      .then((res) => {
        setTracks(res.data.items);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
    setTimeRange(range);
  };

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
        <div className='flex justify-between px-16 md:px-36 lg:px-60'>
          <div className='flex flex-col py-5 flex-grow'>
            <div className='flex justify-between mb-8'>
              <div className='font-semibold text-lg'>Top Tracks</div>
              <div className='flex space-x-2 text-gray-500'>
                <button
                  className={`${
                    timeRange === 'long' ? 'font-bold underline' : ''
                  }`}
                  onClick={() => setRangeData('long')}
                >
                  All time
                </button>
                <button
                  className={`${
                    timeRange === 'medium' ? 'font-bold underline' : ''
                  }`}
                  onClick={() => setRangeData('medium')}
                >
                  Last 6 Months
                </button>
                <button
                  className={`${
                    timeRange === 'short' ? 'font-bold underline' : ''
                  }`}
                  onClick={() => setRangeData('short')}
                >
                  Last 4 Weeks
                </button>
              </div>
            </div>
            {tracks?.map((track) => (
              <TopTrackCard key={track.id} item={track} />
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

export default Tracks;
