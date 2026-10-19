"use client";

import React from "react";
import { motion } from "framer-motion";

// Maine data yahin custom likh diya hai taake text short aur client-focused rahay
const servicesList = [
  {
    id: "01",
    title: "Full-Stack Web Apps",
    description: "Custom, high-speed applications built from scratch using Next.js and the MERN stack.",
  },
  {
    id: "02",
    title: "E-Commerce Stores",
    description: "High-converting online shops built on Shopify and WordPress to maximize your sales.",
  },
  {
    id: "03",
    title: "Premium Landing Pages",
    description: "Beautifully animated, fast-loading pages designed strictly to capture leads and clients.",
  }
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-gray-50 px-6 py-32 text-black md:px-[10%] overflow-hidden"
    >
      {/* HEADER - Short & Direct */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#D4AF37]"
        >
          My Expertise
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl font-black md:text-5xl lg:text-6xl tracking-tight text-gray-900"
        >
          What I can do <span className="text-gray-400">for you.</span>
        </motion.h2>
      </div>

      {/* SERVICES GRID - Extremely Easy to Read */}
      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {servicesList.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex flex-col justify-between bg-white border border-gray-200 p-10 transition-all duration-300 hover:border-black hover:shadow-2xl"
          >
            {/* Background Big Number (Editorial Style) */}
            <div className="absolute right-6 top-6 text-7xl font-black text-gray-50 transition-colors duration-300 group-hover:text-gray-100 select-none">
              {item.id}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>

            {/* Simple Text Link */}
            <div className="relative z-10 mt-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-black border-b border-transparent pb-1 transition-all group-hover:border-black"
              >
                Discuss Project 
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;