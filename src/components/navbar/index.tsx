'use client'
import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Navlinks } from '@/data/Navlinks'
import * as Md from "react-icons/md";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const pathname = usePathname()

  return (
    <div className=' shadow-sm shadow-gray-400'>
      <div className='container w-11/12 mx-auto'>
        <div className='py-4 flex justify-between'>
          <Image  
            src="/assets/logos/KH-LOGO.png"
            alt='Brand logo'
            width={50}
            height={50}/>

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

            <div className='text-4xl md:hidden cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
              {openMenu ? <Md.MdMenu /> : <Md.MdClose /> }
            </div>
          </div>
        </div>

        <div
          className={`absolute w-full duration-200 bg-white md:hidden h-full ${openMenu ? '-left-full' : '-left-0'}`}>
          <ul>
            {Navlinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <div className='hover:bg-gray'>
                <li className='py-2 w-11/12 mx-auto container cursor-pointer'
                  onClick={() => setOpenMenu(!openMenu)}>
                    {link.name}
                </li>
              </div>
            </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar