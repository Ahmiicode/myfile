"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";


const Footer = () => {

  return (

    <footer

      className="
      relative overflow-hidden
      mt-20
      border-t border-white/10
      bg-[#050816]
      px-6 py-16
      text-white
      md:px-[10%]
      "

    >



      {/* Glow */}

      <div className="
      absolute left-1/2 top-0
      h-[300px] w-[300px]
      -translate-x-1/2
      rounded-full
      bg-cyan-500/10
      blur-[120px]
      " />






      {/* TOP */}


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
        text-center
        "

      >



        <h1 className="
        text-3xl
        font-black
        tracking-wide
        md:text-4xl
        ">

          Ahmad

          <span className="
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          ">

            _thedev

          </span>


        </h1>





        <p className="
        mt-3
        text-sm
        text-gray-400
        ">

          MERN Stack Developer • UI Engineer • Freelancer

        </p>







        {/* EMAIL */}


        <div className="
        mx-auto mt-7
        flex w-fit
        items-center
        gap-3
        rounded-full
        border border-white/10
        bg-white/5
        px-6 py-3
        backdrop-blur-xl
        ">


          <Image

            src={assets.mail_icon}

            alt="mail"

            className="w-5 opacity-80"

          />


          <span className="
          text-sm
          text-gray-300
          ">

            an1748452@gmail.com

          </span>


        </div>




      </motion.div>









      {/* BOTTOM */}


      <div className="
      relative z-10
      mt-14
      flex
      flex-col
      items-center
      justify-between
      gap-6
      border-t
      border-white/10
      pt-8
      sm:flex-row
      ">




        <p className="
        text-center
        text-sm
        text-gray-500
        sm:text-left
        ">

          © 2026 Ahmad_thedev. All rights reserved.

        </p>







        {/* SOCIAL */}

        <div className="
        flex
        gap-4
        ">



          <motion.a

            whileHover={{
              y:-5,
              scale:1.05
            }}

            target="_blank"

            href="https://github.com/Ahmiicode"

            className="
            rounded-full
            border border-white/10
            bg-white/5
            px-5 py-2
            text-sm
            text-gray-300
            transition
            hover:text-cyan-400
            "

          >

            GitHub

          </motion.a>





          <motion.a

            whileHover={{
              y:-5,
              scale:1.05
            }}

            target="_blank"

            href="https://www.linkedin.com/in/ahmad-naeem-b94151326/"

            className="
            rounded-full
            border border-white/10
            bg-white/5
            px-5 py-2
            text-sm
            text-gray-300
            transition
            hover:text-cyan-400
            "

          >

            LinkedIn

          </motion.a>






          <motion.a

            whileHover={{
              y:-5,
              scale:1.05
            }}

            target="_blank"

            href="https://www.instagram.com/__codewith.ahmad/profilecard"

            className="
            rounded-full
            border border-white/10
            bg-white/5
            px-5 py-2
            text-sm
            text-gray-300
            transition
            hover:text-cyan-400
            "

          >

            Instagram

          </motion.a>



        </div>



      </div>



    </footer>

  );

};


export default Footer;