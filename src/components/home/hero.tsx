import React from 'react'
import './home.css'
import Image from 'next/image'

import CallToAction from '../button/CallToAction'

function Hero() {
  return (
    <div className='lg-flex-between items-center'>
      <div className="w-full lg:w-1/2 mt-4 home">
        <h1 className='text-5xl font-bold leading-snug'>Simply the Best Digital Marketing Agency: TheKHtech Leading the Way</h1>
        <p className='text-lg mt-2 mb-4'>The Know How Tech is a leader in the digital realm, providing businesses with the tools to transition from traditional to digital operations. Our platform offers a comprehensive set of resources to help businesses increase their profitability.</p>
        <CallToAction>GET MY FREE PROPOSAL </CallToAction>
      </div>

      <Image  
        src="/assets/illustration/ai4.png"
        alt='Home hero'
        width={500}
        height={500}
        className='mx-auto lg:mx-0 w-full h-full home-hero'/>
    </div>
  )
}

export default Hero