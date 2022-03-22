import React, { useState, useEffect } from 'react';

// Handle api
import axios from 'axios';
import { baseUrl } from '../../Services/Constants';

// Import from Components folder
import CustomCardLarge from '../../Components/CustomCardLarge/CustomCardLarge';
import CustomCardSmall from '../../Components/CustomCardSmall/CustomCardSmall';

const Discover = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/posts`).then(response => {
      setAllPosts(response.data);
    });
  }, []);

  return (
    <main>
      <div className="py-4">
        {allPosts.slice(0, 1).map(post => {
          return <CustomCardLarge key={post.id} data={post} />;
        })}
      </div>
      <section className="grid gap-x-8 gap-y-16 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {allPosts.slice(1).map(post => {
          return <CustomCardSmall key={post.id} data={post} />;
        })}
      </section>
    </main>
  );
};

export default Discover;
