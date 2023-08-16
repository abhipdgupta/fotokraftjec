"use client";

import { useEffect, useState } from "react";
import Loading from "./splashScreen";

export default function Loaderlogic({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
 
    
    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <Loading /> : <> {children} </>}</>;
}
