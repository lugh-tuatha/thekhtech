'use client'

import Mvo from '@/components/home/Mvo'
import Hero from '@/components/home/Hero'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Platforms from '@/components/home/Platforms'
import CallToAction from '@/components/home/CallToAction'
import Expertise from '@/components/home/Expertise'

import { ThemeProvider } from 'next-themes'

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      <main>
        <Hero/>
        <Mvo />
        <Expertise />
        <WhyChooseUs />
        <Platforms />
        <CallToAction />
      </main>
    </ThemeProvider>
  )
}
