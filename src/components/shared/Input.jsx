import React from 'react';

const Input = ({ type, id, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        ${className}
        px-4 py-2 rounded-md border border-gray-300
        focus:outline-none focus:ring-2 focus:ring-blue-500
      `}
    />
  );
};

export default Input;
