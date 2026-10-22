'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import { ArrowDownRight } from "lucide-react"; // Import this for a sleek arrow

export default function Header() {
  return (
    <section className="relative min-h-screen bg-[#FAFAFA] text-black overflow-hidden flex items-center pt-32 pb-24 lg:pt-32 selection:bg-[#D4AF37] selection:text-white">
      
      {/* Background Subtle Grid (Optional for depth) */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 flex flex-col justify-center">
        
        {/* Top Minimal Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-between items-end border-b border-black pb-4 mb-12 md:mb-20"
        >
          <span className="uppercase text-[10px] md:text-xs font-black tracking-[0.2em] text-black">
            Ahmad Naeem © {new Date().getFullYear()}
          </span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
            <span className="uppercase text-[9px] md:text-[10px] font-bold tracking-widest text-black/60">
              Available for new projects
            </span>
          </div>
        </motion.div>

        {/* Main Editorial Layout */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* LEFT: Copy & Details */}
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:pr-10">
            
            {/* Massive Typography overlapping the space */}
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[4rem] sm:text-[6rem] lg:text-[7.5rem] leading-[0.85] font-black tracking-tighter uppercase mb-8"
            >
              <span className="block text-black">Digital</span>
              {/* Hollow Text Effect (CSS Webkit Text Stroke) */}
              <span 
                className="block text-transparent" 
                style={{ WebkitTextStroke: '2px black' }}
              >
                Architect
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-black/70 font-medium max-w-md leading-relaxed mb-10 pl-4 border-l-2 border-[#D4AF37]"
            >
              I engineer high-performance web applications and e-commerce architectures. Transforming complex MERN logic into seamless, pixel-perfect experiences.
            </motion.p>

            {/* Designer-style Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <a href="#contact" className="group relative inline-flex items-center justify-center gap-4 bg-black px-8 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#D4AF37] hover:text-black">
                Let's Talk
                <ArrowDownRight className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform duration-300" />
              </a>
              
              <a href="#work" className="text-xs font-bold uppercase tracking-widest text-black hover:text-[#D4AF37] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-px after:bg-black hover:after:bg-[#D4AF37] after:transition-colors">
                View Portfolio
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Art-Directed Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="w-full sm:w-[80%] lg:w-1/2 flex justify-center lg:justify-end relative"
          >
            {/* The Image Container - Editorial Aspect Ratio (Tall) */}
            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[550px] group overflow-hidden bg-black/5">
              
              {/* Image with Grayscale to Color hover effect */}
              <Image
                src={assets.profile_img}
                alt="Ahmad Naeem"
                fill
                priority
                className="object-cover object-center grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-105" 
              />
              
              {/* Floating Tech Stack Overlay (Very Human/Designer touch) */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 z-10">
                {["Next.js", "React", "Node.js", "Shopify"].map((tech) => (
                  <span key={tech} className="bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative Brutalist Stat Block floating on the side */}
            <div className="absolute -left-4 md:-left-12 bottom-12 bg-white border border-black p-4 flex flex-col gap-1 shadow-[4px_4px_0_0_#D4AF37] z-20 hidden sm:flex">
              <span className="text-3xl font-black text-black leading-none">100+</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-black/50">Projects Delivered</span>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}