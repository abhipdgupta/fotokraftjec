import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Loaderlogic from "@/components/loaderlogic";
import Leniswrapper from "@/components/leniswrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FotoKraft-JEC Photography Club",
  description: `Welcome to the captivating world of the Photography Club at [Your College Name]! Our club is a vibrant community where shutterbugs, from seasoned photographers to enthusiastic beginners, come together to explore, learn, and celebrate the art of capturing moments through the lens.

  Nestled within the picturesque campus of JORHAT ENGINEERING COLLEGE, our Photography Club serves as a hub for creative minds seeking to express themselves through the magic of photography. Whether you're someone who loves to frame the world's beauty, tell stories through visual imagery, or experiment with different techniques, you'll find a welcoming space to nurture your passion.
  
  Throughout the academic year, our club hosts a spectrum of events, workshops, and outings designed to enrich your photography journey. From hands-on tutorials on mastering camera settings to insightful discussions on composition and lighting, we're committed to honing your technical skills and refining your artistic eye. Our experienced members and mentors are always eager to share their expertise, helping you unlock the full potential of your camera.
  
  But it's not just about the technicalities. Our club places a strong emphasis on fostering a sense of camaraderie and inspiration among members. Monthly photo challenges encourage you to think outside the box and push your creative boundaries. Exchanging ideas and feedback in a supportive environment helps each member grow and evolve as an artist.
  
  One of the highlights of the year is our annual photography exhibition, where members have the opportunity to showcase their finest works to the entire college community. This event serves as a testament to the diverse perspectives and talents that make our club a dynamic and influential presence on campus.
  
  Whether you're interested in landscape, portrait, documentary, or experimental photography, the Photography Club at  JORHAT ENGINEERING COLLEGE welcomes you with open arms. Join us in capturing fleeting moments, immortalizing memories, and discovering the beauty that lies in the world around us. Unleash your creativity, connect with fellow photographers, and embark on a visual journey that will leave you with stunning images and lifelong friendships.`,
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
