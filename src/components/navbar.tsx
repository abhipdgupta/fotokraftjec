"use client";
import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";

export default function Navbar() {
  const navref1 = useRef<HTMLDivElement>(null);
  const navref2 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const children_: any = navref2.current?.children;

    gsap.fromTo(
      children_,
      { y: -100 },
      {
        y: 0,
        delay: 0.5,
        duration: 1,
        stagger: { amount: 0.2, ease: "SlowMo" },
      }
    );
    gsap.fromTo(
      navref1.current,
      { x: "-50%" },
      { x: "0%", duration: 0.5, delay: 0.4, ease: "SlowMo" }
    );
  }, []);

  return (
    <nav
      ref={navref1}
      className=" w-full flex items-center justify-around h-20 fixed z-10"
    >
      <NavItem to="#home">
        <img
          src="/Fotokraft 1.svg"
          className="w-10 object-scale-down"
          alt="Fotokraft logo"
        />
      </NavItem>

      <div
        ref={navref2}
        className="flex items-center justify-evenly gap-6 h-full"
      >
        <NavItem to="#events">Events</NavItem>
        <NavItem to="#gallery">Gallery</NavItem>
        <NavItem to="#join-club">Join?</NavItem>
        <NavItem to="#about">About</NavItem>
        <NavItem to="#leads">Leads</NavItem>
      </div>
      <NavItem to="#home">
        <img
          src="/JEC_logo_.png"
          className="w-10 object-scale-down"
          alt="jec logo"
        />
      </NavItem>
    </nav>
  );
}

function NavItem({ children, to }: { children: React.ReactNode; to: string }) {
  const scrollanimate = (to: any) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: to,
      ease: "Power1.easeInOut",
    });
  };
  return (
    <button
      onClick={() => scrollanimate(to)}
      className="hover:text-xl text-slate-200   cursor-pointer transition-all"
    >
      {children}
    </button>
  );
}
