"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger, Flip, Draggable } from "gsap/all";

import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Events from "@/components/sections/events";
import Joinform from "@/components/sections/joinform";
import Leads from "@/components/sections/leads";
import Footer from "@/components/footer";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Flip, Draggable);
  

  //import code to make gsap work with dynamic rendering div like using maps etc.

  const heightref=useRef<HTMLDivElement>(null)
  const [height,setheight]=useState(0)
  useEffect(() => {
   
    if (heightref.current) {
      const newHeight = heightref.current.clientHeight;
      setheight(newHeight);
    }
    ScrollTrigger.refresh()
  }, [height]);

  return (
    <div ref={heightref}>
      <Navbar />
      <div className="min-h-screen overflow-y-scroll no-scrollbar  bg-slate-950 overflow-hidden">
        <Hero />
        <About />
        <Events />
        {/* <Joinform/> */}
        <Leads />
        <Footer />
      </div>
    </div>
  );
}
