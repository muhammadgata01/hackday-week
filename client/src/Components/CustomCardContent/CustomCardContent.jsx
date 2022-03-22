import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from '../../Services/Utils/dateFormat';

const CustomCardContent = ({ content }) => {
  const { id, title, tag, snippet, createdAt, updatedAt } = content;
  return (
    <div className="mt-4 lg:col-span-1">
      <span>
        {tag} &bull; {dateFormat(updatedAt)}
      </span>
      <Link to={`articles/${id}`}>
        <h2 className="my-4">{title}</h2>
      </Link>
      <p className="mb-6 w-10/12 text-typo-400">{snippet}</p>
      <div className="flex items-center gap-4">
        <img
          src={
            'https://ik.imagekit.io/3t4mp2a1w30/people-2_x7LdW9sH0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647621791626'
          }
          className="h-14 w-14"
          alt="Image People"
        />
        <div>
          <h6>Muhammad Gata</h6>
          <span>IP Developer</span>
        </div>
      </div>
    </div>
  );
};

export default CustomCardContent;
