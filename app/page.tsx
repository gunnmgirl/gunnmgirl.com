import { SocialMediaBox } from "./components/SocialMediaBox";
import { Github } from "./icons/Github";
import { Linkedin } from "./icons/Linkedin";
import { Twitter } from "./icons/Twitter";

export default function Home() {
  return (
    <div className="h-lvh flex flex-col justify-evenly p-4 md:p-0">
      <div className="w-full flex flex-col gap-4 items-center justify-center text-center">
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
