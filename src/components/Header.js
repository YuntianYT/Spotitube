import React, { useContext } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsSpotify } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';
import { UserContext } from '../context/UserContext';

function Header() {
  const user = useContext(UserContext);
  return (
    <div className='flex items-center justify-between p-3'>
      <div className='flex items-center'>
        <AiOutlineMenu className='text-2xl mx-4' />
        <Link className='flex items-center z-10' to='/'>
          <BsSpotify className='text-4xl text-red-600 pr-1' />
          <h2 className='text-2xl text-black-600 font-bold tracking-tighter'>
            Spotitube
          </h2>
        </Link>
      </div>
      <div className='hidden md:inline flex-grow text-center -ml-40 font-bold text-2xl'>
        A <span className='text-[#1ed75f]'>Spotify</span> looks like{' '}
        <span className='text-red-600'>YouTube</span>
      </div>
      <div className='flex items-center justify-center space-x-2'>
        <div>{user?.display_name}</div>
        <img
          className='h-10 w-10 rounded-full'
          src={user?.images[0]?.url}
          alt='avatar'
        />
      </div>
      <button
        onClick={() => logout()}
        className='bg-red-600 text-white px-4 py-2 rounded-full ml-2'
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
