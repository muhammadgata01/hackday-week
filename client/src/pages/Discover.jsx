import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BaseCardLarge from '../components/base/BaseCardLarge';
import BaseCardSmall from '../components/base/BaseCardSmall';

function Discover() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const baseUrl = 'http://localhost:5000/v1/api';

    axios.get(`${baseUrl}/posts`).then(response => {
      setAllPosts(response.data);
    });
  }, []);

  return (
    <main>
      <div className="py-4">
        {allPosts.slice(0, 1).map(post => {
          return <BaseCardLarge key={post.id} data={post} />;
        })}
      </div>
      <section className="grid gap-x-8 gap-y-16 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {allPosts.slice(1).map(post => {
          return <BaseCardSmall key={post.id} data={post} />;
        })}
      </section>
    </main>
  );
}

export default Discover;
