import Image from 'next/image'

import Mvo from '@/components/home/mvo'
import Hero from '@/components/home/hero'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Mvo />
    </main>
  )
}
