import React from 'react';
import { Link } from 'react-router-dom';

function TheNavbar() {
  return (
    <nav className="py-8">
      <div className="flex-between">
        <div className="flex">
          <div className="flex-center gap-4">
            <div className="flex-center h-10 w-10 rounded-md bg-dark-500">
              E
            </div>
            Epictetus
          </div>
        </div>
        <div className="flex-center gap-8">
          <Link to="/" className="hover:underline">
            Discover
          </Link>
          <Link to="/create" className="hover:underline">
            Create Post
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default TheNavbar;
