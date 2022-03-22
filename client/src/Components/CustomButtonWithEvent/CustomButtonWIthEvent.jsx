import React from 'react';

const CustomButtonWIthEvent = ({ children, color, eventAction }) => {
  return (
    <button
      className={`${color} rounded-md px-4 py-2`}
      onClick={() => eventAction()}>
      {children}
    </button>
  );
};

export default CustomButtonWIthEvent;
