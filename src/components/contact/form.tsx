import React from 'react'
import './contact.css'

import { contacts } from '@/data/Contacts'

function ContactForm() {
  return (
    <form className=' text-center mx-auto mt-4' noValidate>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {contacts.map((contact_item, index) => (
          <div key={contact_item.id} className={`relative inputBox
                ${contact_item.required === true ? 'isRequired' : ''}
              `}>
            <input type={contact_item.type} className='forms-input w-full rounded-sm' required/>
            <span className='absolute left-0 py-3 text-lg pl-4 pointer-events-none duration-500'>{contact_item.placeholder}</span>
          </div>
        ))}
      </div>
      <div className='relative inputBox mt-5'>
        <textarea className='form-textarea' required/>
        <span className='absolute left-0 py-3 text-lg pl-4 pointer-events-none duration-500'>Description of your need or project</span>  
      </div>  

      <input type="submit" className='button '/>
    </form>
  )
}

export default ContactForm