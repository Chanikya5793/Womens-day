import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className = '' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
