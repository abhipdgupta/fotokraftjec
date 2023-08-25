import React from "react";

export default function FotokraftIntroVideo() {
  return (
    <div>
      <div className="container flex justify-center items-center h-screen">
        <iframe
          className="w-full h-screen"
          src="https://www.youtube.com/embed/DRQi4P4G9Zk?si=sNgSiXbljI9Vgc3o&amp;controls=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        
        ></iframe>
      </div>
    </div>
  );
}
