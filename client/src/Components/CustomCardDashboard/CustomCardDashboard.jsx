import React from 'react';
import axios from 'axios';
import CustomButton from '../CustomButton/CustomButton';
import CustomButtonWIthEvent from '../CustomButtonWithEvent/CustomButtonWIthEvent';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../Services/Constants';

const CustomCardDashboard = ({ data }) => {
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
          <CustomButton color="bg-orange-500">Edit</CustomButton>
        </Link>
        <CustomButtonWIthEvent eventAction={deletePost} color="bg-rose-500">
          Delete
        </CustomButtonWIthEvent>
      </div>
    </div>
  );
};

export default CustomCardDashboard;
