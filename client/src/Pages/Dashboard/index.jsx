import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Import from Components folder
import CardDashboard from '../../Components/CardDashboard/CardDashboard';
import Button from '../../Components/Button/Button';
import { getAllPosts } from '../../store/Actions/PostActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(state => state.Post.posts);

  useEffect(() => {
    dispatch(getAllPosts());
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
