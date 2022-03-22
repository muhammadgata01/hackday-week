import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Handle api
import axios from 'axios';
import { baseUrl } from '../../Services/Constants';

// Import from Components folder
import CustomCardDashboard from '../../Components/CustomCardDashboard/CustomCardDashboard';
import CustomButton from '../../Components/CustomButton/CustomButton';

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
            <CustomButton color="bg-blue-500">Create Post</CustomButton>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {allPosts.map(post => {
            return <CustomCardDashboard key={post.id} data={post} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
