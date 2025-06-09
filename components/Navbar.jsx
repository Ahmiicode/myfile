'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = ({ isdarkMode, setisdarkMode }) => {
  const [isScroll, setisScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sideMenuRef = useRef()

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(0rem)'
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
    setIsMenuOpen(false)
  }

  useEffect(() => {
    // Close menu on page load
    setIsMenuOpen(false)
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    // Scroll effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setisScroll(true)
      } else {
        setisScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}
      >
        <a href="#top">
          <h1 className='text-black text-4xl font-Ovo dark:text-white'>Ahmie</h1>
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
          ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}
        >
          <li><a className='font-Ovo' href="#top">Home</a></li>
          <li><a className='font-Ovo' href="#about">About me</a></li>
          <li><a className='font-Ovo' href="#services">Services</a></li>
          <li><a className='font-Ovo' href="#work">My Work</a></li>
          <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>

        {/* Right side controls */}
        <div className='flex items-center gap-4'>
          <button onClick={() => setisdarkMode(prev => !prev)}>
            <Image src={isdarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
          </button>

          <a
            href="#contact"
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'
          >
            Contact
            <Image src={isdarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt='' />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isdarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
          </button>
        </div>

        {/* Mobile Sidebar Menu */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen 
          bg-rose-50 text-black transition duration-500 dark:bg-darkHover dark:text-white transform translate-x-[16rem]`}
        >
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isdarkMode ? assets.close_white : assets.close_black} alt='Close' className='w-5' />
          </div>
          <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#about">About</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
