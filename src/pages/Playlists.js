import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { getPlaylists } from '../services/spotify';
import PlaylistCard from '../components/PlaylistCard';
function Playlists() {
  const [isLoading, setIsLoading] = useState(true);
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    getPlaylists()
      .then((res) => {
        setPlaylists(res.data.items);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='flex flex-wrap justify-center content-start gap-16 px-20 '>
          {playlists?.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      )}
    </>
  );
}

export default Playlists;
