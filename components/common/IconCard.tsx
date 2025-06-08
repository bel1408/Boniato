
import React from 'react';

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="mb-4 p-3 bg-primary-light rounded-full inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-neutral-darkest mb-2">{title}</h3>
      <p className="text-neutral-dark leading-relaxed">{description}</p>
    </div>
  );
};

export default IconCard;
    