import React from 'react';

const Input = ({ valueLabel, valueInput, onInputChange }) => {
  return (
    <div className="grid gap-2 mb-4">
      <label htmlFor={valueLabel}>{valueLabel}</label>
      <input
        type="text"
        id={valueLabel}
        className="input-style"
        placeholder={`Insert ${valueLabel}`}
        value={valueInput}
        onChange={onInputChange}
      />
    </div>
  );
};

export default Input;
