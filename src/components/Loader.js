import React from 'react';

const Loader = () => (
  <div className='flex justify-center items-center h-full'>
    <div className='flex justify-center space-x-2'>
      <div className='w-4 h-16 bg-gray-400 animate-bounce'></div>
      <div className='w-4 h-12 bg-gray-400 animate-bounce'></div>
      <div className='w-4 h-8 bg-gray-400 animate-bounce'></div>
    </div>
  </div>
);

export default Loader;
