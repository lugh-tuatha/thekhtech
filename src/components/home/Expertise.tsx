import React from 'react'
import Image from 'next/image'

import { expertise } from '@/data/Expertise'

function Expertise() {
  return (
    <div>
      <h1 className='heading-2'>Our expertise</h1>
      <div className='my-4 gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {expertise.map((expertise_items) => (
          <div key={expertise_items.id} className='flex flex-col'>
            <Image  
              src={expertise_items.icon}
              alt='Expertise icon'
              width={75}
              height={75}/>
            <h2 className='title font-bold text-accent'>{expertise_items.title}</h2>
            <p className='my-2'>{expertise_items.desc}</p>
            <p className='font-bold hover:underline cursor-pointer text-accent hover:text-primary mt-auto'>Learn more &gt;</p>
          </div>
        ))}
      </div>
    </div>  
  )
}

export default Expertise