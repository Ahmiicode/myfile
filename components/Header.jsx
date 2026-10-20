"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

const tech = [
  "Next.js",
  "React",
  "Node.js",
  "WordPress",
  "Shopify"
];

const stats = [
  { number: "4+", title: "Years Exp" },
  { number: "100+", title: "Projects" },
  { number: "100%", title: "Success" },
];

export default function Header() {
  return (
    // Yahan pt-32 aur pb-24 add kiya hai taake Navbar aur WhatsApp disturb na hon
    <section className="relative min-h-screen bg-transparent text-black overflow-hidden flex items-center pt-32 pb-24 lg:pt-32">
      
      {/* Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row lg:gap-16">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Sleek Availability Pill */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm transition-shadow hover:shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">
              Accepting New Projects
            </span>
          </div>

          <h1 className="text-5xl font-black leading-[1.1] sm:text-6xl lg:text-7xl tracking-tighter text-gray-900">
            Websites that <br />
            <span className="text-[#D4AF37]">drive results.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 lg:mx-0 leading-relaxed font-medium">
            I'm Ahmad. A full-stack developer helping brands scale through high-performance web apps, e-commerce stores, and premium landing pages.
          </p>

          {/* Buttons - Clean & Sharp */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#contact" className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden bg-black px-8 py-4 font-semibold text-white transition-all hover:bg-gray-800 sm:w-auto">
              Let's Talk
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            <a href="#work" className="w-full sm:w-auto border-b-2 border-transparent px-6 py-4 font-bold text-gray-600 transition-all hover:border-black hover:text-black">
              View Portfolio ↓
            </a>
          </div>

          {/* Minimal Tech Tags */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3">
            {tech.map((item) => (
              <span
                key={item}
                className="text-sm font-bold text-gray-400 uppercase tracking-wider"
              >
                {item} {item !== tech[tech.length - 1] && <span className="ml-3 text-gray-200">/</span>}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 flex justify-center lg:justify-start gap-12 pt-6">
            {stats.map((item) => (
              <div key={item.title} className="text-center lg:text-left">
                <h2 className="text-4xl font-black text-black">
                  {item.number}
                </h2>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE - Sleek, Magazine Editorial Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex flex-1 items-center justify-center lg:justify-end mt-10 lg:mt-0"
        >
          {/* Container Dimensions Chote aur Sleek kiye hain */}
          <div className="relative h-[380px] w-[280px] sm:h-[450px] sm:w-[320px] lg:h-[500px] lg:w-[360px]">
            
            {/* Subtle Gold Offset Frame */}
            <div className="absolute -inset-3 rounded-2xl border border-[#D4AF37]/40 translate-x-3 translate-y-3" />

            {/* Main Image Box */}
            <div className="relative h-full w-full rounded-2xl bg-gray-100 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }} className="h-full w-full">
                {/* Legacy props hata kar modern Next Image use kiya hai */}
                <Image
                  src={assets.profile_img}
                  alt="Ahmad Naeem - Full Stack Developer"
                  fill
                  priority
                  className="object-cover object-top drop-shadow-sm" 
                />
              </motion.div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}