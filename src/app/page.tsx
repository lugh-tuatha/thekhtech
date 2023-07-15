'use client'

import Mvo from '@/components/home/Mvo'
import Hero from '@/components/home/Hero'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Platforms from '@/components/home/Platforms'
import CallToAction from '@/components/home/CallToAction'
import Expertise from '@/components/home/Expertise'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Mvo />
      <Expertise />
      <WhyChooseUs />
      <Platforms />
      <CallToAction />
    </main>
  )
}
