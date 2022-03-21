import React from 'react';
import axios from 'axios';
import BaseButton from './BaseButton';
import BaseButtonWIthEvent from './BaseButtonWIthEvent';
import { Link } from 'react-router-dom';

function BaseCardDashboard({ data }) {
  const { id, title } = data;

  function deletePost() {
    const result = confirm(`Are you sure delete data ${id}`);
    if (result) {
      const baseUrl = 'http://localhost:5000/v1/api';
      axios
        .delete(`${baseUrl}/posts/${id}`)
        .then(() => alert('Delete successful !'));
    }
  }

  return (
    <div className="p-4 bg-dark-500 rounded-lg">
      <h2 className="mb-8">{title}</h2>
      <div className="flex gap-2">
        <Link to={`/update/${id}`}>
          <BaseButton color="bg-orange-500">Edit</BaseButton>
        </Link>
        <BaseButtonWIthEvent eventAction={deletePost} color="bg-rose-500">
          Delete
        </BaseButtonWIthEvent>
      </div>
    </div>
  );
}

export default BaseCardDashboard;
