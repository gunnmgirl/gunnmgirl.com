"use client";
import Image from "next/image";
import { useState } from "react";
import { SocialMediaBox } from "./components/SocialMediaBox";
import { Projects } from "./components/Projects";
import { projects } from "./static/projects";
import profilePic from "./static/images/dzana.jpg";
import { Github } from "./icons/Github";
import { Linkedin } from "./icons/Linkedin";
import { Twitter } from "./icons/Twitter";

export default function Home() {
  const projectsGridOne = projects.slice(0, 4);
  const projectsGridTwo = projects.slice(4, projects.length);
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(!view);
  };

  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] gap-2 h-lvh overflow-hidden">
      <div>{view && <Projects projects={projectsGridOne} />}</div>
      <div className="h-screen flex flex-col items-center justify-evenly p-4 md:p-0 transition-all duration-7000">
        <div>
          <button
            onClick={handleView}
            className="bg-gradient-to-l from-[#FF69B4] to-[#FF69B4]/60 hover:from-[#BA55D3] hover:to-[#BA55D3]/60 hover:scale-105 font-bold text-white p-2 rounded-md transition-all duration-300"
          >
            {view ? "Hide Projects" : "View Projects"}
          </button>
        </div>
        <div className="flex flex-col items-center gap-6 sm:px-[8%] md:px-[15%] lg:px-[20%]">
          <Image
            src={profilePic}
            width={320}
            height={320}
            className="rounded-full ring-2 hover:ring-4 ring-[#FFB6C1] transition-all duration-400"
            alt="Picture of the author"
          />
          <div className="w-full flex flex-col gap-2 items-center justify-center text-center">
            <p>
              Hi there
              <span className="ml-1 inline-block hover:rotate-[30deg] cursor-pointer transition-transform duration-300">
                👋
              </span>
            </p>
            <p>
              I'm
              <a
                className="text-[#FF69B4] ml-1 transition-colors duration-300 ease-in-out hover:text-[#BA55D3]"
                href="https://github.com/gunnmgirl"
              >
                Džana Karamustafić
              </a>
              , a passionate full-stack developer with a specialization in
              startup environments.
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
          <SocialMediaBox
            icon={<Github />}
            href="https://github.com/gunnmgirl"
          />
          <SocialMediaBox icon={<Twitter />} href="https://x.com/gunnmgirl98" />
        </div>
      </div>
      <div>{view && <Projects projects={projectsGridTwo} isOdd />}</div>
    </div>
  );
}
