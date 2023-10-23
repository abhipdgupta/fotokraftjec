import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Loaderlogic from "@/components/loaderlogic";
import Leniswrapper from "@/components/leniswrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FotoKraft-JEC Photography Club",
  description: `Welcome to the captivating world of the Photography Club at [Your College Name]! Our club is a vibrant community where shutterbugs, from seasoned photographers to enthusiastic beginners, come together to explore, learn, and celebrate the art of capturing moments through the lens.`,
  icons: [{ rel: 'icon', url: '/Fotokraft 1.svg' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-full overflow-x-hidden`}>
        <Loaderlogic>
          <Leniswrapper>{children}</Leniswrapper>
        </Loaderlogic>
      </body>
    </html>
  );
}
