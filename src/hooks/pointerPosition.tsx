"use client"
import { useState, useEffect } from "react";

// Custom hook to track mouse position
export  function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ mousex: 0, mousey: 0 });

  useEffect(() => {
    function handleMouseMove(event:MouseEvent) {
        // console.log(event);
        
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      setMousePosition({ mousex: mouseX, mousey: mouseY });
      console.log(mousePosition);
      
    } 

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

export function useTouchPosition() {
    const [touchPosition, setTouchPosition] = useState({ touchx: 0, touchy: 0 });
  
    useEffect(() => {
      function handleTouchMove(event:TouchEvent) {
        const touchX = event.touches[0].clientX;
        const touchY = event.touches[0].clientY;
        setTouchPosition({ touchx: touchX, touchy: touchY });
      }
  
      window.addEventListener("touchmove", handleTouchMove);
  
      return () => {
        window.removeEventListener("touchmove", handleTouchMove);
      };
    }, []);
  
    return touchPosition;
  }