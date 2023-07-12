'use client'
import React, { useState } from 'react'
import Image from 'next/image';

import { ChooseUsData } from '@/data/ChooseUsData'

function WhyChooseUs() {
  const [collapseStates, setCollapseStates] = useState(Array(ChooseUsData.length).fill(false));

  const toggleCollapse = (index: number) => {
    const updatedCollapseStates = [...collapseStates];
    updatedCollapseStates[index] = !updatedCollapseStates[index];
    setCollapseStates(updatedCollapseStates);
  };
  
  return (
    <div>
      <div className='lg-flex-middle mt-4'>
        <div className='lg:w-1/2'>
          <h1 className='text-4xl font-bold'>Why Choose THEKHTECH For Your Digital Marketing Agency</h1>
          <p className='text-xl mt-4 text-justify mx-auto'>When you choose Know How Tech as your digital marketing partner, you gain access to a team of experts who are passionate about driving your business success. With our expertise, customized solutions, comprehensive services, results-driven approach, transparent communication, and exceptional customer service, we are well-equipped to help you achieve your digital marketing goals.Here are some reasons why</p>
        </div>

        <div className='lg:w-1/2 mt-4 md:mt-0'>
          <Image  
            src="/assets/illustration/ai5.png"
            alt='Home hero'
            width={500}
            height={500}
            className='mx-auto lg:mx-0 lg:ml-auto  w-full h-full home-hero'/>
        </div>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8 mx-auto mt-8'>
        {ChooseUsData.map((why_us_item, index) => (
          <div key={why_us_item.id}>
            <div className='text-center'>
              <h2 className='text-xl bg-secondary font-bold p-2 mb-4'>{why_us_item.title}</h2>
              <p className='text-lg'>{why_us_item.desc} <span className={`transition-all duration-500 ease-in-out ${collapseStates[index] ? '' : 'hidden'}`}>{why_us_item.readmore}</span></p>
            </div>
            <p className='text-lg relative top-0 text-primary hover:underline font-bold text-center cursor-pointer'
              onClick={() => toggleCollapse(index)}>
              {collapseStates[index] ? 'Read Less' : 'Read More'}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs