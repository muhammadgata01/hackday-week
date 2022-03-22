import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import from Pages folder
import Discover from './Pages/Discover';
import ArticlesDetail from './Pages/ArticlesDetail';
import Dashboard from './Pages/Dashboard';
import Create from './Pages/Create';
import Update from './Pages/Update';

// Import from Layout folder
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-600 to-dark-800 text-lg text-white antialiased">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/articles/:id" element={<ArticlesDetail />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<Create />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
