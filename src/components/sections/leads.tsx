"use client"

import React, { useRef, useEffect } from "react";
import { ProfileCard } from "../profilecard";
import { gsap } from "gsap";

export default function Leads() {
  const profileRef = useRef(null);
  const lead = useRef(null);

  useEffect(() => {
    // @ts-ignore
    const children = profileRef.current.children;

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: profileRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 2,

      },
    });

    t1.fromTo(lead.current, { scale: 3 }, { scale: 1 });
    t1.fromTo(children, { y:100, opacity: 0 }, {y:0, opacity: 1, });
  }, []);

  return (
    <section
      id="leads"
      className="relative h-screen flex flex-col py-20 justify-center gap-4 container overflow-hidden mx-auto
     
     "
    >
      <span ref={lead} className="text-white text-4xl font-bold text-center  ">
        Leads 2023-24
      </span>
      <div
        ref={profileRef}
        className="flex items-center lg:justify-around mx-auto gap-4 overflow-x-auto overflow-y-hidden snap-x snap-proximity overscroll-x-contain p-2 container "
      >
        <ProfileCard
          name="Nikhil Gautam"
          description="Head Co-ordinator"
          imagePath="/leads/nikhil1.jpg"
          instagram=""
          linkedin=""
        />
        <ProfileCard
          name="Kallul Shivam Majumder"
          description="Head Co-ordinator"
          imagePath="/leads/kallul1.jpg"
          instagram=""
          linkedin=""
        />
        <ProfileCard
          name="Debasis Das"
          description="Head Co-ordinator"
          imagePath="/leads/debasis1.jpg"
          instagram=""
          linkedin=""
        />

        <ProfileCard
          name="Dibyashree Chakraborty"
          description="Head Co-ordinator"
          imagePath="/leads/dibyashree1.jpg"
          instagram=""
          linkedin=""
        />
      </div>
    </section>
  );
}
