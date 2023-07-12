import React, { ReactNode } from 'react';

interface ButtonTransparentProps {
  children: ReactNode;
}

const ButtonTransparent: React.FC<ButtonTransparentProps> = ({ children }) => {
  return (
    <button className='font-bold py-2 px-4 rounded-md border-2 border-primary'>{children}</button>
  );
};

export default ButtonTransparent;
