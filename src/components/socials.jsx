import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Socials() {
  return (
    <>
      <span className=" m-4 outline outline-2 outline-white rounded-full cursor-pointer   ">
        <Link target="_blank" href={"https://instagram.com"}>
          <InstagramIcon className="w-6 h-6 m-3 hover:scale-125 text-white hover:text-pink-400 transition-all" />
        </Link>
      </span>
      <span className=" m-4 outline  outline-2 outline-white rounded-full cursor-pointer">
        <Link target="_blank" href={"https://youtube.com"}>
          <YoutubeIcon className="w-6 h-6 m-3 hover:scale-125 text-white hover:text-red-500 transition-all" />
        </Link>
      </span>
      <span className=" m-4 outline outline-2 outline-white rounded-full cursor-pointer ">
        <Link target="_blank" href={"https://facebook.com"}>
          <FacebookIcon className="w-6 h-6 m-3 hover:scale-125  text-white hover:text-blue-500 transition-all" />
        </Link>
      </span>
    </>
  );
}
