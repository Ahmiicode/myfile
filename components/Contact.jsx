'use client'

import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, {useState} from 'react'
import {motion} from "motion/react"

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "62cc866d-0c97-4530-8383-4a3b40aaff56");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="contact"
    className="w-full px-[12%] py-10 scroll-mt-20  dark:bg-none
    bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
  >
    <motion.h4
    initial={{ opacity: 0 ,y:-20 }}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5, delay:0.3}}
    className="text-center mb-2 text-lg font-Ovo">Connect with me</motion.h4>
    <motion.h2
      initial={{ opacity: 0 ,y:-20 }}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5, delay:0.3}}
     className="text-center text-5xl font-Ovo">Get in touch</motion.h2>
    <motion.p
      initial={{ opacity: 0  }}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.7}}
     className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
      I offer a variety of services, including web development, graphic design, and digital marketing. 
      I have experience working with multiple companies like Microsoft, Tesla, and Apple.
    </motion.p>
    <motion.form
      initial={{ opacity: 0  }}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5, delay:0.3}}
     onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto-fit gap-6 mt-10 mb-8'>
            <motion.input
              initial={{ opacity: 0 ,x:-50 }}
              whileInView={{opacity:1,x:0}}
              transition={{duration:0.6, delay:1.1}}
             type="text"  placeholder='Enter your name' required name='name'
            className='flex-1 p-3 outline-none dark:bg-darkHover/30 dark:border-white/90  border-[0.5px] border-gray-400 rounded-md bg-white' />
            <motion.input
             initial={{ opacity: 0 ,x:-50 }}
             whileInView={{opacity:1,x:0}}
             transition={{duration:0.6, delay:1.2}}
             type="email" placeholder='Enter your email' required name='email'
            className='flex-1 p-3 outline-none  dark:bg-darkHover/30 dark:border-white/90  border-[0.5px] border-gray-400 rounded-md bg-white' />
        </div>
        <motion.textarea
           initial={{ opacity: 0 ,y:100 }}
           whileInView={{opacity:1,y:0}}
           transition={{duration:0.6, delay:1.3}}
         rows='6' placeholder='Enter your message ' name='message' className='w-full p-4 outline-none dark:bg-darkHover/30 dark:border-white/90   border-[0.5px] border-gray-400 rounded-md bg-white mb-6 ' required></motion.textarea>

        <motion.button
        whileHover={{scale:1.05}}
        transition={{duration:0.3}}
         type='submit' className='py-3 flex px-8 dark:bg-transparent dark:border-[0.5px]  dark:hover:bg-darkHover w-max items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>
        Submit now <Image src={assets.right_arrow_white} className='w-4'/>
        </motion.button>
        <p className='mt-4'>{result}</p>
    </motion.form>
      
    </motion.div>
  )
}

export default Contact
