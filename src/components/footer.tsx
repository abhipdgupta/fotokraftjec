import React from "react";
import { Copyright, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <div
      className={`bg-slate-800 text-gray-400 p-4 flex items-center justify-around`}
    >
      <div className="flex gap-4">
        <Copyright /> Jorhat Engineering College, FotoKraft club
      </div>
      <div className="flex flex-col">
        <span> Developed by </span>
        <span>Abhishek Prasad Gupta, CSE &apos 24 JEC</span>
        <span className="flex gap-4 ">
          <Link href="https://github.com/abhipdgupta" target="_blank">
            <GithubIcon />
          </Link>
          <Link href="https://linkedin.com/in/abhishek-prasad-gupta" target="_blank">
            <LinkedinIcon />
          </Link>
        </span>
      </div>
    </div>
  );
}
