import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ABOUT, ARTISTS, MIXES, ROOT } from './utils/constants/routes';

import Main from './components/pages/Main';

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROOT} element={<Main />} />
          <Route path={ARTISTS} element={<Main />} />
          <Route path={MIXES} element={<Main />} />
          <Route path={ABOUT} element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
