import React from 'react'

import Image from 'next/image'

function AboutHero() {
  return (
    <div className='lg-flex-between gap-10'>
      <div className='lg:w-3/5'>
        <h1 className='text-5xl font-bold'>About Us</h1>
        <p className='text-lg text-justify'>As companies continue to adapt to the changing landscape of marketing, the demand for full-service marketing agencies has grown. These agencies provide a comprehensive range of services to help businesses transition from traditional marketing methods to more modern and innovative approaches. </p>
        <p className='text-lg text-justify'>At Know How Tech, we specialize in digital solutions that can assist you in transforming your outdated business strategies into successful ones. With our team of experts, we can help you develop and achieve your business goals in a matter of weeks. Don't let the idea of modernizing your business be a fantasy - it's a reality that we can help you make happen.</p>
      </div>

      
      <div className='lg:w-2/5'>
        <Image  
          src="/assets/illustration/ai6.jpeg"
          alt='About hero'
          width={500}
          height={500}
          className=''/>
      </div>
    </div>
  )
}

export default AboutHero
