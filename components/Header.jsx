import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import {motion} from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto pt-11 h-screen flex flex-col
    items-center justify-center gap-4'>
      <motion.div
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.8, type: 'spring', stiffness:100}}>
<Image
  src={assets.profile_img}
  alt="Profile"
  width={144} // base size (fallback)
  height={160}
  className="rounded-full w-24 h-24 sm:w-36 sm:h-40 object-cover"
/>


      </motion.div>
      <motion.h3
       initial={{y:-20 ,opacity:0}}
       whileInView={{y:0, opacity:1}}
       transition={{duration:0.6, delay:0.3}}
       className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Ahmad Naeem 
        <Image src={assets.hand_icon} alt='' className='rounded-full w-6 ' />
        </motion.h3>
        <motion.h1
          initial={{y:-20 ,opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.8, delay:0.5}}
         className='text-3xl sm:text-6xl lg:text-[-66px] font-Ovo'>Mern Stack Web Developer based in Pakistan. </motion.h1>
        <motion.p 
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:0.6, delay:0.7}}
         className='max-w-2xl mx-auto font-Ovo'>Solution-focused Web Developer with expertise in React.Js | Next.Js | and the MERN stack. I specialize in building scalable, high-performance web applications that solve real-world problems.</motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a
              initial={{y:30 ,opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition={{duration:0.6, delay:1.2}}
             href="#contact" className='px-10 py-3 border border-white rounded-full bg-black
            text-white flex items-center gap-2 dark:bg-transparent'>contact me  <Image src={assets.right_arrow_white} alt='' className='w-4 ' /></motion.a>

            <motion.a
             initial={{y:30 ,opacity:0}}
             whileInView={{y:0, opacity:1}}
             transition={{duration:0.6, delay:1}}
             href="/Ahmad.pdf"  download className='px-10 py-3 border rounded-full border-gray-500 flex
            items-center gap-2 dark:text-black bg-white'>Resume  <Image src={assets.download_icon} alt='' className='w-4 ' /></motion.a>
        </div>
    </div>
  )
}

export default Header
