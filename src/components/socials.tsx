import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Socials() {
  return (
    <>
      <span className=" m-4 outline outline-2 outline-white rounded-full cursor-pointer   ">
        <Link target="_blank" href={"https://instagram.com/fotokraftjec_official?igshid=MWZjMTM2ODFkZg=="}>
          <InstagramIcon className="w-6 h-6 m-3 hover:scale-125 text-white hover:text-pink-400 transition-all" />
        </Link>
      </span>
      <span className=" m-4 outline  outline-2 outline-white rounded-full cursor-pointer">
        <Link target="_blank" href={"https://www.youtube.com/@fotokraftjec3309/"}>
          <YoutubeIcon className="w-6 h-6 m-3 hover:scale-125 text-white hover:text-red-500 transition-all" />
        </Link>
      </span>
      <span className=" m-4 outline outline-2 outline-white rounded-full cursor-pointer ">
        <Link target="_blank" href={"https://www.facebook.com/Photographyclub.JEC/"}>
          <FacebookIcon className="w-6 h-6 m-3 hover:scale-125  text-white hover:text-blue-500 transition-all" />
        </Link>
      </span>
    </>
  );
}
