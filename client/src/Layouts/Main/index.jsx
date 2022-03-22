import React from 'react';

// Import from Layouts folder
import Header from '../Header';
import Footer from '../Footer';

const Main = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-600 to-dark-800 text-lg text-white antialiased">
      <div className="container">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Main;
