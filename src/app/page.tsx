"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger,Flip ,Draggable} from "gsap/all";

import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Events from "@/components/sections/events";
import Joinform from "@/components/sections/joinform";
import Leads from "@/components/sections/leads";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin,Flip,Draggable);


  return (
    <>
      <Navbar />
      <div className="min-h-screen overflow-y-scroll no-scrollbar scroll-smooth bg-slate-950 overflow-hidden">
        <Hero />
        <About />
        <Events />
        {/* <Joinform/> */}
        <Leads/>
      </div>
    </>
  );
}
