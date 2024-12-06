import React from 'react';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = ({ variant = 'solid', size = 'md', children, ...props }: ButtonProps) => {
  const baseClasses = 'px-4 py-2 rounded-md font-semibold focus:outline-none';

  const variantClasses = variant === 'solid' 
    ? 'bg-[#305441] text-white hover:bg-[#2A4A3A]' 
    : 'border-[#305441] text-[#305441] hover:bg-[#305441]/10';

  const sizeClasses = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-md';

  return (
    <button {...props} className={`${baseClasses} ${variantClasses} ${sizeClasses}`}>
      {children}
    </button>
  );
};
