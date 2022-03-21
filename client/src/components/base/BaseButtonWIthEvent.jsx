import React from 'react';

function BaseButtonWIthEvent({ children, color, eventAction }) {
  return (
    <button
      className={`${color} rounded-md px-4 py-2`}
      onClick={() => eventAction()}>
      {children}
    </button>
  );
}

export default BaseButtonWIthEvent;
