import React from 'react';
import { formatDuration } from '../utils/timeUtils';

function TopTrackCard({ item }) {
  return (
    <div className='flex my-4 shadow-2xl rounded-lg pr-2 cursor-pointer'>
      <img
        className=' w-32 h-32'
        src={item?.album?.images[0]?.url}
        alt='Top track'
      />
      <div className='flex flex-col ml-4 w-full justify-center space-y-5'>
        <div className='flex justify-between'>
          <div className='text-xl font-semibold'>{item?.name}</div>
          <div>{formatDuration(item?.duration_ms)}</div>
        </div>
        <div className='flex justify-between'>
          <div className='text-gray-600'>{item?.artists[0]?.name}</div>
        </div>
      </div>
    </div>
  );
}

export default TopTrackCard;
