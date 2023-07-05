import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { getTopTracks } from '../services/spotify';
function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getTopTracks()
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  });
  return <>{isLoading ? <Loader /> : <div>Home</div>}</>;
}

export default Home;
