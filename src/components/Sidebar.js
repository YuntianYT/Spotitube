import React from 'react';
import { HiHome, HiOutlineHome } from 'react-icons/hi';
import {
  PiMicrophoneStageDuotone,
  PiMicrophoneStageFill,
} from 'react-icons/pi';
import { IoMusicalNotesOutline, IoMusicalNotesSharp } from 'react-icons/io5';
import { MdOutlineAccessTime, MdOutlineAccessTimeFilled } from 'react-icons/md';
import { PiPlaylistDuotone, PiPlaylistFill } from 'react-icons/pi';
import MenuItem from './MenuItem';
import { useLocation } from 'react-router-dom';
import { PAGE } from '../env';

function Sidebar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className='hidden md:flex min-w-[64px] flex-col items-center px-0.5'>
      <MenuItem path={PAGE.HOME}>
        {pathname === PAGE.HOME ? (
          <HiHome className='text-2xl' />
        ) : (
          <HiOutlineHome className='text-2xl' />
        )}
        <span className='text-[0.7rem]'>Home</span>
      </MenuItem>
      <MenuItem path={PAGE.ARTISTS}>
        {pathname === PAGE.ARTISTS ? (
          <PiMicrophoneStageFill className='text-2xl' />
        ) : (
          <PiMicrophoneStageDuotone className='text-2xl' />
        )}
        <span className='text-[0.7rem]'>Artists</span>
      </MenuItem>
      <MenuItem path={PAGE.TRACKS}>
        {pathname === PAGE.TRACKS ? (
          <IoMusicalNotesSharp className='text-2xl' />
        ) : (
          <IoMusicalNotesOutline className='text-2xl' />
        )}
        <span className='text-[0.7rem]'>Tracks</span>
      </MenuItem>
      <MenuItem path={PAGE.RECENT}>
        {pathname === PAGE.RECENT ? (
          <MdOutlineAccessTimeFilled className='text-2xl' />
        ) : (
          <MdOutlineAccessTime className='text-2xl' />
        )}
        <span className='text-[0.7rem]'>Recent</span>
      </MenuItem>
      <MenuItem path={PAGE.PLAYLISTS}>
        {pathname === PAGE.PLAYLISTS ? (
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
