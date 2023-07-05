import React from 'react';
import { BsSpotify } from 'react-icons/bs';
import { redirectToAuthorize } from '../services/auth';

function Login() {
  return (
    <div className='h-[50vh] flex items-end justify-center'>
      <div className='flex flex-col items-center justify-center w-96 h-min-[500px]'>
        <BsSpotify className='text-6xl text-red-600' />
        <h1 className='text-4xl font-bold py-4'>Spotitube</h1>
        <p className='text-xl pb-16'>A Spotify looks like YouTube</p>
        <button
          onClick={() => redirectToAuthorize()}
          className='bg-red-600 text-xl text-white px-4 py-4 rounded-full'
        >
          Login to Spotitube
        </button>
      </div>
    </div>
  );
}

export default Login;
