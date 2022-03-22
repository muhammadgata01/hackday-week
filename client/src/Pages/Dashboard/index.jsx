import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Handle api
import axios from 'axios';
import { baseUrl } from '../../Services/Constants';

// Import from Components folder
import CardDashboard from '../../Components/CardDashboard/CardDashboard';
import Button from '../../Components/Button/Button';

const Dashboard = () => {
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
            <Button color="bg-blue-500">Create Post</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {allPosts.map(post => {
            return <CardDashboard key={post.id} data={post} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;