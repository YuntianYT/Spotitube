import React from 'react';
import { refreshToken } from '../services/auth';

function Profile() {
  return (
    <>
      <button onClick={() => refreshToken()}>refresh</button>
    </>
  );
}

export default Profile;
