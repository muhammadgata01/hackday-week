import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BaseCardDashboard from '../components/base/BaseCardDashboard';
import BaseButton from '../components/base/BaseButton';

function Dashboard() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const baseUrl = 'http://localhost:5000/v1/api';

    axios.get(`${baseUrl}/posts`).then(response => {
      setAllPosts(response.data);
    });
  }, []);

  return (
    <main>
      <section className="py-4">
        <div className="flex-between">
          <h1 className="mb-8">All Articles</h1>
          <div className="mb-10">
            <Link to="/create">
              <BaseButton color="bg-blue-500">Create Post</BaseButton>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {allPosts.map(post => {
            return <BaseCardDashboard key={post.id} data={post} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
