import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Discover from './pages/Discover';
import Create from './pages/Create';
import TheNavbar from './components/template/TheNavbar';

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-600 to-dark-800 text-lg text-white antialiased">
      <div className="container">
        <TheNavbar />
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
