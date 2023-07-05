import axios from 'axios';
import {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  SPOTIFY_ACCOUNTS_URL,
} from '../env';
import queryString from 'query-string';

const generateRandomString = (length) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
export const redirectToAuthorize = async () => {
  const state = generateRandomString(16);
  localStorage.setItem('spotify_auth_state', state);
  const scope =
    'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public';
  const params = new URLSearchParams();
  params.append('response_type', 'code');
  params.append('client_id', CLIENT_ID);
  params.append('scope', scope);
  params.append('redirect_uri', REDIRECT_URI);
  params.append('state', state);
  const url = `${SPOTIFY_ACCOUNTS_URL}/authorize?${params.toString()}`;

  window.location.href = url;
};

const clientIdAndSecret = `${CLIENT_ID}:${CLIENT_SECRET}`;
const base64Encoded = btoa(clientIdAndSecret);
export const getAccessToken = async (code) => {
  try {
    const response = await axios.post(
      `${SPOTIFY_ACCOUNTS_URL}/api/token`,
      queryString.stringify({
        code: code,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      }),
      {
        headers: {
          Authorization: 'Basic ' + base64Encoded,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('refresh_token', response.data.refresh_token);
    localStorage.setItem('token_timestamp', Date.now());
    return { status: response.status, data: response.data };
  } catch (error) {
    return {
      status: error.response.status,
      error: error.response.data.error_description,
    };
  }
};

export const refreshToken = async () => {
  const refreshToken = localStorage.getItem('refresh_token');
  try {
    const response = await axios.post(
      `${SPOTIFY_ACCOUNTS_URL}/api/token`,
      queryString.stringify({
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      }),
      {
        headers: {
          Authorization: 'Basic ' + base64Encoded,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('token_timestamp', Date.now());
    return { status: response.status, data: response.data };
  } catch (error) {
    return {
      status: error.response.status,
      error: error.response.data.error_description,
    };
  }
};

export const logout = () => {
  localStorage.clear();
  window.location.reload();
};
