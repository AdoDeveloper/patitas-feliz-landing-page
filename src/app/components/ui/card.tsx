import React from 'react';
import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-[#EBE6DA] rounded-lg shadow-lg">
      {children}
    </div>
  );
};

export const CardContent = ({ children }: CardProps) => {
  return <div className="p-6">{children}</div>;
};
