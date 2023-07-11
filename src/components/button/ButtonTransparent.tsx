import React, { ReactNode } from 'react';

interface ButtonTransparentProps {
  children: ReactNode;
}

const ButtonTransparent: React.FC<ButtonTransparentProps> = ({ children }) => {
  return (
    <button className='font-bold  py-3 px-6 rounded-full bg-primary text-lg'>{children}</button>
  );
};

export default ButtonTransparent;
