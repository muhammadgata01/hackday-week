import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const Modal = ({ setOpenModal, message }) => {
  const navigate = useNavigate();

  const handleButton = () => {
    setOpenModal(false);
    navigate('/dashboard');
  };

  return (
    <div className="fixed bg-white/20 top-0 left-0 h-screen w-screen flex-center">
      <div className="text-center bg-dark-800 p-8 rounded-xl">
        <h2 className="mb-4">{message}</h2>
        <Button color="bg-neutral-500" eventAction={handleButton}>
          Back to dashboard
        </Button>
      </div>
    </div>
  );
};

export default Modal;
