import React from 'react';

const Button = ({ children, type = 'button', color, eventAction = null }) => {
  return (
    <button
      type={type}
      className={`${color} rounded-md px-4 py-2`}
      onClick={() => eventAction()}>
      {children}
    </button>
  );
};

export default Button;
