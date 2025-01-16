"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import Blogs from "@/components/Blog";
import Contact from "@/components/Contact";
import About from "@/components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect (() => {
    AOS.init({
      easing :"ease-out-back",
      duration : 1200,
      delay : 150,
      mirror : true,
      anchorPlacement : "bottom-bottom",
      offset : 160
    });
    AOS.refresh();
  }, [] );
  
  return (
    <main>
      <Hero/>
      <Projects/>
      <Blogs/>
      <Contact/>
      <About/>
    </main>
  )
};