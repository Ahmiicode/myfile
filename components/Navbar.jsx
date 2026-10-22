'use client';

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react"; // Import Lucide icons

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* DESKTOP & MOBILE HEADER */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScroll ? "py-2" : "py-6"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div
            className={`flex w-full items-center justify-between transition-all duration-500 ${
              isScroll
                ? "bg-white/90 backdrop-blur-md border border-black/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] px-6 py-4 rounded-none"
                : "bg-transparent py-2"
            }`}
          >
            {/* LOGO - Editorial Style */}
            <a
              href="#top"
              className="group flex items-center gap-1 z-[101]"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="text-xl md:text-2xl font-black tracking-tighter text-black uppercase flex items-center">
                Builds
                <span className="text-transparent transition-colors duration-300 group-hover:text-[#D4AF37]" style={{ WebkitTextStroke: '1px black' }}>
                  byahmad.
                </span>
              </div>
            </a>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative text-[10px] font-bold uppercase tracking-[0.2em] text-black/60 transition-colors hover:text-black"
                >
                  {item.name}
                  {/* Minimal Gold Underline on Hover */}
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* RIGHT SIDE (CTA & Mobile Toggle) */}
            <div className="flex items-center gap-6 z-[101]">
              
              {/* CTA BUTTON - Sharp Agency Look */}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className={`hidden md:flex items-center gap-2 border border-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  isMenuOpen ? "bg-white text-black" : "bg-black text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black"
                }`}
              >
                Let's Talk <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden flex h-12 w-12 items-center justify-center border transition-colors duration-300 ${
                  isMenuOpen ? "border-white/20 text-white" : "border-black bg-black text-white"
                }`}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* FULL-SCREEN BRUTALIST MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] flex flex-col justify-center bg-[#050505] px-6 py-24 md:hidden"
          >
            {/* Subtle Texture for Premium feel */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col gap-6 mt-12">
              <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                Navigation
              </span>
              
              {navLinks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group text-5xl sm:text-6xl font-black tracking-tighter text-white uppercase flex items-center gap-4 transition-colors"
                  >
                    {/* Hover Outline Effect */}
                    <span className="group-active:text-transparent group-active:stroke-text transition-all duration-300" style={{ WebkitTextStroke: '1px white' }}>
                      {item.name}
                    </span>
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12"
              >
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center gap-3 border border-[#D4AF37] text-[#D4AF37] px-8 py-5 font-bold uppercase tracking-widest text-[11px] hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
                >
                  Start a Project <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
              
              {/* Contact Info Footer inside Menu */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 border-t border-white/10 pt-8"
              >
                <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.3em] mb-2">Direct Line</p>
                <a href="mailto:hello@buildsbyahmad.com" className="text-white text-sm hover:text-[#D4AF37] transition-colors">hello@buildsbyahmad.com</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;