import React from 'react'

import Breadcrumbs from '@/components/breadcrumbs'
import AboutHero from '@/components/about'
import Expertise from '@/components/home/Expertise'

function About() {
  return (
    <div>
      <Breadcrumbs>About</Breadcrumbs>

      <AboutHero />
      <Expertise />
    </div>
  )
}

export default About