import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Artists from './pages/Artists';
import './App.css';
import Login from './pages/Login';
import Tracks from './pages/Tracks';
import Recent from './pages/Recent';
import Playlists from './pages/Playlists';
import AppLayout from './components/AppLayout';
import Callback from './pages/middlePage/Callback';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import { PAGE } from './env';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path={PAGE.LOGIN} element={<Login />} />
        <Route path={PAGE.CALLBACK} element={<Callback />} />
        <Route path={`${PAGE.ERROR}/:message`} element={<ErrorPage />} />
        <Route path='/' element={<AppLayout />}>
          <Route path={PAGE.HOME} element={<Home />} />
          <Route path={PAGE.ARTISTS} element={<Artists />} />
          <Route path={PAGE.TRACKS} element={<Tracks />} />
          <Route path={PAGE.RECENT} element={<Recent />} />
          <Route path={PAGE.PLAYLISTS} element={<Playlists />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
