'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-white pt-24 pb-8 overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* Subtle Grid Background for Depth */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        
        {/* TOP GRID: Info & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 border-b border-white/10 pb-16">
          
          {/* Left: Contact & Location */}
          <div className="flex flex-col gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
                Start a conversation
              </p>
              <a 
                href="mailto:an1748452@gmail.com" 
                className="text-3xl md:text-5xl font-black text-white hover:text-[#D4AF37] transition-colors tracking-tighter relative group inline-block"
              >
                an1748452@gmail.com
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full"></span>
              </a>
            </motion.div>
            
            {/* The "Real Developer" Touch: Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">
                Local Base
              </p>
              <p className="text-sm font-medium text-white/80">
                Rahim Yar Khan, Pakistan (PKT)
              </p>
            </motion.div>
          </div>

          {/* Right: Premium Social Links List */}
          <div className="flex flex-col w-full md:w-auto min-w-[200px]">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-6 md:text-right">
              Digital Presence
            </p>
            <div className="flex flex-col">
              {[
                { name: 'GitHub', url: 'https://github.com/Ahmiicode' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmad-naeem-b94151326/' },
                { name: 'Instagram', url: 'https://www.instagram.com/__codewith.ahmad/profilecard' }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.url}
                  className="group flex items-center justify-between border-t border-white/10 py-4 text-sm font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
                >
                  {social.name}
                  <ArrowUpRight className="w-4 h-4 text-[#D4AF37] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </motion.a>
              ))}
              <div className="border-t border-white/10 w-full"></div>
            </div>
          </div>
        </div>

        {/* MASSIVE TYPOGRAPHY (The Agency Flex) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 w-full flex flex-col items-center select-none overflow-hidden"
        >
          <h1 className="text-[14vw] leading-none font-black text-white uppercase tracking-tighter w-full flex justify-between items-center whitespace-nowrap">
            <span>BUILDS</span>
            {/* Hollow Text for 'BY' */}
            <span 
              className="text-transparent mx-2 md:mx-6" 
              style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}
            >
              BY
            </span>
            <span>AHMAD.</span>
          </h1>
        </motion.div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-white/10 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 gap-4">
          <p>© {new Date().getFullYear()} BUILDSBYAHMAD.</p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;