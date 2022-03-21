import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../libs/constants';

import BaseCardDashboard from '../components/base/BaseCardDashboard';
import BaseButton from '../components/base/BaseButton';

function Dashboard() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/posts`).then(response => {
      setAllPosts(response.data);
    });
  }, []);

  return (
    <main>
      <section className="py-4">
        <div className="flex-between mb-8">
          <h1>All Articles</h1>
          <Link to="/create">
            <BaseButton color="bg-blue-500">Create Post</BaseButton>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {allPosts.map(post => {
            return <BaseCardDashboard key={post.id} data={post} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
