import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { getUserCardInfo } from '../services/spotify';

function UserCard() {
  const user = useContext(UserContext);
  const [followedArtists, setFollowedArtists] = useState(0);
  const [playlist, setPlaylist] = useState(0);
  const fetchUserCardInfo = async () => {
    const { followedArtists, playlist } = await getUserCardInfo();
    setFollowedArtists(followedArtists?.artists?.items?.length);
    setPlaylist(playlist?.items?.length);
  };
  useEffect(() => {
    fetchUserCardInfo();
  }, []);
  return (
    <div className='flex flex-col items-center w-48'>
      <img
        className='w-20 rounded-full cursor-pointer'
        src={user?.images[0]?.url}
        alt='avatar'
      />
      <div className='my-5 font-semibold'>{user?.display_name}</div>
      <hr className='w-full' />
      <div className='flex justify-between w-full text-gray-500 border-gray-300 my-2 text-sm'>
        <div>Following</div>
        <div>{followedArtists}</div>
      </div>
      <hr className='w-full' />
      <div className='flex justify-between w-full text-gray-500 border-gray-300 my-2 text-sm'>
        <div>Playlist</div>
        <div>{playlist}</div>
      </div>
      <hr className='w-full' />
      <div className='flex justify-between w-full text-gray-500 border-gray-300 my-2 text-sm'>
        <div>Followers</div>
        <div>{user?.followers?.total}</div>
      </div>
      <hr className='w-full' />
    </div>
  );
}

export default UserCard;
