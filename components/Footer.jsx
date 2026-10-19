"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white border-t border-gray-200 px-6 py-20 text-black md:px-[10%]">
      
      {/* TOP SECTION - Minimal Branding */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Sleek Logo */}
        <h1 className="text-3xl font-black tracking-tighter md:text-5xl">
          Builds<span className="text-[#D4AF37]">byahmad.</span>
        </h1>

        <p className="mt-4 text-sm font-medium tracking-wide text-gray-500 uppercase">
          Independent Full-Stack Developer
        </p>

        {/* Clean Email Link (No bulky boxes) */}
        <div className="mt-10">
          <a
            href="mailto:an1748452@gmail.com"
            className="group inline-flex items-center gap-3 text-lg font-bold text-black transition-colors hover:text-gray-600 md:text-2xl"
          >
            {/* Minimal Icon (Optional, keeping it clean) */}
            <Image
              src={assets.mail_icon}
              alt="mail"
              className="w-5 grayscale transition-transform group-hover:scale-110 md:w-6"
            />
            an1748452@gmail.com
          </a>
          {/* Animated Underline */}
          <div className="mx-auto mt-2 h-[2px] w-12 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
        </div>
      </motion.div>

      {/* BOTTOM SECTION - Copyright & Socials */}
      <div className="relative z-10 mt-24 flex flex-col items-center justify-between gap-6 border-t border-gray-100 pt-8 sm:flex-row">
        
        <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 sm:text-left">
          © 2026 Buildsbyahmad. All rights reserved.
        </p>

        {/* SOCIAL LINKS - Minimal Text Style */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          
          <motion.a
            whileHover={{ y: -3 }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Ahmiicode"
            className="text-xs font-bold uppercase tracking-widest text-gray-500 transition-colors hover:text-black"
          >
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ y: -3 }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ahmad-naeem-b94151326/"
            className="text-xs font-bold uppercase tracking-widest text-gray-500 transition-colors hover:text-[#0A66C2]"
          >
            LinkedIn
          </motion.a>

          <motion.a
            whileHover={{ y: -3 }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/__codewith.ahmad/profilecard"
            className="text-xs font-bold uppercase tracking-widest text-gray-500 transition-colors hover:text-[#E1306C]"
          >
            Instagram
          </motion.a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;