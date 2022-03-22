import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Handle api
import axios from 'axios';
import { baseUrl } from '../../Services/Constants';

// Import from Services/Utils folder
import dateFormat from '../../Services/Utils/dateFormat';

const ArticlesDetail = () => {
  const [post, setPost] = useState({});
  const params = useParams();

  useEffect(() => {
    axios.get(`${baseUrl}/posts/${params.id}`).then(response => {
      setPost(response.data);
    });
  }, []);

  return (
    <article className="flex flex-col gap-12 py-10">
      <div className="flex flex-col items-center">
        <span>
          {post.tag} &bull; {dateFormat(post.updatedAt)}
        </span>
        <h2 className="my-4 w-10/12 text-center lg:w-6/12">{post.title}</h2>
        <div className="flex items-center gap-4">
          <img
            src={
              'https://ik.imagekit.io/3t4mp2a1w30/people-2_x7LdW9sH0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647621791626'
            }
            className="h-14 w-14"
            alt="Image Profile"
          />
          <div>
            <h6>Muhammad Gata</h6>
            <span>IP Probation</span>
          </div>
        </div>
      </div>
      <figure className="flex justify-center">
        <img
          src={`/images/${post.image}`}
          className="h-[26rem] w-full lg:w-8/12"
          alt="Image Detail"
        />
      </figure>
      <div className="flex flex-col items-center gap-6">
        <p className="w-10/12 lg:w-8/12">{post.body}</p>
      </div>
    </article>
  );
};

export default ArticlesDetail;
