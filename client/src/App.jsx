import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Discover from './pages/Discover';
import Create from './pages/Create';

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-600 to-dark-800 text-lg text-white antialiased">
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </main>
  );
}

export default App;
