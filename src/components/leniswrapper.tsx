"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Leniswrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({});
    lenis.on("scroll", ScrollTrigger.update);

    const func1 = (time: any) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add((time) => func1(time));

    return () => {
      gsap.ticker.remove(func1);
    };
  }, []);

  return <>{children}</>;
}
