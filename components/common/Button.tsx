
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-150 ease-in-out inline-flex items-center justify-center";

  const variantStyles = {
    primary: 'bg-primary-DEFAULT text-white hover:bg-primary-dark focus:ring-primary-DEFAULT',
    secondary: 'bg-secondary-DEFAULT text-neutral-darkest hover:bg-secondary-light focus:ring-secondary-DEFAULT', // Changed hover:bg-secondary-dark to hover:bg-secondary-light
    outline: 'border border-primary-DEFAULT text-primary-DEFAULT hover:bg-primary-light focus:ring-primary-DEFAULT',
    ghost: 'text-primary-DEFAULT hover:bg-primary-light focus:ring-primary-DEFAULT',
  };

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
