"use client";
import { gsap } from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

export default function Navbar() {
  const navref1 = useRef<HTMLDivElement>(null);
  const navref2 = useRef<HTMLDivElement>(null);
  const mobileMenu = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  const [showMenu, setShowMenu] = useState(false);
  const [menuButtonPosition, setMenuButtonPosition] = useState({ x: 0, y: 0 });

  const setPosition = () => {
    if (menuButton.current) {
      const rect = menuButton.current?.getBoundingClientRect();

      const xPercentage = (rect.x / window.innerWidth) * 100;
      const yPercentage = (rect.y / window.innerHeight) * 100;

      setMenuButtonPosition({ x: xPercentage + 5, y: yPercentage + 5 });
    }
  };
  useLayoutEffect(() => {
    if (navref2.current) {
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
    }
    if (navref1.current) {
      gsap.fromTo(
        navref1.current,
        { x: "-50%" },
        {
          x: "0%",
          duration: 0.5,
          delay: 0.4,
          ease: "SlowMo",
          onComplete: () => {
            setPosition();
          },
        }
      );
    }
  }, []);

  const animateMenu = (show: boolean) => {
    // const children_: any = navref2.current?.children;

    if (show) {
      setShowMenu(!showMenu);
      gsap.fromTo(
        mobileMenu.current,
        {
          clipPath: `circle(0% at ${Math.floor(
            menuButtonPosition.x
          )}% ${Math.floor(menuButtonPosition.y)}%)`,
        },
        {
          clipPath: `circle(130% at ${Math.floor(
            menuButtonPosition.x
          )}% ${Math.floor(menuButtonPosition.y)}%)`,

          duration: 0.5,
          ease: "SlowMo",
        }
      );
    } else {
      gsap.to(
        mobileMenu.current,

        {
          clipPath: `circle(0% at ${Math.floor(
            menuButtonPosition.x
          )}% ${Math.floor(menuButtonPosition.y)}%)`,

          duration: 0.5,
          ease: "SlowMo",
          onComplete: () => {
            setShowMenu(!showMenu);
          },
        }
      );
    }
  };
  return (
    <nav
      ref={navref1}
      className="w-full flex items-center justify-around  fixed z-20 py-1 bg-slate-950 backdrop-blur-sm bg-opacity-40"
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
        className="md:flex items-center justify-around gap-6 h-full hidden"
      >
        <NavItem to="#about">About</NavItem>
        <NavItem to="#events">Events</NavItem>
        <NavItem to="#leads">Leads</NavItem>
        <NavItem to="#gallery">Gallery</NavItem>
       
      </div>

      <NavItem to="#home">
        <img
          src="/JEC_logo_.png"
          className="w-12 object-scale-down"
          alt="jec logo"
        />
      </NavItem>

      <button
        ref={menuButton}
        className="md:hidden z-30"
        onClick={() => {
          animateMenu(!showMenu);
        }}
      >
        {!showMenu ? (
          <MenuIcon className="w-10 h-10" />
        ) : (
          <XIcon className="w-10 h-10" />
        )}
      </button>

      <div
        ref={mobileMenu}
        className="absolute w-full top-0 left-0 flex "
      >
        {showMenu && (
          <div className=" bg-slate-700 h-screen flex flex-col items-center justify-center  font-semibold   w-full  text-black ">
            <div
              onClick={() => {
                setShowMenu(!showMenu);
                animateMenu(false);
              }}
              className="flex flex-col items-center justify-center gap-12"
            >
              <NavItem to="#about">About</NavItem>
              <NavItem to="#events">Events</NavItem>
              <NavItem to="#leads">Leads</NavItem>
              <NavItem to="#gallery">Gallery</NavItem>
              <NavItem to="#join-club">Join?</NavItem>
            </div>
          </div>
        )}
      </div>
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
      className="md:text-xl text-3xl text-slate-200   cursor-pointer px-2 py-1 rounded-xl hover:bg-gray-700 transition-all "
    >
      {children}
    </button>
  );
}
