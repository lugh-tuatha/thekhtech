import React from 'react'

import Button from '../button'
import ButtonTransparent from '../button/ButtonTransparent'

import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";

function CallToAction() {
  return (
    <div className='text-center bg-secondary py-16 rounded-lg'>
      <h1 className='text-4xl'>READY TO <b>GROW YOUR BUSINESS?</b></h1>
      <p className='my-3 text-xl'>Contact us to work with result-driven digital marketing agency</p>
      <div className='flex-middle justify-center gap-4'>
        <Button>
          <div className='flex-middle gap-3'>
            <AiOutlineMessage className='hidden md:block' size={20}/>
            GET FREE PROPOSAL
          </div>
        </Button>
        <span>OR</span>
        <ButtonTransparent>
          <div className='flex-middle gap-3'>
            <FiPhoneCall className='hidden md:block' size={20}/>
            CALL 866.908.4748
          </div>
        </ButtonTransparent>
      </div>
    </div>
  )
}

export default CallToAction