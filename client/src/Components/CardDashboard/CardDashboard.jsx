import React from 'react';
import { Link } from 'react-router-dom';

// Handle api
import axios from 'axios';
import { baseUrl } from '../../Services/Constants';

// Import from Components folder
import Button from '../Button/Button';

const CardDashboard = ({ data }) => {
  const { id, title } = data;

  const deletePost = () => {
    const result = confirm(`Are you sure delete data ${id}`);
    if (result) {
      axios
        .delete(`${baseUrl}/posts/${id}`)
        .then(() => alert('Delete successful !'));
    }
  };

  return (
    <div className="p-4 bg-dark-500 rounded-lg">
      <h2 className="mb-8">{title}</h2>
      <div className="flex gap-2">
        <Link to={`/update/${id}`}>
          <Button color="bg-orange-500">Edit</Button>
        </Link>
        <Button type="submit" color="bg-rose-500" eventAction={deletePost}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default CardDashboard;
