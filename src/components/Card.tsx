import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`p-4 border rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default Card;

function Card() {
  return (
    <div>
      Card
    </div>
  );
}

export default Card;
