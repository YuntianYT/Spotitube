// import axios from 'axios';
import customAxios from './customAxios';

export const getUser = () => {
  return customAxios.get('/me');
};

export const getPlaylists = () => {
  return customAxios.get('/me/playlists');
};

export const getFollowing = () => {
  return customAxios.get('/me/following?type=artist');
};

export const getTopTracksLong = () => {
  return customAxios.get('/me/top/tracks?time_range=long_term');
};

export const getTopArtistsLong = () => {
  return customAxios.get('/me/top/artists?time_range=long_term');
};

export const getUserCardInfo = async () => {
  try {
    const results = await Promise.all([getFollowing(), getPlaylists()]);
    const followedArtists = results[0].data;
    const playlist = results[1].data;
    return { followedArtists, playlist };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
// export const getUserInfo = () => {
//   axios
//     .all([
//       getUser(),
//       getFollowing(),
//       getPlaylists(),
//       getTopArtistsLong(),
//       getTopTracksLong(),
//     ])
//     .then(
//       axios.spread(
//         (user, followedArtists, playlists, topArtists, topTracks) => ({
//           user: user.data,
//           followedArtists: followedArtists.data,
//           playlists: playlists.data,
//           topArtists: topArtists.data,
//           topTracks: topTracks.data,
//         })
//       )
//     )
//     .catch((error) => {
//       console.error(error);
//     });
// };

export const getPlaylistTracks = (playlistId) => {
  return customAxios.get(`/playlists/${playlistId}/tracks`);
};

export const getRecentTracks = () => {
  return customAxios.get('/me/player/recently-played');
};

export const getTopTracks = () => {
  return customAxios.get('/me/top/tracks');
};

export const getTopArtists = () => {
  return customAxios.get('/me/top/artists');
};

export const getArtist = (artistId) => {
  return customAxios.get(`/artists/${artistId}`);
};

export const getArtistTopTracks = (artistId) => {
  return customAxios.get(`/artists/${artistId}/top-tracks?market=US`);
};

export const getArtistAlbums = (artistId) => {
  return customAxios.get(`/artists/${artistId}/albums`);
};

export const getAlbum = (albumId) => {
  return customAxios.get(`/albums/${albumId}`);
};

export const getAlbumTracks = (albumId) => {
  return customAxios.get(`/albums/${albumId}/tracks`);
};

export const getTrack = (trackId) => {
  return customAxios.get(`/tracks/${trackId}`);
};

export const getTrackAudioFeatures = (trackId) => {
  return customAxios.get(`/audio-features/${trackId}`);
};

export const getTrackAudioAnalysis = (trackId) => {
  return customAxios.get(`/audio-analysis/${trackId}`);
};

export const getTrackRecommendations = (trackId) => {
  return customAxios.get(`/recommendations?seed_tracks=${trackId}`);
};

export const getArtistRecommendations = (artistId) => {
  return customAxios.get(`/recommendations?seed_artists=${artistId}`);
};

export const getGenreRecommendations = (genre) => {
  return customAxios.get(`/recommendations?seed_genres=${genre}`);
};

export const getMultipleTracks = (trackIds) => {
  return customAxios.get(`/tracks/?ids=${trackIds}`);
};
