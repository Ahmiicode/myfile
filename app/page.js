'use client'
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
export default function Home() {
  const [isdarkMode, setisdarkMode] = useState(false);

  useEffect(()=>{
    if(localStorage.theme==='dark'|| (!('theme' in localStorage)&& window.matchMedia('(prefers-color-scheme:dark)').matches)){
      setisdarkMode(true);
    }else{
      setisdarkMode(false);
    }
  },[])

  useEffect(()=>{
    if(isdarkMode){
    document.documentElement.classList.add('dark');
    localStorage.theme='dark';
     }else {
      document.documentElement.classList.remove('dark');
      localStorage.theme='';
    }
},[isdarkMode])
  return (
   
    <>
    <Navbar isdarkMode={isdarkMode} setisdarkMode={setisdarkMode}/>
    <Header isdarkMode={isdarkMode}/>
    <About isdarkMode={isdarkMode}/>
    <Services isdarkMode={isdarkMode}/>
    <Work isdarkMode={isdarkMode}/>
    <Contact isdarkMode={isdarkMode}/>
    <Footer isdarkMode={isdarkMode}/>
    </>
  );
}
