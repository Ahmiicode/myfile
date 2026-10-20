"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { workData } from "@/assets/assets";

const Work = () => {
  const scrollRef = useRef(null);

  // Arrow buttons function to scroll the slider smoothly
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.85; // Mobile card ki width ke hisaab se
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-white px-0 py-32 text-black md:px-[10%]"
    >
      {/* HEADER SECTION */}
      <div className="relative z-10 mx-auto max-w-7xl border-b border-gray-200 pb-8 px-6 md:px-0 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8 md:pb-12">
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
            A collection of real-world applications built with modern technologies, focusing on performance.
          </p>
        </motion.div>
      </div>

      {/* 🔥 MOBILE NAVIGATION ARROWS (Only visible on mobile) */}
      <div className="flex items-center justify-between px-6 mt-6 md:hidden">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Swipe or Click
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 transition-colors hover:bg-black hover:text-white active:bg-gray-800"
          >
            {/* Left Arrow SVG */}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 transition-colors hover:bg-black hover:text-white active:bg-gray-800"
          >
            {/* Right Arrow SVG */}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* 
        PROJECTS SLIDER
        Mobile: Left/Right scroll with Snap
        Desktop: Vertical Zig-Zag
      */}
      <div
        ref={scrollRef}
        className="relative z-10 mx-auto max-w-7xl mt-8 flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 md:mt-24 md:flex-col md:overflow-visible md:gap-32 md:px-0 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={`group w-[85vw] shrink-0 snap-center flex flex-col items-center gap-8 md:w-full md:gap-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* IMAGE CONTAINER */}
            <div className="w-full md:w-3/5">
              <div className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center p-4">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  fill
                  className="object-contain p-4 transition-transform duration-700 ease-in-out group-hover:scale-105"
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
                {["React", "Next.js", "WordPress", "Shopify"].map((item) => (
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