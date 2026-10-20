"use client";

import React from "react";
import Image from "next/image";
import { toolsData } from "@/assets/assets";
import { motion } from "framer-motion";

// Professional Values Data
const focusAreas = [
  {
    icon: "🚀",
    title: "Rapid & Reliable Delivery",
    description: "Time is money. I pride myself on strict deadline adherence. You get fast project turnarounds, regular milestone updates, and a bug-free launch—without ever compromising on quality.",
  },
  {
    icon: "💼",
    title: "Elite Professionalism",
    description: "From our first discovery call to post-launch support, expect transparent communication and a highly structured workflow. No disappearing acts, no missed deadlines. Just pure professionalism.",
  },
  {
    icon: "⚙️",
    title: "Scalable Architecture",
    description: "Whether it's a custom MERN application, a Next.js portal, or a Shopify store, I build robust systems that load instantly, handle heavy traffic, and scale effortlessly as your business grows.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden  px-6 py-32 text-black md:px-[10%]"
    >
      {/* Background Subtle Gradient Lines */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-[1px] bg-black" />
        <div className="absolute left-1/4 top-0 h-full w-[1px] bg-black" />
        <div className="absolute left-2/4 top-0 h-full w-[1px] bg-black" />
        <div className="absolute left-3/4 top-0 h-full w-[1px] bg-black" />
        <div className="absolute right-0 top-0 h-full w-[1px] bg-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* TOP SECTION: HEADING & DETAILED BIO */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column - Heading */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-black uppercase tracking-[0.4em] text-[#D4AF37]"
            >
              Professional Standard
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 text-4xl font-black leading-[1.15] tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
            >
              More than just code. <br />
              <span className="text-[#D4AF37]">A professional partnership.</span>
            </motion.h2>
          </div>

          {/* Right Column - Detailed Long Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg font-medium leading-relaxed text-gray-600"
            >
              <p>
                Hi, I'm Ahmad. With over 4 years of hands-on experience, I specialize in full-stack web development and e-commerce solutions. My philosophy is straightforward: write extremely clean code, communicate transparently, and <strong className="text-black">deliver projects faster than expected</strong>.
              </p>
              <p>
                I understand that as a business owner, you don't just want a website—you want a reliable digital asset. You need a developer who understands your vision, replies on time, and executes flawlessly. 
              </p>
              <p>
                Whether I am engineering a complex web application using the <strong className="text-black">MERN stack & Next.js</strong>, or designing high-converting <strong className="text-black">WordPress and Shopify</strong> stores, I take full ownership of the technical process so you can focus entirely on scaling your business.
              </p>
            </motion.div>

            {/* Signature / Name element to look authentic */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 border-l-2 border-[#D4AF37] pl-6"
            >
              <p className="text-xl font-black text-black">Ahmad Naeem</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">Independent Full-Stack Engineer</p>
            </motion.div>
          </div>
        </div>

        {/* MIDDLE SECTION: WHY HIRE ME CARDS */}
        <div className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-3">
          {focusAreas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-gray-50 p-10 transition-all hover:bg-black hover:shadow-2xl"
            >
              <div className="mb-8 inline-flex h-12 w-12 items-center justify-center bg-white text-2xl shadow-sm transition-transform group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-xl font-black text-gray-900 transition-colors group-hover:text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm font-medium leading-relaxed text-gray-600 transition-colors group-hover:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION: TOOLS */}
        <div className="mt-32 text-center">
          <p className="mb-10 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            Enterprise-Grade Tech Stack
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {toolsData.map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center bg-gray-50 p-4 transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] grayscale hover:grayscale-0"
              >
                <Image
                  src={tool}
                  alt="Tech Stack Icon"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;