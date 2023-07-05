import React, { useEffect } from 'react';
import Header from './Header';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { PAGE } from '../env';

function AppLayout() {
  const navigate = useNavigate();
  const access_token = localStorage.getItem('access_token');
  useEffect(() => {
    if (!access_token) {
      navigate(PAGE.LOGIN);
      localStorage.clear();
    }
  });

  return (
    <div className='flex flex-col h-screen w-screen'>
      <Header />
      <div className='flex flex-grow min-w-screen'>
        <Sidebar />
        <div className='flex-grow w-full h-full'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
