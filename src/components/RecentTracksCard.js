import React from 'react';
import { formatDuration } from '../utils/timeUtils';

function RecentTracksCard({ item }) {
  return (
    <div className='flex my-4 shadow-2xl rounded-lg pr-2 cursor-pointer'>
      <img
        className=' w-32 h-32'
        src={item?.track?.album?.images[0]?.url}
        alt='Recent track'
      />
      <div className='flex flex-col ml-4 w-full justify-center space-y-5'>
        <div className='flex justify-between'>
          <div className='text-xl font-semibold'>{item?.track?.name}</div>
          <div>{formatDuration(item?.track?.duration_ms)}</div>
        </div>
        <div className='flex justify-between'>
          <div className='text-gray-600'>{item?.track?.artists[0]?.name}</div>
        </div>
      </div>
      {/* <div className='text-2xl font-semibold text-center'>
        {item?.track?.name}
      </div>
      <div className='text-xl text-gray-600 text-center'>
        {item?.track?.artists[0]?.name}
      </div> */}
    </div>
  );
}

export default RecentTracksCard;
