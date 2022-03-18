import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Discover from './pages/Discover';
import Create from './pages/Create';
import TheNavbar from './components/template/TheNavbar';
import TheFooter from './components/template/TheFooter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-600 to-dark-800 text-lg text-white antialiased">
      <div className="container">
        <TheNavbar />
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/create" element={<Create />}></Route>
        </Routes>
        <TheFooter />
      </div>
    </div>
  );
}

export default App;
