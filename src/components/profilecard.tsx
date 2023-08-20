import React, { useState,useRef } from "react";
import messages from "@/lib/messageByLeads";
import { Flip } from "gsap/all";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Instagram, Linkedin, MessagesSquare } from "lucide-react";
import { gsap } from "gsap";

export function ProfileCard({
  name,
  description,
  imagePath,
  instagram,
  linkedin,

}: {
  name: string;
  description: string;
  imagePath: string;
  instagram: string;
  linkedin: string;

}) {
  const [showMessage, setShowMessage] = useState(false);

  const flipref=useRef(null)
  const handleclick=()=>{
     
    const state=Flip.getState(flipref.current)
   
      // @ts-ignore
    Flip.to(state,{rotateY:-90, ease:"SloMo",duration:.8,})
    

    // setTimeout(() => {
      setShowMessage(!showMessage)
    // }, 1000);
  }
  return (
    <Card ref={flipref} className="w-80 h-[500px] snap-center bg-slate-900 ">
      <CardHeader>
        <CardTitle className="text-white">{name}</CardTitle>
        <CardDescription className="text-slate-400">
          {description}
        </CardDescription>
      </CardHeader>
      {!showMessage ? (
        <CardContent className="rounded-xl overflow-hidden w-72 h-80">
          <img
            className="w-full h-full object-cover"
            src={imagePath}
            alt={name}
          />
        </CardContent>
      ) : (
        <CardContent className="rounded-xl overflow-hidden text-white p-4 w-72 h-80">
          {/* @ts-ignore */}
          {messages[name]}
        </CardContent>
      )}
      <CardFooter className="flex items-center ">
        <Link target="_blank" href={instagram}>
          <Instagram className="w-6 h-6 m-3 hover:scale-125 text-white hover:text-pink-400 transition-all" />
        </Link>
        <Link target="_blank" href={linkedin}>
          <Linkedin className="w-6 h-6 m-3 hover:scale-125 text-white hover:text-blue-500 transition-all" />
        </Link>

        <button
         onClick={()=>handleclick()}
        >
          <MessagesSquare className="w-6 h-6 m-3 hover:scale-125 text-white hover:text-amber-400 transition-all" />
        </button>
      </CardFooter>
    </Card>
  );
}
