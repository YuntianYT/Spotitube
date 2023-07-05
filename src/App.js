import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Artists from './pages/Artists';
import './App.css';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Tracks from './pages/Tracks';
import Recent from './pages/Recent';
import Playlists from './pages/Playlists';
import AppLayout from './components/AppLayout';
import Callback from './pages/middlePage/Callback';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/api/callback' element={<Callback />} />
        <Route path='/error/:message' element={<ErrorPage />} />
        <Route path='/' element={<AppLayout />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/artists' element={<Artists />} />
          <Route path='/tracks' element={<Tracks />} />
          <Route path='/recent' element={<Recent />} />
          <Route path='/playlists' element={<Playlists />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
