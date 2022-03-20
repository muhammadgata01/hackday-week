import React from 'react';
import axios from 'axios';

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
        <button className="bg-orange-500 rounded-md px-4 py-2">Edit</button>
        <button
          onClick={deletePost}
          className="bg-rose-500 rounded-md px-4 py-2">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BaseCardDashboard;
