"use client";


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";


export default function Events() {
  const section3 = useRef(null);
  useEffect(() => {
    // @ts-ignore
    const childNodes = section3.current?.childNodes;

    // Filter even child nodes
    const evenChildNodes = Array.from(childNodes).filter(
      (_, index) => index % 2 === 0
    );
    const oddChildNodes = Array.from(childNodes).filter(
      (_, index) => index % 2 !== 0
    );

    //@ts-ignore
    gsap.fromTo(
      evenChildNodes,
      // @ts-ignore
      { x: section3.current.offsetWidth - evenChildNodes[0].offsetWidth / 2 },
      {
        // @ts-ignore
        x: section3.current.offsetWidth -
          // @ts-ignore
          (3 / 2) * evenChildNodes[0].offsetWidth,
        stagger: 0.5,
        scrollTrigger: {
          trigger: evenChildNodes as any,
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
          // markers:true,
        },
      }
    );
    // @ts-ignore
    gsap.fromTo(
      oddChildNodes,
      // @ts-ignore
      { x: -oddChildNodes[0].offsetWidth / 2 },
      {
        // @ts-ignore
        x: oddChildNodes[0].offsetWidth / 2,
        stagger: 0.5,
        scrollTrigger: {
          trigger: oddChildNodes as any,
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
          // markers:true,
        },
      }
    );
  }, []);
  return (
    <>
      <section
        ref={section3}
        id="events"
        className="bg-cyan-400 min-h-screen pt-12 pb-12 pl-0 pr-0 container overflow-hidden"
      >
        <div className="w-80 h-80 mt-4 bg-yellow-200"></div>
        <div className="w-80 h-80 mt-4 bg-red-200"></div>
        <div className="w-80 h-80 mt-4 bg-blue-200"></div>
        <div className="w-80 h-80 mt-4 bg-green-200"></div>
      </section>
    </>
  );
}
