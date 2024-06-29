import Image from "next/image";
import { animated } from "@react-spring/web";
import { SocialMediaBox } from "./components/SocialMediaBox";
import { Github } from "./icons/Github";
import { Linkedin } from "./icons/Linkedin";
import { Twitter } from "./icons/Twitter";
import profilePic from "./images/dzana.jpg";

export default function Home() {
  return (
    <div className="h-lvh flex flex-col items-center justify-evenly p-4 md:p-0">
      <div>
        <button className="bg-gradient-to-l from-[#FF69B4] to-[#FF69B4]/60 hover:from-[#BA55D3] hover:to-[#BA55D3]/60 hover:scale-105 font-bold text-white p-2 rounded-md transition-all duration-300">
          View Projects
        </button>
      </div>
      <div className="flex flex-col items-center gap-6 sm:px-[8%] md:px-[15%] lg:px-[25%]">
        <Image
          src={profilePic}
          width={320}
          height={320}
          className="rounded-full ring-2 hover:ring-4 ring-[#FFB6C1] transition-all duration-400"
          alt="Picture of the author"
        />
        <div className="w-full flex flex-col gap-2 items-center justify-center text-center">
          <p>Hi there 👋</p>
          <p>
            I'm
            <a
              className="text-[#FF69B4] ml-1"
              href="https://github.com/gunnmgirl"
            >
              Džana Karamustafić
            </a>
            , a passionate full-stack developer with a specialization in startup
            environments.
          </p>
          <p>
            I thrive on continuous learning and love diving into cutting-edge
            technologies.
          </p>
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        <SocialMediaBox
          icon={<Linkedin />}
          href="https://www.linkedin.com/in/gunnmgirl/"
        />
        <SocialMediaBox icon={<Github />} href="https://github.com/gunnmgirl" />
        <SocialMediaBox icon={<Twitter />} href="https://x.com/gunnmgirl98" />
      </div>
    </div>
  );
}
