"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { Instagram, Youtube, Facebook } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Home() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const camera = useRef(null);
  const maintext = useRef(null);
  const text = useRef(null);
  const subtext = useRef(null);
  const socials = useRef(null);
  const about = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {

    let t1 = gsap.timeline({});

    t1.fromTo(
      camera.current,
      { x: "-100%", opacity: 0 },
      { x: "30%", ease: "SlowMo", duration: 1, opacity: 1 }
    );
    t1.to(camera.current, { scale: 1.3 });
    t1.to(camera.current, { rotate: 90, x: 11, duration: 0.3 });
    t1.to(camera.current, { y: 350 });

    t1.fromTo(
      maintext.current,
      { y: 0, opacity: 0, scale: 0 },
      { y: -100, opacity: 1, scale: 1 }
    );
    t1.fromTo(subtext.current, { y: 0, opacity: 0 }, { y: -20, opacity: 1 });
    // @ts-ignore
    const children_: any = socials.current?.children;

    gsap.fromTo(children_, { x: "-1000%" }, { x: "0", stagger: 0.4 });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      camera.current,
      {},
      {
        y: -100,
        // duration: 3,
        ease: "SlowMo",
        scrollTrigger: {
          trigger: section2.current,
          start: 200,
          end: "top -300 ",
          scrub: true,
          // markers: true,
        },
      }
    );
    // gsap.fromTo(
    //   // @ts-ignore
    //   about.current?.children,
    //   {
    //   opacity:0,
    //   scale:.8,
    // },
    //   {
    //     scale:1,
    //     opacity:1,
    //     stagger:1,
    //     duration: 3,
    //     scrollTrigger: {
    //       // @ts-ignore
    //       trigger:about.current?.children,
    //       start: 100,

    //       scrub: true,
    //       markers: true,
    //     },
    //   }
    // );
  }, []);

  const pathname  = usePathname();

  useEffect(() => {
      const timer_=setTimeout(()=>{
        window.scrollTo(0, 0); 
      },10)
      console.log("pathname",pathname);
      return ()=>{clearTimeout(timer_)}
  }, [pathname]);
  return (
    <>
      <Navbar />
      <div className="min-h-screen overflow-y-scroll no-scrollbar scroll-smooth bg-slate-950 ">
        {/* Socials */}
        <section
          ref={socials}
          className=" transition-all md:ml-3 flex flex-col justify-center items-center fixed top-1/2 -translate-y-1/2 
          z-20
        "
        >
          <span className=" m-4 outline outline-2  rounded-full cursor-pointer   ">
            <Link target="_blank" href={"https://instagram.com"}>
              <Instagram className="w-6 h-6 m-3 hover:scale-125  hover:text-pink-400 transition-all" />
            </Link>
          </span>
          <span className=" m-4 outline  outline-2 rounded-full cursor-pointer">
            <Link target="_blank" href={"https://youtube.com"}>
              <Youtube className="w-6 h-6 m-3 hover:scale-125  hover:text-red-500 transition-all" />
            </Link>
          </span>
          <span className=" m-4 outline outline-2 rounded-full cursor-pointer ">
            <Link target="_blank" href={"https://facebook.com"}>
              <Facebook className="w-6 h-6 m-3 hover:scale-125  hover:text-blue-500 transition-all" />
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
            absolute z-20  text-3xl md:text-6xl lg:text-9xl text-transparent bg-300% animate-gradient font-extrabold drop-shadow-2xl"
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
            <Link href={"https://jecassam.ac.in"} target="_blank">
              .Jorhat Engineering College.
            </Link>
          </span>
          <div ref={camera} className="drop-shadow-2xl mix-blend-plus-lighter">
            <img
              src="/camera_10.png"
              className="object-cove -rotate-90 "
              alt=""
            />
          </div>
        </section>

        <section
          id="about"
          className=" min-h-screen relative container p-12 w-full
          flex items-center"
          ref={section2}
        >
          <article
            ref={about}
            className="bg-violet-950 rounded-2xl prose lg:prose-xl dark:prose-invert prose-p:text-white prose-blockquote:text-slate-200 prose-headings:text-slate-200 p-8 min-w-full prose-sm"
          >
            <h1>FotoKraft - the JEC Photography Club,</h1>
            <p>
              is an amateur photographers club started by a group of students of
              Jorhat Engineering College in the year 2012 on the 18th of April.
            </p>
            {/* <p>
              The Club aims at promoting the interest of students in the feld of
              photography. It also acts as the Photo-Journalist of JEC and does
              the pictorial documentation of each college event.
            </p> */}
            <p>
              FotoKraft is responsible for documenting each and every activity
              in the college premises, be it formal functions organized by the
              administration or informal activities that include student
              participation. By far it has been the most active Club of Jorhat
              Engineering College as it happens to be an inexplicable part of
              the socio-cultural structure of the college by itself.
            </p>
            {/* <p>
              The administration of JEC and Student Union of the college JECSU
              has always entrusted the responsibility of "Photography" and
              "Videography" to this Club and the Club itself has tried to meet
              the expectations with sincerity and utmost dedication over the
              years. FotoKraft is always willing to improve itself and garner
              skills for the better of the college and its counterparts.
            </p> */}
            <p>
              Besides that the other activities of the clubs include
              photo-shootouts, holding photography-workshops,competitions,
              seminars and photo exhibitions. The club has its own photo gallery
              in the college premises which displays the immense talent of its
              members.
            </p>

            <blockquote>
              FotoKraft works in tandem with other Clubs of JEC to provide the
              best means possible of representation of the college for the
              greater good.
            </blockquote>
          </article>
        </section>
        <section id="events" className="bg-cyan-400 min-h-screen  "></section>
      </div>
    </>
  );
}
 