import React, { useContext } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsSpotify } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';
import { UserContext } from '../context/UserContext';

function Header() {
  const user = useContext(UserContext);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className='h-[7vh] flex items-center justify-between p-3'>
      <div className='flex items-center'>
        <AiOutlineMenu className='text-2xl ml-2 mr-4' />
        <Link className='flex items-center z-10' to='/'>
          <BsSpotify className='text-4xl text-red-600 pr-1' />
          <h2 className='text-2xl text-black-600 font-bold tracking-tighter'>
            Spotitube
          </h2>
        </Link>
      </div>
      <img
        className='h-10 w-10 mr-6 rounded-full cursor-pointer'
        src={user?.images[0]?.url}
        alt='avatar'
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className='absolute z-10 w-80 top-16 right-4 bg-slate-100 shadow-inner rounded-2xl '>
          <div className='flex flex-col p-2'>
            <div className='flex items-center space-x-3'>
              <img
                className='h-10 w-10 rounded-full'
                src={user?.images[0]?.url}
                alt='avatar'
              />
              <div className='flex flex-col text-black-600 font-semibold'>
                <div>{user?.display_name}</div>
                <div className='text-gray-500 text-sm'>{user?.email}</div>
              </div>
            </div>
            <hr className='my-2' />
            <button
              onClick={() => logout()}
              className='bg-red-600 text-white px-4 py-2 rounded-full ml-2'
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
