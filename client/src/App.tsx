import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardView from './views/BoardView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BoardView />} />
    </Routes>
  );
}

export default App;
