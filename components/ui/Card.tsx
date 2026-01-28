import React from 'react';

interface CardProps {
  title: string;
  description: string;
  date: string;
  format: string;
}

const Card: React.FC<CardProps> = ({ title, description, date, format }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base mb-2">{description}</p>
      <div className="text-gray-500 text-sm">
        <p>{date}</p>
        <p>{format}</p>
      </div>
    </div>
  );
};

export default Card;