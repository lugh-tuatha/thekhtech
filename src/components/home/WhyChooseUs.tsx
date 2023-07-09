import React from 'react'

import { ChooseUsData } from '@/data/ChooseUsData'

function WhyChooseUs() {
  return (
    <div>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-accent w-auto'>Why Choose Us?</h1>
        <div className='h-4 bg-opacity-50 w-80 bg-primary mx-auto mt-2 relative bottom-6 -z-10'></div>
      </div>
      <p className='text-xl mt-4 text-justify mx-auto'>When you choose Know How Tech as your digital marketing partner, you gain access to a team of experts who are passionate about driving your business success. With our expertise, customized solutions, comprehensive services, results-driven approach, transparent communication, and exceptional customer service, we are well-equipped to help you achieve your digital marketing goals.Here are some reasons why</p>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8 mx-auto mt-12'>
        {ChooseUsData.map((why_us_item) => (
          <div key={why_us_item.id}>
            <div className='text-center'>
              <h2 className='text-xl bg-secondary font-bold p-2 mb-4'>{why_us_item.title}</h2>
              <p className='text-lg'>{why_us_item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs