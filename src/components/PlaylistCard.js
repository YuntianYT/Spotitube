import React from 'react';

function PlaylistCard({ playlist }) {
  return (
    <div className='flex flex-col cursor-pointer items-center justify-start'>
      <img className='shadow-2xl' src={playlist?.images[0]?.url} alt='track' />
      <div className='text-2xl font-semibold text-center'>{playlist?.name}</div>
      <div className='text-xl text-gray-600 text-center'>
        {playlist?.tracks?.total} tracks
      </div>
    </div>
  );
}

export default PlaylistCard;
