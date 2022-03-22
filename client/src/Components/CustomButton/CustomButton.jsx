import React from 'react';

const CustomButton = ({ children, type, color }) => {
  return (
    <button type={type} className={`${color} rounded-md px-4 py-2`}>
      {children}
    </button>
  );
};

export default CustomButton;
