"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ isdarkMode, setisdarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      {/* NAVBAR */}

      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="fixed top-5 left-0 right-0 z-[100] flex justify-center px-4"
      >

        <div
          className={`
          flex w-full max-w-6xl items-center justify-between 
          rounded-full px-5 py-3 transition-all duration-500

          ${
            isScroll
              ? "bg-[#050816]/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,.4)]"
              : "bg-white/5 backdrop-blur-xl border border-white/10"
          }
          `}
        >


          {/* LOGO */}

          <a
            href="#top"
            className="text-xl md:text-2xl font-black tracking-wide text-white"
          >

            Builds

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

              byahmad

            </span>

          </a>



          {/* DESKTOP LINKS */}

          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((item) => (

              <a
                key={item.name}
                href={item.href}
                className="group relative text-sm text-gray-300 transition hover:text-white"
              >

                {item.name}


                <span
                  className="
                  absolute -bottom-2 left-0 
                  h-[2px] w-0 
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  transition-all duration-300 
                  group-hover:w-full
                  "
                />

              </a>

            ))}

          </div>




          {/* RIGHT SIDE */}

          <div className="flex items-center gap-3">


            {/* CTA */}

            <a
              href="#contact"
              className="
              hidden md:block 
              rounded-full 
              bg-gradient-to-r from-cyan-500 to-blue-600 
              px-5 py-2 
              text-sm font-semibold
              transition hover:scale-105
              "
            >

              Let's Talk

            </a>




            {/* DARK MODE */}

            <button
              onClick={() => setisdarkMode(!isdarkMode)}
              className="
              flex h-10 w-10 items-center justify-center
              rounded-full border border-white/10
              bg-white/5 transition
              hover:bg-white/10
              "
            >

              <Image
                src={
                  isdarkMode
                    ? assets.sun_icon
                    : assets.moon_icon
                }
                alt="theme"
                className="w-5"
              />

            </button>




            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-2xl text-white"
            >

              ☰

            </button>


          </div>


        </div>


      </motion.nav>







      {/* MOBILE MENU */}

      <AnimatePresence>

        {isMenuOpen && (

          <>


            {/* BACKDROP */}

            <motion.div

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              exit={{
                opacity: 0,
              }}

              onClick={() => setIsMenuOpen(false)}

              className="
              fixed inset-0 
              z-[100]
              bg-black/70 
              backdrop-blur-sm
              "

            />





            {/* MOBILE SHEET */}

            <motion.div

              initial={{
                y: 400,
              }}

              animate={{
                y: 0,
              }}

              exit={{
                y: 400,
              }}

              transition={{
                type: "spring",
                damping: 25,
              }}

              className="
              fixed bottom-0 left-0 right-0
              z-[101]
              rounded-t-[35px]
              border border-white/10
              bg-[#050816]
              p-7
              "

            >


              {/* Handle */}

              <div
                className="
                mx-auto mb-8 
                h-1.5 w-14 
                rounded-full 
                bg-white/20
                "
              />





              {/* Links */}

              <div className="flex flex-col gap-6">

                {navLinks.map((item) => (

                  <a

                    key={item.name}

                    href={item.href}

                    onClick={() => setIsMenuOpen(false)}

                    className="
                    text-xl 
                    text-gray-200
                    transition
                    hover:text-cyan-400
                    "

                  >

                    {item.name}

                  </a>

                ))}


              </div>






              {/* Close */}

              <button

                onClick={() => setIsMenuOpen(false)}

                className="
                mt-8 w-full
                rounded-full
                bg-gradient-to-r 
                from-cyan-500 
                to-blue-600
                py-3
                font-semibold
                "

              >

                Close Menu

              </button>



            </motion.div>


          </>

        )}

      </AnimatePresence>


    </>
  );
};

export default Navbar;