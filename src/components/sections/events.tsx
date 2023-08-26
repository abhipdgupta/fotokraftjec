"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import EventsList from "@/lib/eventsLists";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
export default function Events() {
  const section3 = useRef<HTMLDivElement>(null);
  const yr1 = useRef<HTMLDivElement>(null);
  const yr2 = useRef<HTMLDivElement>(null);
  const heroyr1 = useRef<HTMLDivElement>(null);
  const heroyr2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // for yr1

    const yr1odd: any = Array.from(yr1.current!.childNodes).filter(
      (child, index) => index % 2 == 0
    );

    const yr1even: any = Array.from(yr1.current!.childNodes).filter(
      (child, index) => index % 2 !== 0
    );

    yr1odd.forEach((element: any) => {
      gsap.fromTo(
        element,
        { x: "-10%", opacity: 0 },
        {
          x: "0%",
          duration:1,
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 80%",
            scrub: false,
            toggleActions:"play none none reverse"
            // markers:true
          },
        }
      );
    });
    yr1even.forEach((element: any) => {
      gsap.fromTo(
        element,
        { x: "10%", opacity: 0 },
        {
          x: "0%",
          duration:1,
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 80%",
            scrub: false,
            toggleActions:"play none none reverse"
            // markers:true
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    // for yr2

    const yr2odd: any = Array.from(yr2.current!.childNodes).filter(
      (child, index) => index % 2 == 0
    );
   

    const yr2even: any = Array.from(yr2.current!.childNodes).filter(
      (child, index) => index % 2 !== 0
    );

    yr2odd.forEach((element: any) => {
      gsap.fromTo(
        element,
        { y: "30%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration:1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 80%",
            scrub: false,
            toggleActions:"play none none reverse"
            // markers:true
          },
          
        }
      );
    });

    yr2even.forEach((element: any) => {
      gsap.fromTo(
        element,
        { y: "30%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration:1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 80%",
            scrub: false,
            toggleActions:"play none none reverse"
            // markers:true
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      heroyr1.current,
      { clipPath: "polygon(49% 19%, 69% 47%, 51% 80%, 33% 47%)" },
      {
        clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)",
        duration: 1,
        scrollTrigger: {
          trigger: heroyr1.current,
          start: "top center",
          end: "bottom center",
          scrub: false,
          toggleActions:"play none none reverse"
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      heroyr2.current,
      { clipPath: "polygon(49% 19%, 69% 47%, 51% 80%, 33% 47%)" },
      {
        clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)",
        duration: 1,
        scrollTrigger: {
          trigger: heroyr2.current,
          start: "top center",
          end: "bottom center",
          scrub: false,
          toggleActions:"play none none reverse"
          // markers: true,
        },
      }
    );
  }, []);

  
  return (
    <>
      <section
        ref={section3}
        id="events"
        className="min-h-screen py-16 container overflow-hidden "
      >
        <div ref={heroyr1} className="relative h-screen container text-white ">
          <h1 className="absolute lg:text-9xl md:text-6xl text-3xl lg:font-extralight font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            Year 2023
          </h1>
          <img
            className="absolute top-0 left-0 h-full w-full object-cover"
            src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/343607396_3391924807788881_6900563496403258772_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=pQHnyQ4Ap2YAX-HeMha&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfCiU-IVBCsEFVazk4o5x1EbpIdwYPi_sRGPTmGOYkQhdQ&oe=64ECE45B"
            alt=""
          />
        </div>
        <div ref={yr1} className="py-12 max-w-6xl mx-auto">
          {EventsList.yr2023.map((evn, index) => (
            <div
              key={index}
              className={`flex md:flex-row flex-col-reverse items-center  md:items-center gap-8 md:justify-end
             md:my-4 my-12   
             ${index % 2 == 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div
                className={`w-full ${
                  index % 2 != 0 ? "md:text-end" : "text-start"
                }  `}
              >
                <div
                  className={`font-semibold flex gap-4 text-3xl items-center
               ${index % 2 != 0 ? "md:flex-row-reverse" : ""}
               `}
                >
                  <h1>{evn.name}</h1>
                  <Link href={evn.album} target="_blank">
                    <ExternalLink className="w-full h-full" />
                  </Link>
                </div>
                <h3 className="text-slate-300">{evn.description}</h3>
              </div>
              <div className="w-96">
                <img
                  src={evn.thumbnail}
                  alt={evn.name}
                  className="aspect-video object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>

        <div ref={heroyr2} className=" relative h-screen container text-white ">
          <h1 className="absolute lg:text-9xl md:text-6xl text-3xl lg:font-extralight font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            Year 2022
          </h1>
          <img
            className="absolute top-0 left-0 h-full w-full object-cover"
            src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/271103913_2606332342831662_6711318599927837598_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=X_BGzbzVOTkAX80t4p2&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfCcQq4brv2m_xCMlq2AeexuHwkkx9SoQRAvAUNHkBsCfA&oe=64EB8CAD"
            alt=""
          />
        </div>
        <div ref={yr2} className="py-12 max-w-6xl mx-auto">
          {EventsList.yr2022.map((evn, index) => (
            <div
            key={index}
            className={`flex md:flex-row flex-col-reverse items-center  md:items-center gap-8 md:justify-end
           md:my-4 my-12   
           ${index % 2 == 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div
              className={`w-full ${
                index % 2 != 0 ? "md:text-end" : "text-start"
              }  `}
            >
              <div
                className={`font-semibold flex gap-4 text-3xl items-center
             ${index % 2 != 0 ? "md:flex-row-reverse" : ""}
             `}
              >
                <h1>{evn.name}</h1>
                <Link href={evn.album} target="_blank">
                  <ExternalLink className="w-full h-full" />
                </Link>
              </div>
              <h3 className="text-slate-300">{evn.description}</h3>
            </div>
            <div className="w-96">
              <img
                src={evn.thumbnail}
                alt={evn.name}
                className="aspect-video object-cover rounded-md"
              />
            </div>
          </div>
          ))}
        </div>
      </section>
    </>
  );
}
