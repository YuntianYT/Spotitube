import React from 'react';
import { HiOutlineUser, HiUser } from 'react-icons/hi';
import {
  PiMicrophoneStageDuotone,
  PiMicrophoneStageFill,
} from 'react-icons/pi';
import { IoMusicalNotesOutline, IoMusicalNotesSharp } from 'react-icons/io5';
import { MdOutlineAccessTime, MdOutlineAccessTimeFilled } from 'react-icons/md';
import { PiPlaylistDuotone, PiPlaylistFill } from 'react-icons/pi';
import MenuItem from './MenuItem';
import { useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className='hidden md:flex w-16 h-auto flex-col items-center px-0.5'>
      <MenuItem path='/profile'>
        {pathname === '/profile' ? (
          <HiUser className='text-2xl' />
        ) : (
          <HiOutlineUser className='text-2xl' />
        )}
        <span className='text-[0.7rem]'>Profile</span>
      </MenuItem>
      <MenuItem path='/artists'>
        {pathname === '/artists' ? (
          <PiMicrophoneStageFill className='text-2xl' />
        ) : (
          <PiMicrophoneStageDuotone className='text-2xl' />
        )}
        <span className='text-[0.7rem]'>Artists</span>
      </MenuItem>
      <MenuItem path='/tracks'>
        {pathname === '/tracks' ? (
          <IoMusicalNotesSharp className='text-2xl' />
        ) : (
          <IoMusicalNotesOutline className='text-2xl' />
        )}
        <span className='text-[0.7rem]'>Tracks</span>
      </MenuItem>
      <MenuItem path='/recent'>
        {pathname === '/recent' ? (
          <MdOutlineAccessTimeFilled className='text-2xl' />
        ) : (
          <MdOutlineAccessTime className='text-2xl' />
        )}
        <span className='text-[0.7rem]'>Recent</span>
      </MenuItem>
      <MenuItem path='/playlists'>
        {pathname === '/playlists' ? (
          <PiPlaylistFill className='text-2xl' />
        ) : (
          <PiPlaylistDuotone className='text-2xl' />
        )}
        <span className='text-[0.7rem]'>Playlists</span>
      </MenuItem>
    </div>
  );
}

export default Sidebar;
