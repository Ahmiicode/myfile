import React from 'react';
import { assets, workData } from '@/assets/assets'; // Ensure this imports correctly
import Image from 'next/image';
import {motion} from "motion/react"

const Work = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
     id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
          initial={{opacity:0,y:-20}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1, delay:0.3}}
       className="text-center mb-2 text-lg font-Ovo">My Portfolio</motion.h4>
      <motion.h2
       initial={{opacity:0,y:-20}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.5, delay:0.5}}
       className="text-center text-5xl font-Ovo">My Latest Work</motion.h2>
      <motion.p
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration:0.5, delay:0.7}}
       className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I offer a variety of services, including web development, graphic design, and digital marketing. 
        I have experience working with multiple companies like Microsoft, Tesla, and Apple.
      </motion.p>

      <motion.div
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:0.6, delay:0.9}}
       className="grid grid-cols-auto-fit  dark:text-black gap-5">
        {workData.map((project, index) => (
          <motion.div
          whileHover={{scale:1.05}}
          transition={{duration:0.3}}
            key={index}
            className="aspect-square bg-no-repeat bg-center bg-cover rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Content Container */}
            <div className="bg-white w-10/12 rounded-md absolute bottom-14 left-1/2 -translate-x-1/2 p-3 px-5 flex flex-col  duration-500 group-hover:bottom-7">
              <h2 className="font-semibold">{project.title}</h2>
              <p className="text-sm">{project.description}</p>
              <div className="absolute bottom-3 right-3 border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <Image
                src={assets.send_icon} // Ensure send_icon exists in the assets file
                alt="Send icon"
                className="w-5"
              />
            </div>
            </div>

            {/* Send Icon Positioned Outside White Box */}
           
          </motion.div>
        ))}
      </motion.div>
      <motion.a
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6, delay:1.1}}
       href="" className='w-max flex items-center justify-center gap-2
      text-gray-700 border-[0.5px] border-gray-700 
      rounded-full y-3 px-10 mx-auto my-20 dark:text-white dark:border-white dark:hover:bg-darkHover py-2 hover:bg-lightHover duration-500'>
        Show more <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4' />
      </motion.a>
    </motion.div>
  );
};

export default Work;
