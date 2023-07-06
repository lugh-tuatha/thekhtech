import React from 'react'

import Image from 'next/image'

function Mvo() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='w-1/2'>
          <h1 className='text-3xl font-bold'>Company Objectives</h1>
          <p className='text-justify'>The main goal of Know How Tech is to give our clients digital opportunities and help them make a profit. We strive to create comprehensive solutions for businesses that are transitioning from traditional to digital. Our aim is not to make money, but to make a life for your business. Additionally, we offer digital solutions that are cost-effective, dependable, and have a great user experience. We also provide training and education for businesses in the digital world. Our team of experts is highly knowledgeable in the field and has a thorough understanding of what it takes to achieve success.</p>
        </div>
        <Image  
          src="/assets/banner/mvo.png"
          alt='mvo banner'
          width={350}
          height={350}/>
      </div>

      <div className='flex gap-8 my-4'>
        <div className='w-1/2 text-center bg-secondary rounded-xl px-8 py-4'>
          <Image  
            src="/assets/svg/mission.svg"
            alt='mvo banner'
            width={70}
            height={70}
            className='mx-auto mb-4'/>
          <h1 className='text-2xl font-bold'>Mission</h1>
          <p>Our team of experts is working to revolutionize your business, making it a leader in digital solutions and strategies. We are determined to make sure your business is at the forefront of technological advancement.</p>
        </div>

        <div className='w-1/2 text-center bg-secondary rounded-xl px-8 py-4'>
          <Image  
            src="/assets/svg/vision.svg"
            alt='mvo banner'
            width={70}
            height={70}
            className='mx-auto mb-4'/>
          <h1 className='text-2xl font-bold'>Vision</h1>
          <p>The Know How Tech hopes to see all of our clients taking advantage of the digital world and creating content to reach a larger audience. We are dedicated to enhancing your online presence, formulating your digital strategy, and executing digital marketing plans to help you reach your goal.</p>
        </div>

      </div>
    </div>

  )
}

export default Mvo
