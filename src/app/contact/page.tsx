import React from 'react'

import Breadcrumbs from '@/components/breadcrumbs'
import ContactHeading from '@/components/contact'
import ContactForm from '@/components/contact/form'

function Contact() {
  return (
    <div>
      <Breadcrumbs>Contact</Breadcrumbs>

      <ContactHeading />
      <ContactForm />
    </div>
  )
}

export default Contact