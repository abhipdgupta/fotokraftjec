"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function About() {
  const section2 = useRef(null);
  const about = useRef(null);

  useEffect(() => {
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: about.current,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 0.3,
      },
    });

    t2.fromTo(about.current, { x: "100%" }, { x: "0%" });

    t2.fromTo(
      // @ts-ignore
      about.current?.children,
      { opacity: 0 },
      { opacity: 1 ,stagger:0.1,delay:1}
    );
  }, []);
  return (
    <>
      <section
        id="about"
        className=" min-h-screen relative container md:p-12 p-4 w-full
          flex items-center overflow-hidden"
        ref={section2}
      >
        <div className=" w-full bg-center bg-cover">
          <article
            ref={about}
            className=" bg-blue-500/30 
        rounded-2xl prose lg:prose-xl dark:prose-invert prose-p:text-white prose-blockquote:text-slate-200 prose-headings:text-slate-200 p-8 min-w-full prose-sm"
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
        </div>
      </section>
    </>
  );
}
