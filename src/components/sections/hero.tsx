"use client"

import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Instagram, Youtube, Facebook } from "lucide-react";
import { gsap } from "gsap";


export default function Hero() {
  const section1 = useRef(null);
  const maintext = useRef(null);
  const text = useRef(null);
  const subtext = useRef(null);
  const camera = useRef(null);
  const socials = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap.timeline({});

    t1.fromTo(
      camera.current,
      { x: "-100%" },
      { x: "30%", ease: "Power3.easeOut", duration: 1 }
    );
    t1.to(camera.current, { scale: 1.3 });
    t1.fromTo(camera.current,{rotate:-90}, {rotate:0, x: "4%", duration: 0.3 });
    t1.to(camera.current, { y: "30%" });

    t1.fromTo(maintext.current, { y: 0, opacity: 0 }, { y: -100, opacity: 1 });
    t1.fromTo(subtext.current, { y: 0, opacity: 0 }, { y: -20, opacity: 1 });
    // @ts-ignore
    const children_: any = socials.current?.children;

    t1.fromTo(children_, { x: "-300%" }, { x: "0", stagger: 0.1 });
  }, []);

  useEffect(()=>{
     let t3 = gsap.timeline({
      scrollTrigger: {
        trigger: section1.current,
        start: "bottom 80%",
        end: "bottom 30%",
        scrub: 1,
        // markers:true
      },
    });

    t3.to(camera.current, { y: "-5%" });
  },[])
  return (
    <>
    {/* Socials */}
    <section
          ref={socials}
          className=" transition-all md:ml-3 flex flex-col justify-center items-center fixed top-1/2 -translate-y-1/2 
          z-20
        "
        >
          <span className=" m-4 outline outline-2 outline-white rounded-full cursor-pointer   ">
            <Link target="_blank" href={"https://instagram.com"}>
              <Instagram className="w-6 h-6 m-3 hover:scale-125 text-white hover:text-pink-400 transition-all" />
            </Link>
          </span>
          <span className=" m-4 outline  outline-2 outline-white rounded-full cursor-pointer">
            <Link target="_blank" href={"https://youtube.com"}>
              <Youtube className="w-6 h-6 m-3 hover:scale-125 text-white hover:text-red-500 transition-all" />
            </Link>
          </span>
          <span className=" m-4 outline outline-2 outline-white rounded-full cursor-pointer ">
            <Link target="_blank" href={"https://facebook.com"}>
              <Facebook className="w-6 h-6 m-3 hover:scale-125  text-white hover:text-blue-500 transition-all" />
            </Link>
          </span>
        </section>
    <section
      id="home"
      ref={section1}
      className="h-screen flex items-center justify-center  relative"
    >
      <h1
        ref={maintext}
        className="
      bg-gradient-to-r from-amber-400 via-slate-300 to-red-600 bg-clip-text
      absolute z-2  text-5xl md:text-6xl lg:text-9xl text-transparent bg-300% animate-gradient font-extrabold drop-shadow-2xl"
      >
        <span className="text-[8px]  lg:text-sm text-slate-400 absolute -top-5 left-1 ">
          estd 18-04-2012
        </span>
        FotoKraft.Club
      </h1>
      <span
        ref={subtext}
        className="absolute z-10 font-extrabold text-xs text-gray-300 lg:tracking-[.4rem] cursor-pointer"
      >
        <Link href={"https://jecassam.ac.in/student-activity/fotokraft/"} target="_blank">
          .Jorhat Engineering College.
        </Link>
      </span>
      <div ref={camera} className="">
        <img src="/camera_10.png" className="object-cove  " alt="" />
      </div>
    </section>
    </>
  );
}
