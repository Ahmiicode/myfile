"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-center px-6 transition-all duration-500 ${
          isScroll ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`flex w-full max-w-7xl items-center justify-between transition-all duration-500 ${
            isScroll
              ? "bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.03)] px-6 py-3"
              : "bg-transparent px-2 py-2"
          }`}
        >
          {/* LOGO - Minimal Editorial Style */}
          <a
            href="#top"
            className="text-2xl font-black tracking-tighter text-black flex items-center gap-1"
          >
            Builds
            <span className="text-[#D4AF37]">byahmad.</span>
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-[11px] font-bold uppercase tracking-widest text-gray-500 transition-colors hover:text-black"
              >
                {item.name}
                {/* Minimal Underline Animation */}
                <span className="absolute -bottom-1.5 left-0 h-[1.5px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* RIGHT SIDE (CTA & Mobile Menu) */}
          <div className="flex items-center gap-4">
            
            {/* CTA BUTTON - Sharp Agency Look */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 border border-black bg-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black hover:shadow-lg"
            >
              Let's Talk
            </a>

            {/* MOBILE MENU BUTTON (Hamburger) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden flex h-10 w-10 items-center justify-center text-xl text-black border border-gray-200 bg-gray-50 active:bg-gray-200"
            >
              ☰
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU (BottomSheet Style) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
            />

            {/* MOBILE SHEET - Clean White UI */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-[101] rounded-t-3xl border-t border-gray-200 bg-white p-8 shadow-2xl"
            >
              {/* Swipe Handle */}
              <div className="mx-auto mb-8 h-1.5 w-12 rounded-full bg-gray-200" />

              {/* Mobile Links */}
              <div className="flex flex-col gap-6 text-center">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-black tracking-tight text-gray-500 transition-colors active:text-black"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-10 flex w-full justify-center bg-black py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors active:bg-gray-800"
              >
                Let's Talk
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;