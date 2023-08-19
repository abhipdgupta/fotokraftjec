"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Events from "@/components/sections/events";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

  return (
    <>
      <Navbar />
      <div className="min-h-screen overflow-y-scroll no-scrollbar scroll-smooth bg-slate-950 overflow-hidden">
        <Hero />
        <About />
        <Events />
      </div>
    </>
  );
}
