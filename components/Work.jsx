"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { workData } from "@/assets/assets";

const Work = () => {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-white px-0 py-32 text-black md:px-[10%]"
    >
      {/* HEADER SECTION (Padding adjusted for mobile slider) */}
      <div className="relative z-10 mx-auto max-w-7xl border-b border-gray-200 pb-12 px-6 md:px-0 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#D4AF37]"
          >
            Case Studies
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-4xl font-black tracking-tight text-gray-900 md:text-6xl"
          >
            Selected <span className="text-gray-400">Works.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <p className="max-w-xs text-sm font-medium text-gray-500 leading-relaxed text-right">
            A collection of real-world applications built with modern technologies, focusing on performance and premium user experience.
          </p>
        </motion.div>
      </div>

      {/* 
        PROJECTS SLIDER (MOBILE) & ZIG-ZAG (DESKTOP)
        Mobile: flex, overflow-x-auto, snap-x (Left/Right scroll)
        Desktop: flex-col, overflow-visible (Vertical Zig-Zag)
        Scrollbar is hidden for a clean look
      */}
      <div className="relative z-10 mx-auto max-w-7xl mt-16 md:mt-24 flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 md:flex-col md:overflow-visible md:gap-32 md:px-0 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            // Mobile par width 85vw rakhi hai taake agla card thora sa peek kare
            className={`group w-[85vw] shrink-0 snap-center flex flex-col items-center gap-8 md:w-full md:gap-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            
            {/* IMAGE CONTAINER - Fixed height and 'contain' to stop cropping */}
            <div className="w-full md:w-3/5">
              <div className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center p-4">
                
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  layout="fill"
                  objectFit="contain" /* IS SE IMAGE KATEGGI NAHI */
                  className="p-4 transition-transform duration-700 ease-in-out group-hover:scale-105"
                  priority={index < 2}
                />
                
                {/* Number Indicator */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center bg-white text-[10px] md:text-xs font-bold text-black shadow-lg rounded-full md:rounded-none">
                  0{index + 1}
                </div>
              </div>
            </div>

            {/* CONTENT CONTAINER */}
            <div className="w-full flex flex-col justify-center md:w-2/5 text-left">
              
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">
                Case Study
              </p>

              <h3 className="mt-3 text-2xl font-black text-gray-900 md:text-4xl md:mt-4">
                {project.title}
              </h3>

              <p className="mt-3 text-sm font-medium leading-relaxed text-gray-600 md:text-base md:mt-5 line-clamp-3 md:line-clamp-none">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="mt-5 flex flex-wrap gap-2 md:mt-8">
                {["React", "Next.js", "WordPress", "Shopify", "Tailwind"].map((item) => (
                  <span
                    key={item}
                    className="border border-gray-200 bg-white px-3 py-1 md:px-4 md:py-1.5 text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Button */}
              {project.liveSite ? (
                <a
                  href={project.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-2 bg-black px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm font-bold text-white transition-all hover:bg-gray-800 hover:shadow-lg rounded-full md:rounded-none"
                >
                  View Live Project
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ) : (
                <p className="mt-8 text-xs md:text-sm font-bold tracking-widest text-gray-400 uppercase">
                  Coming Soon
                </p>
              )}
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;