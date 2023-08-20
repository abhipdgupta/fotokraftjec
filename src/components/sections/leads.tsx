import React from "react";
import { ProfileCard } from "../profilecard";

export default function Leads() {
    return (
    <section
      id="leads"
      className="relative h-screen flex items-center py-16 gap-4 lg:min-w-min md:w-2/3 w-5/6 overflow-hidden mx-auto
     
     "
    >
      <span className="text-white text-4xl font-bold absolute top-[13%]  ">
        Leads 2023-24
      </span>
      <div className="flex items-center gap-4 overflow-auto snap-x snap-proximity overscroll-x-contain p-2 no-scrollbar">
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
          name="Nikhil Gautam"
          description="Head Co-ordinator"
          imagePath="/leads/nikhil1.jpg"
          instagram=""
          linkedin=""
        />
        <ProfileCard
          name="Dibyashree Chakraborty"
          description="Head Co-ordinator"
          imagePath=""
          instagram=""
          linkedin=""
        />
      </div>
    </section>
  );
}
