import React from 'react';

function BaseButton({ children, color }) {
  return (
    <button className={`${color} rounded-md px-4 py-2`}>{children}</button>
  );
}

export default BaseButton;
