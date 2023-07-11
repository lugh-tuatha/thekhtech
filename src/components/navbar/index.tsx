'use client'
import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Navlinks } from '@/data/Navlinks'
import * as Md from "react-icons/md";

import Button from '../button'

function Navbar() {
  const [openMenu, setOpenMenu] = useState(true)
  const pathname = usePathname()

  return (
    <div className='sticky top-0 z-50 bg-white shadow-md shadow-gray-600'>
      <div className='container w-11/12 mx-auto'>
        <div className='py-4 flex justify-between'>
          <Link href="/">
            <Image  
              src="/assets/logos/KH-LOGO.png"
              alt='Brand logo'
              width={50}
              height={50}/>
          </Link>

          <div className='flex items-center gap-6'>
            <ul className='hidden md:flex items-center gap-6 text-lg'>
              {Navlinks.map((link) => {
                const isActive = link.name === 'Home' ? pathname === '/' : pathname.startsWith(link.href)

                return (
                  <li key={link.name} className={`${isActive ? 'text-primary' : ''}`} >
                    <Link href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <Md.MdDarkMode className='text-2xl cursor-pointer'/>
            <div className='hidden md:block'>
              <Button>Contact Us</Button>
            </div>

            <div className='text-4xl md:hidden cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
              {openMenu ? <Md.MdMenu /> : <Md.MdClose /> }
            </div>
          </div>
        </div>

        <div
          className={`absolute w-full duration-200 text-black text-center text-2xl font-bold pt-8 bg-white md:hidden h-screen ${openMenu ? '-left-full' : '-left-0'}`}>
          <ul>
            {Navlinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <div className='hover:bg-gray'>
                <li className='py-4 w-11/12 mx-auto container cursor-pointer'
                  onClick={() => setOpenMenu(!openMenu)}>
                    {link.name}
                </li>
              </div>
            </Link>
            ))}
          </ul>
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar