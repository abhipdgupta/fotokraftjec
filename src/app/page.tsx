"use client";
import React, {  useRef} from "react";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger, Flip } from "gsap/all";
import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Events from "@/components/sections/events";
import Joinform from "@/components/sections/joinform";
import Leads from "@/components/sections/leads";
import Footer from "@/components/footer";
import FotokraftIntroVideo from "@/components/fotokraftIntroVideo";
export default function Home() {
 
  // NOTE: give fix or min height to the div elements whose size is not define during renders like images
  // if it is not loaded it will not contribute to the size rather give a height unless gsap wonot work properly

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Flip);
  const heightref = useRef<HTMLDivElement>(null);

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
