import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import {infoList} from '@/assets/assets'
import {toolsData} from '@/assets/assets'
import {motion} from "motion/react" 


const About = ({isdarkMode}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
     id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.3}}
      className='text-center mb-2 text-lg font-Ovo' >Introduction</motion.h4>
      <motion.h2
       initial={{opacity:0,y:-20}}
       whileInView={{opacity:1, y:0}}
       transition={{duration:0.5, delay:0.5}}
       className='text-center text-5xl font-Ovo'>About me</motion.h2>

      <motion.div
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration:0.8}}
       className='flex flex-col items-center w-full lg:flex-row gap-20 my-20 '>
        <motion.div 
          initial={{opacity:0,scale:0.9}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:0.6}}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.profile_img} alt='' className='w-full rounded-3xl'/>
        </motion.div>
        <motion.div
               initial={{opacity:0}}
               whileInView={{opacity:1}}
               transition={{duration:0.6, delay:0.8}}
         className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>
                I am a software engineer with a passion for building scalable and efficient systems. I have experience working
                with a variety of programming languages and technologies, including  and javascript, React JS,
                with experties in backend developers, in which i expret at MondoDb, Node Js , Next JS 
                and have these solutions
            </p>
            <motion.ul
             initial={{opacity:0}}
             whileInView={{opacity:1}}
             transition={{duration:0.8, delay:1}}
             className='grid grid-cols-1 sm:grid-cols-3 gap-6
            max-w-2xl'>
                {infoList.map(({icon,title, description},index)=>(
                    <motion.li
                    whileHover={{scale:1.05}}
                     className='border-[0.5px] border-gray-400
                    rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black 
                    dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                    key={index}>
                        <Image src={icon} alt={title} className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-700 
                        dark:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>
            <motion.h4 
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5, delay:1.3}}
            className='my-5 text-gray-700 dark:text-white/80  font-Ovo'>Tools I use</motion.h4>

            <motion.ul
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6, delay:1.5}}
             className='flex items-center  gap-3 sm:gap-5'>
                {toolsData.map((tool,index)=>(
                    <motion.li
                    whileHover={{scale:1.1}}
                     key={index} className='flex items-center justify-center
                    w-12 sm:w-14 aspect-square border border-gray-400
                    rounded-lg cursor-pointer hover:translate-y-1' >
                        <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
