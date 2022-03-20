import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Discover from './pages/Discover';
import Create from './pages/Create';
import TheNavbar from './components/template/TheNavbar';
import TheFooter from './components/template/TheFooter';
import ArticlesDetail from './pages/ArticlesDetail';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-600 to-dark-800 text-lg text-white antialiased">
      <div className="container">
        <TheNavbar />
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/articles/:id" element={<ArticlesDetail />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<Create />}></Route>
        </Routes>
        <TheFooter />
      </div>
    </div>
  );
}

export default App;
