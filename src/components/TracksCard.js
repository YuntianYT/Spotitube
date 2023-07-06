import React from 'react';
import { formatDuration } from '../utils/timeUtils';
// trackName,
// artistName,
// albumName,
// artistImageURL,
// trackImageURL,
function TracksCard({ track }) {
  return (
    <div className='min-w-[320px] max-w-[360px] mb-10 flex-1'>
      <div className='flex flex-col'>
        <div className='relative flex justify-center bg-gray-400 rounded-2xl cursor-pointer hover:rounded-none transition-all duration-300'>
          <img
            className='h-48 w-48'
            src={track?.album?.images[0]?.url}
            alt='track'
          />
          <div className='absolute bottom-0 right-0 bg-black m-1 text-sm px-0.5 rounded-md text-white '>
            {formatDuration(track?.duration_ms)}
          </div>
        </div>
        <div className='text-[1.1rem] font-semibold'>{track?.name}</div>
        <div className='text-gray-500 flex'>
          <div>{track?.album?.name}</div>
          <div className='px-1'>-</div>
          <div>{track?.artists[0]?.name}</div>
        </div>
        <div className='text-gray-500 flex'>
          <div>{track?.album?.album_type}</div>
          <div className='px-1'>•</div>
          <div>{track?.album?.release_date}</div>
        </div>
        {/* <div className='flex flex-col items-center justify-center'>
          <div className='text-2xl font-bold'>{track?.name}</div>
          <div className='text-xl'>{track?.artists[0]?.name}</div>
          <div className='text-xl'>{track?.album?.name}</div>
        </div> */}
      </div>
    </div>
  );
}

export default TracksCard;
