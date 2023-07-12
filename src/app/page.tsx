import Mvo from '@/components/home/Mvo'
import Hero from '@/components/home/Hero'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Platforms from '@/components/home/Platforms'
import CallToAction from '@/components/home/CallToAction'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Mvo />
      <WhyChooseUs />
      <Platforms />
      <CallToAction />
    </main>
  )
}
