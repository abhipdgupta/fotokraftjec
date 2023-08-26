"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger, Flip } from "gsap/all";
import { debounce } from "lodash"

import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Events from "@/components/sections/events";
import Joinform from "@/components/sections/joinform";
import Leads from "@/components/sections/leads";
import Footer from "@/components/footer";
import FotokraftIntroVideo from "@/components/fotokraftIntroVideo";
export default function Home() {
  //import code to make gsap work with dynamic rendering div like using maps etc.
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Flip);
  const heightref = useRef<HTMLDivElement>(null);

  const [height,setHeight]=useState(0);

  useEffect(()=>{

    console.log("height",height);
    console.log("heightref",heightref.current?.offsetHeight);
    
    
    if(heightref.current){
        

        if(height<heightref.current?.offsetHeight){
            ScrollTrigger.refresh();
            console.log("scrollTrigger refreshing...");
            setHeight(heightref.current?.offsetHeight)
            
        }
    }

   

  },[height])

    

  return (
    <div ref={heightref} className="select-none ">
      <Navbar />
      <div className="min-h-screen overflow-y-scroll no-scrollbar  bg-slate-950 overflow-hidden">
        <Hero />
        <About />
        <Events />
        <Leads />
        <Footer />
      </div>
    </div>
  );
}
