"use client";

import React from "react";
import Image from "next/image";
import { infoList, toolsData } from "@/assets/assets";
import { motion } from "framer-motion";


const About = () => {

  return (

    <section
      id="about"
      className="
      relative overflow-hidden
      bg-[#050816]
      px-6 py-28
      text-white
      md:px-[10%]
      "
    >


      {/* Background */}

      <div className="
      absolute left-0 top-20
      h-[400px] w-[400px]
      rounded-full
      bg-cyan-500/10
      blur-[120px]
      " />


      <div className="
      absolute bottom-0 right-0
      h-[350px] w-[350px]
      rounded-full
      bg-purple-600/10
      blur-[120px]
      " />






      {/* TITLE */}

      <div className="relative z-10 mx-auto max-w-4xl text-center">


        <motion.p

          initial={{
            opacity:0,
            y:20
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="
          text-sm uppercase
          tracking-[0.4em]
          text-cyan-400
          "

        >

          About Me

        </motion.p>





        <motion.h2

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="
          mt-5
          text-4xl
          font-black
          leading-tight
          md:text-6xl
          "

        >

          Turning Ideas Into

          <span className="
          block
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          ">

            Digital Experiences

          </span>


        </motion.h2>





        <motion.p

          initial={{
            opacity:0
          }}

          whileInView={{
            opacity:1
          }}

          viewport={{
            once:true
          }}

          className="
          mx-auto mt-7
          max-w-2xl
          text-gray-400
          leading-8
          "

        >

          I'm Ahmad, a MERN Stack Developer passionate about
          creating modern, scalable and high-performance web
          applications with beautiful user experiences.

        </motion.p>


      </div>








      {/* INFO CARDS */}


      <div className="
      relative z-10
      mx-auto mt-20
      grid max-w-6xl
      grid-cols-1
      gap-6
      sm:grid-cols-2
      lg:grid-cols-3
      ">


        {
          infoList.map((item,index)=>(


            <motion.div

              key={index}

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                delay:index*.1
              }}


              whileHover={{
                y:-10,
                scale:1.03
              }}


              className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-7
              backdrop-blur-xl
              transition
              hover:border-cyan-400/40
              "

            >


              <div className="
              mb-5
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-cyan-500
              to-blue-600
              ">

                <Image

                  src={item.icon}

                  alt={item.title}

                  className="w-6"

                />

              </div>




              <h3 className="
              text-lg
              font-bold
              ">

                {item.title}

              </h3>


              <p className="
              mt-3
              text-sm
              leading-6
              text-gray-400
              ">

                {item.description}

              </p>



            </motion.div>


          ))
        }


      </div>









      {/* TOOLS */}


      <div className="
      relative z-10
      mt-24
      text-center
      ">


        <p className="
        mb-8
        text-xs
        uppercase
        tracking-[0.4em]
        text-gray-500
        ">

          Technologies I Work With

        </p>





        <div className="
        flex
        flex-wrap
        justify-center
        gap-5
        ">


        {
          toolsData.map((tool,index)=>(


            <motion.div

              key={index}

              whileHover={{
                scale:1.2,
                rotate:8
              }}

              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              "

            >


              <Image

                src={tool}

                alt="tool"

                className="w-7"

              />


            </motion.div>


          ))
        }


        </div>


      </div>



    </section>

  );

};


export default About;