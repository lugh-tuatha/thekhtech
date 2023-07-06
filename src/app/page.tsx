import Image from 'next/image'

import Mvo from '@/components/home/mvo'

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl my-4 font-bold text-accent text-center">ABOUT US</h1>
      <Mvo />
    </main>
  )
}
