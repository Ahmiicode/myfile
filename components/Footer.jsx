import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
      <h1 className='text-black text-4xl font-Ovo dark:text-white'>Ahmie</h1>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image  src={assets.mail_icon} alt='' className='w-6'/>
            an1748452@gmail.com
        </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            
        <p> 2025 Ahmie . All Rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/Ahmiicode">Github</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/ahmad-naeem-b94151326/">linkdedIn</a></li>
            <li><a target='_blank' href="">Instagram</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Footer
