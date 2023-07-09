import React, { ReactNode } from 'react';

import { HiChevronRight } from "react-icons/hi";

interface BreadcrumbsProps {
  children: ReactNode;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children }) => {
  return (
    <div className='flex text-xl items-center font-bold my-4 justify-center'>
      <h1>Home</h1>
      <HiChevronRight color='#9D72E8' size={32}/>
      <h2>{children}</h2>
    </div>
  );
};

export default Breadcrumbs;
