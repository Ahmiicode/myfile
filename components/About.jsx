'use client';

import React from "react";
import Image from "next/image";
import { toolsData } from "@/assets/assets";
import { motion } from "framer-motion";

const focusAreas = [
  {
    number: "01",
    title: "Rapid & Reliable Delivery",
    description: "Time is money. I pride myself on strict deadline adherence. You get fast project turnarounds, regular milestone updates, and a bug-free launch—without ever compromising on quality.",
  },
  {
    number: "02",
    title: "Elite Professionalism",
    description: "From our first discovery call to post-launch support, expect transparent communication and a highly structured workflow. No disappearing acts, no missed deadlines.",
  },
  {
    number: "03",
    title: "Scalable Architecture",
    description: "Whether it's a custom MERN application, a Next.js portal, or a Shopify store, I build robust systems that load instantly, handle heavy traffic, and scale effortlessly.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#FAFAFA] pt-32 pb-40 overflow-hidden selection:bg-[#D4AF37] selection:text-white">
      
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12">
        
        {/* Editorial Title Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-8 mb-20 gap-8">
          <div className="flex flex-col">
            <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-4">
              Professional Standard
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-[0.9]">
              More than just code.<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>
                A partnership.
              </span>
            </h2>
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-black/40 max-w-[200px] md:text-right">
            Based in Pakistan, Engineering globally.
          </p>
        </div>

        {/* The Human Story - Raw & Direct */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg text-black/80 font-medium leading-relaxed"
            >
              <p className="text-2xl font-black text-black leading-snug mb-8">
                Hi, I'm Ahmad. With over 4 years of hands-on experience, I specialize in full-stack web development and e-commerce solutions.
              </p>
              <p className="mb-6">
                My philosophy is straightforward: write extremely clean code, communicate transparently, and <strong className="text-black bg-[#D4AF37]/20 px-1">deliver projects faster than expected</strong>.
              </p>
              <p className="mb-6">
                I understand that as a business owner, you don't just want a website—you want a reliable digital asset. You need a developer who understands your vision, replies on time, and executes flawlessly. 
              </p>
              <p>
                Whether I am engineering a complex web application using the <strong className="text-black underline decoration-[#D4AF37] decoration-2">MERN stack & Next.js</strong>, or designing high-converting WordPress and Shopify stores, I take full ownership of the technical process so you can focus entirely on scaling your business.
              </p>
            </motion.div>

            {/* Authentic Signature Block */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="w-16 h-px bg-black"></div>
              <div>
                <p className="text-xl font-black text-black uppercase tracking-tight">Ahmad Naeem</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mt-1">Independent Engineer</p>
              </div>
            </motion.div>
          </div>

          {/* Brutalist Value Proposition (Instead of boring boxes) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12">
            {focusAreas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 border-l border-black/10 hover:border-[#D4AF37] transition-colors duration-500 group"
              >
                <span className="absolute left-[-2px] top-0 h-full w-[3px] bg-[#D4AF37] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500"></span>
                <span className="absolute -left-8 md:-left-12 top-0 text-[10px] font-black text-black/20 group-hover:text-[#D4AF37] transition-colors">
                  {item.number}
                </span>
                
                <h3 className="text-2xl font-black text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-black/60 group-hover:text-black/80 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack - Editorial Reel Style */}
        <div className="w-full pt-16 border-t-2 border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 shrink-0">
            Enterprise Stack
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12">
            {toolsData.map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="relative h-10 w-10 md:h-12 md:w-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={tool}
                  alt={`Tech Stack ${index}`}
                  fill
                  className="object-contain"
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