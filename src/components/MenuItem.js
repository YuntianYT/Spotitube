import React from 'react';
import { Link } from 'react-router-dom';

function MenuItem({ children, path }) {
  return (
    <Link
      to={path}
      className='flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 w-full h-20 rounded-lg'
    >
      {children}
    </Link>
  );
}

export default MenuItem;
