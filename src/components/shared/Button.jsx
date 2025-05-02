import React from 'react';

const Button = ({ children, type, className, disabled, onClick }) => {
  return (
    <button
      type={type}
      className={`
        ${className}
        px-4 py-2 rounded-md font-semibold
        transition-colors duration-200
        ${disabled
          ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
