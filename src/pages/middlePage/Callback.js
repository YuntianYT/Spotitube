import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import querystring from 'query-string';
import { getAccessToken } from '../../services/auth';
import { PAGE } from '../../env';

function Callback() {
  const location = useLocation();
  const { search } = location;
  const parsedParams = querystring.parse(search);
  const storedState = localStorage.getItem('spotify_auth_state');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const res = await getAccessToken(parsedParams.code);
      if (res.status === 200) {
        navigate(PAGE.HOME);
      } else {
        const errorMessage = res.error;
        console.error(errorMessage);
      }
    };
    if (parsedParams.state === null || parsedParams.state !== storedState) {
      const errorMessage = 'State mismatch';
      navigate(`${PAGE.ERROR}/${encodeURIComponent(errorMessage)}`);
    } else {
      localStorage.removeItem('spotify_auth_state');
      fetchAccessToken();
    }
  }, [navigate, parsedParams.code, parsedParams.state, storedState]);
  return;
}

export default Callback;
