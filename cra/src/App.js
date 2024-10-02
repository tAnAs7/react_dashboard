import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { versionRoutes } from './pages/version/route';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

const Home = lazy(() => import('./pages/Home'));
const Err404 = lazy(() => import('./pages/Err404'));
const Login = lazy(() => import('./pages/Login'));
const Release = lazy(() => import('./pages/Release'));

function App() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/release" element={<Release />} />
          <Route path="/error" element={<Err404 />} />
          <Route path="/login" element={<Login />} />
          {versionRoutes?.map(({ version, routes }) =>
            routes?.map(({ path, element }) => (
              <Route key={`${version}/${path}`} path={`${version}${path}`} element={element} />
            ))
          )}
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </Suspense>
      <Button variant="contained" onClick={() => changeLanguage('en')}>English</Button>
      <Button variant="contained" onClick={() => changeLanguage('vi')}>Tiếng Việt</Button>
    </>
  );
}

export default App;