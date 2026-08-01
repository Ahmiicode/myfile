"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import React, { useState } from "react";
import { motion } from "framer-motion";


const Contact = () => {

  const [result,setResult] = useState("");



  const onSubmit = async(event)=>{

    event.preventDefault();

    setResult("Sending...");


    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "62cc866d-0c97-4530-8383-4a3b40aaff56"
    );



    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method:"POST",
        body:formData
      }
    );


    const data = await response.json();



    if(data.success){

      setResult(
        "Message sent successfully 🚀"
      );

      event.target.reset();

    }

    else{

      setResult(
        "Something went wrong"
      );

    }

  };




  return (

    <section

      id="contact"

      className="
      relative overflow-hidden
      bg-[#050816]
      px-6 py-28
      text-white
      scroll-mt-20
      md:px-[10%]
      "

    >



      {/* Glow */}

      <div className="
      absolute left-1/2 top-0
      h-[500px] w-[500px]
      -translate-x-1/2
      rounded-full
      bg-cyan-500/10
      blur-[140px]
      " />



      <div className="
      absolute bottom-0 right-0
      h-[350px] w-[350px]
      rounded-full
      bg-purple-600/10
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
        mx-auto
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

          Contact Me

        </p>




        <h2 className="
        mt-5
        text-4xl
        font-black
        md:text-6xl
        ">

          Let's Build

          <span className="
          block
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          ">

            Something Amazing

          </span>


        </h2>




        <p className="
        mt-6
        text-gray-400
        leading-7
        ">

          Have an idea or project?
          Let's transform it into a modern digital experience.

        </p>



      </motion.div>









      {/* FORM */}


      <motion.form

        onSubmit={onSubmit}


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


        className="
        relative z-10
        mx-auto mt-16
        max-w-3xl
        rounded-[35px]
        border border-white/10
        bg-white/5
        p-6
        backdrop-blur-2xl
        md:p-10
        "

      >




        <div className="
        mb-8
        flex
        items-center
        justify-between
        ">


          <h3 className="
          text-2xl
          font-bold
          ">

            Send Message

          </h3>


          <span className="
          rounded-full
          bg-emerald-500/20
          px-4 py-2
          text-xs
          text-emerald-400
          ">

            Available

          </span>


        </div>








        {/* INPUTS */}


        <div className="
        grid
        gap-5
        md:grid-cols-2
        ">


          <input

            type="text"

            name="name"

            required

            placeholder="Your Name"

            className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5 py-4
            outline-none
            transition
            focus:border-cyan-400
            "

          />




          <input

            type="email"

            name="email"

            required

            placeholder="Your Email"

            className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5 py-4
            outline-none
            transition
            focus:border-cyan-400
            "

          />


        </div>






        <textarea

          rows="6"

          name="message"

          required

          placeholder="Tell me about your project..."

          className="
          mt-5
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-5 py-4
          outline-none
          transition
          focus:border-cyan-400
          "

        />








        {/* BUTTON */}


        <motion.button

          whileHover={{
            scale:1.03
          }}


          whileTap={{
            scale:.97
          }}


          type="submit"

          className="
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          py-4
          font-semibold
          "

        >

          Send Message


          <Image

            src={assets.right_arrow_white}

            alt="arrow"

            className="w-5"

          />


        </motion.button>





        <p className="
        mt-5
        text-center
        text-sm
        text-gray-400
        ">

          {result}

        </p>



      </motion.form>




    </section>

  );

};


export default Contact;