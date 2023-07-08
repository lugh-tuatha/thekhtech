import React from 'react'

import Image from 'next/image'

function Mvo() {
  return (
    <div>
      <div className='md:flex gap-8 my-8'>
        <div className='md:w-1/2 text-center bg-secondary rounded-xl px-8 py-4'>
          <Image  
            src="/assets/svg/mission.svg"
            alt='mvo banner'
            width={70}
            height={70}
            className='mx-auto mb-4'/>
          <h2 className='text-2xl font-bold'>Mission</h2>
          <p>At our digital marketing agency, our team of experts is dedicated to transforming your business into a digital powerhouse. We strive to provide innovative solutions and strategies that will position your business as a leader in the digital landscape. With our commitment to staying ahead of the latest technological advancements, we ensure that your business remains at the forefront of the industry.</p>
        </div>

        <div className='md:w-1/2 mt-4 md:mt-0 text-center bg-secondary rounded-xl px-8 py-4'>
          <Image  
            src="/assets/svg/vision.svg"
            alt='mvo banner'
            width={70}
            height={70}
            className='mx-auto mb-4'/>
          <h2 className='text-2xl font-bold'>Vision</h2>
          <p>At THEKHTECH, we strive to empower our clients to leverage the digital world and connect with a wider audience through compelling content. Our team of experts is committed to optimizing your online presence, developing effective digital strategies, and implementing targeted digital marketing campaigns to help you achieve your objectives.</p>
        </div>
      </div>

      <div className='lg:flex justify-between items-center'>
        <div className='lg:w-1/2'>
          <h2 className='text-4xl font-bold'>Company Objectives</h2>
          <p className='text-justify text-lg mt-2'>Our primary objective is to empower our clients with digital marketing services that drive profitability. We specialize in providing comprehensive solutions for businesses making the transition from traditional to digital platforms. Our focus is not solely on financial gain, but on nurturing the growth and success of your business. We offer cost-effective and reliable digital solutions that prioritize user experience. Additionally, we provide training and education to equip businesses with the necessary skills and knowledge to thrive in the digital landscape. With a team of highly knowledgeable experts, we have a deep understanding of what it takes to achieve success in the digital marketing realm.</p>
        </div>
        <Image  
          src="/assets/banner/mvo.png"
          alt='mvo banner'
          width={350}
          height={350}
          className='objective-hero mx-auto lg:mx-0 mt-4 lg:mt-0'/>
      </div>
    </div>

  )
}

export default Mvo
