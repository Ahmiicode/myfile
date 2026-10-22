'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Data mein explicitly "tech" array add kiya hai taake clear nazar aaye
const servicesList = [
  {
    id: "01",
    title: "Full-Stack Web Apps",
    description: "Custom, highly scalable architectures built from scratch. Perfect for SaaS platforms, dashboards, and complex business logic.",
    tech: ["Next.js", "MERN Stack", "Node.js", "MongoDB"]
  },
  {
    id: "02",
    title: "E-Commerce Stores",
    description: "High-converting online shops tailored to maximize your sales. Fast loading times with secure, custom payment integrations.",
    tech: ["Shopify", "WordPress", "WooCommerce", "Liquid"]
  },
  {
    id: "03",
    title: "Premium Landing Pages",
    description: "Beautifully animated, lightning-fast one-page websites designed strictly to capture high-ticket leads and clients.",
    tech: ["React Vite", "Framer Motion", "Tailwind CSS"]
  }
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FAFAFA] px-6 py-32 text-black md:px-[10%] overflow-hidden selection:bg-[#D4AF37] selection:text-white"
    >
      <div className="mx-auto w-full max-w-7xl">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37] mb-6 block"
            >
              My Expertise
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter leading-[0.9] uppercase"
            >
              Core <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>
                Offerings.
              </span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-[280px] text-sm font-bold text-black/50 md:text-right pb-2"
          >
            Focused exclusively on high-performance development and conversion-driven design. No fluff, just results.
          </motion.p>
        </div>

        {/* INTERACTIVE LIST WITH TECH TAGS */}
        <div className="border-t-2 border-black flex flex-col">
          {servicesList.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between border-b-2 border-black py-10 md:py-14 px-4 hover:bg-black transition-colors duration-500 cursor-pointer overflow-hidden"
            >
              {/* Floating Gold Hover Overlay */}
              <div className="absolute inset-0 bg-[#D4AF37]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 pointer-events-none"></div>

              {/* Number */}
              <div className="text-sm font-black text-black/30 group-hover:text-white/40 transition-colors duration-500 mb-6 md:mb-0 w-16 md:w-24 shrink-0 relative z-10">
                / {item.id}
              </div>

              {/* Huge Title */}
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-black group-hover:text-white transition-colors duration-500 flex-1 uppercase tracking-tight relative z-10">
                {item.title}
              </h3>

              {/* Description, TECH TAGS & Action Icon */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 md:gap-12 mt-8 md:mt-0 w-full md:w-[45%] justify-between md:justify-end relative z-10">
                
                <div className="flex flex-col gap-5">
                  {/* Service Description */}
                  <p className="text-sm font-medium text-black/60 group-hover:text-white/70 transition-colors duration-500 max-w-[320px]">
                    {item.description}
                  </p>
                  
                  {/* TECH STACK TAGS (Clear & Prominent) */}
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-black/70 border border-black/20 rounded-full group-hover:text-white/80 group-hover:border-white/30 transition-colors duration-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Circular Arrow Button */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-black group-hover:border-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-500 shrink-0 self-start">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:text-white group-hover:rotate-45 transition-transform duration-500" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;