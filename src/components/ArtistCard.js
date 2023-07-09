import React from 'react';

function ArtistCard({ artist }) {
  return (
    <div className='flex py-2 w-full'>
      <img
        className='w-[136px] h-[136px] rounded-full cursor-pointer mx-8'
        src={artist?.images[2]?.url}
        alt='avatar'
      />
      <div className='flex flex-col ml-32 space-y-2'>
        <div className='text-2xl'>{artist?.name}</div>
        <div className='text-sm text-gray-500'>
          Popularity {artist?.popularity}%
        </div>
        <div className='text-sm text-gray-500 uppercase'>
          Genres: {artist?.genres.toString()}
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
