"use client";

import React from "react";
import Image from "next/image";
import { workData } from "@/assets/assets";
import { motion } from "framer-motion";


const Work = () => {

  return (

    <section
      id="work"
      className="
      relative overflow-hidden
      bg-[#050816]
      px-6 py-28
      text-white
      scroll-mt-20
      md:px-[10%]
      "
    >



      {/* BACKGROUND */}

      <div className="
      absolute left-1/2 top-0
      h-[500px] w-[500px]
      -translate-x-1/2
      rounded-full
      bg-blue-600/10
      blur-[130px]
      " />



      <div className="
      absolute bottom-0 right-0
      h-[350px] w-[350px]
      rounded-full
      bg-cyan-500/10
      blur-[120px]
      " />







      {/* HEADER */}


      <motion.div

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
        relative z-10
        mx-auto mb-20
        max-w-3xl
        text-center
        "

      >


        <p className="
        text-xs
        uppercase
        tracking-[0.4em]
        text-cyan-400
        ">

          My Work

        </p>



        <h2 className="
        mt-5
        text-4xl
        font-black
        md:text-6xl
        ">

          Selected

          <span className="
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          ">

            Projects

          </span>


        </h2>



        <p className="
        mt-6
        text-gray-400
        leading-7
        ">

          A collection of real-world applications built with
          modern technologies, focusing on performance,
          scalability and premium user experience.

        </p>


      </motion.div>









      {/* PROJECTS */}


      <div className="
      relative z-10
      mx-auto
      max-w-6xl
      space-y-16
      ">


      {
        workData.map((project,index)=>(


          <motion.div

            key={index}


            initial={{
              opacity:0,
              y:50
            }}


            whileInView={{
              opacity:1,
              y:0
            }}


            viewport={{
              once:true
            }}


            transition={{
              duration:.7
            }}



            className="
            group
            grid
            gap-10
            rounded-[35px]
            border
            border-white/10
            bg-white/5
            p-6
            backdrop-blur-xl
            transition
            hover:border-cyan-400/40
            md:grid-cols-2
            md:p-10
            "

          >






            {/* IMAGE */}


            <div className="
            relative
            h-[260px]
            overflow-hidden
            rounded-3xl
            bg-black/30
            md:h-[350px]
            ">


              <Image

                src={project.bgImage}

                alt={project.title}

                fill

                className="
                object-contain
                transition
                duration-700
                group-hover:scale-110
                "

                priority={index < 2}

              />



              {/* Number */}

              <div className="
              absolute
              left-5
              top-5
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-black/50
              backdrop-blur-xl
              text-lg
              font-bold
              text-cyan-400
              ">

                0{index+1}

              </div>


            </div>









            {/* CONTENT */}


            <div className="
            flex
            flex-col
            justify-center
            ">



              <p className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-cyan-400
              ">

                Case Study

              </p>




              <h3 className="
              mt-4
              text-3xl
              font-bold
              ">

                {project.title}

              </h3>




              <p className="
              mt-5
              leading-7
              text-gray-400
              ">

                {project.description}

              </p>






              {/* Tech Placeholder */}

              <div className="
              mt-6
              flex
              flex-wrap
              gap-3
              ">


                {
                  ["React","Next.js","Tailwind"].map((item)=>(

                    <span

                      key={item}

                      className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-1
                      text-xs
                      text-gray-300
                      "

                    >

                      {item}

                    </span>


                  ))
                }


              </div>







              {/* BUTTON */}


              {
                project.liveSite ? (

                <a

                  href={project.liveSite}

                  target="_blank"

                  className="
                  mt-8
                  inline-flex
                  w-fit
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  px-7
                  py-3
                  font-semibold
                  transition
                  hover:scale-105
                  "

                >

                  View Live Project →

                </a>

                )

                :

                (

                <p className="
                mt-8
                text-gray-500
                ">

                  Coming Soon

                </p>

                )

              }



            </div>



          </motion.div>


        ))
      }


      </div>



    </section>

  );

};


export default Work;