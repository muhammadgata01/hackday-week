import { useState } from 'react';
import { Link } from 'react-router-dom';

// Api
import axios from 'axios';
import { baseUrl } from '../../Services/Constants';

// Components
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const CardDashboard = ({ data }) => {
  const { id, title } = data;
  const [modalOpen, setModalOpen] = useState(false);

  const deletePost = () => {
    const result = confirm(`Are you sure delete data ${id}`);
    if (result) {
      axios.delete(`${baseUrl}/posts/${id}`).then(() => {
        setModalOpen(true);
      });
    }
  };

  return (
    <div className="p-4 bg-dark-500 rounded-lg">
      {modalOpen && (
        <Modal
          setOpenModal={setModalOpen}
          message="Successfuly delete post !"
        />
      )}
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
