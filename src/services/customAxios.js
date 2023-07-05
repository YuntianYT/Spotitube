import axios from 'axios';
import { refreshToken } from './auth';

const customAxios = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

customAxios.interceptors.request.use(async (config) => {
  const token_timestamp = localStorage.getItem('token_timestamp');
  const current_timestamp = Date.now();
  const time_difference = current_timestamp - token_timestamp;
  if (time_difference > 3600 * 1000) {
    await refreshToken();
  }
  const access_token = localStorage.getItem('access_token');
  config.headers.Authorization = `Bearer ${access_token}`;
  return config;
});

export default customAxios;
