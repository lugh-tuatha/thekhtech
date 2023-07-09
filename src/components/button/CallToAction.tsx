import React, { ReactNode } from 'react';

import { TbCircleArrowRight } from "react-icons/tb";

interface CallToActionProps {
  children: ReactNode;
}

const CallToAction: React.FC<CallToActionProps> = ({ children }) => {
  return (
    <button className='font-bold  py-3 px-6 rounded-full bg-primary flex items-center text-lg group'>
      <span className=''>{children}</span>
      <TbCircleArrowRight size={36} className=' group-hover:translate-x-1 duration-300'/>
    </button>
  );
};

export default CallToAction;
