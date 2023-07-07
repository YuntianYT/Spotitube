import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { PAGE } from '../env';
import { getUser } from '../services/spotify';
import { UserContext } from '../context/UserContext';

function AppLayout() {
  const navigate = useNavigate();
  const access_token = localStorage.getItem('access_token');
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!access_token) {
      navigate(PAGE.LOGIN);
      localStorage.clear();
    }

    getUser()
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, [access_token, navigate]);

  return (
    <div className='flex flex-col h-screen'>
      <UserContext.Provider value={user}>
        <Header />
        <div className='flex'>
          <Sidebar />
          <div className='flex-grow overflow-auto scrollbar-thin scrollbar-rounded-full scrollbar-thumb-rounded scrollbar-thumb-gray-700 '>
            <div className='h-[93vh]'>
              <Outlet />
            </div>
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default AppLayout;
