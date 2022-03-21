import React from 'react';

function BaseButton({ children, type, color }) {
  return (
    <button type={type} className={`${color} rounded-md px-4 py-2`}>
      {children}
    </button>
  );
}

export default BaseButton;
