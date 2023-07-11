import React from 'react'
import Image from 'next/image'
import Button from '../button'

import { platforms } from '@/data/Platforms'

function Platforms() {
  return (
    <div>
      <div className='my-12 xl:flex gap-8'>
        <div className='xl:w-1/3'>
          <h1 className='text-5xl font-bold'>Platforms</h1>
          <p className="desc my-2">We collaborate with top technology providers worldwide and offer diverse expertise in implementing various solutions. Our platform-agnostic approach ensures we recommend the best solution for success. </p>
          <Button>Explore Platforms</Button>
        </div>

        <div className="xl:w-2/3 mt-4 xl:mt-0 gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {platforms.slice(0, 8).map((platforms_item) => (
          <div key={platforms_item.id} className='flex-middle'>
            <Image
              src={platforms_item.logo}
              alt='Progress icon'
              width={300}
              height={75}/>
          </div>
          ))}
        </div>
      </div>      </div>
  )
}

export default Platforms
