"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Loading from "@/components/splashScreen";
import { usePathname} from "next/navigation";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);



  return (
    <html lang="en">
      <body className={`${inter.className}  `}>
        {isLoading ? <Loading /> : <> {children} </>}
      </body>
    </html>
  );
}
