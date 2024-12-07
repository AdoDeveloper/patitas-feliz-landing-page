import React from 'react';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = ({ variant = 'solid', size = 'md', children, ...props }: ButtonProps) => {
  const baseClasses = 'px-4 py-2 rounded-md font-semibold focus:outline-none transition duration-200';

  const variantClasses = variant === 'solid' 
    ? 'bg-[#70A97D] text-white hover:bg-[#609c69]' // Verde más claro
    : 'border-[#70A97D] text-[#70A97D] hover:bg-[#70A97D]/10'; // Verde claro para borde

  const sizeClasses = size === 'sm' 
    ? 'text-sm py-1 px-3'
    : size === 'lg' 
    ? 'text-lg py-3 px-5' 
    : 'text-md py-2 px-4'; // Ajustes de tamaño

  return (
    <button {...props} className={`${baseClasses} ${variantClasses} ${sizeClasses}`}>
      {children}
    </button>
  );
};
