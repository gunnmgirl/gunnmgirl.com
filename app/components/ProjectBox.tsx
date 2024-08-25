"use client";
import Image from "next/image";
import { ProjectBoxProps } from "../types";

export const ProjectBox = (props: ProjectBoxProps) => {
  const { href, title, description, projectImage } = props;

  const handleViewProject = () => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="m-3 p-3 transition-all duration-400 hover:scale-110">
      <div className="max-w-sm flex flex-col gap-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3">
        <Image
          className="hidden medium:block"
          src={projectImage}
          alt="Picture of the project"
        />
        <h1 className="text-xs font-extrabold md:text-base">{title}</h1>
        <p className="hidden text-sm md:block">{description}</p>
        <button
          onClick={handleViewProject}
          className="mt-2 text-sm w-max bg-gradient-to-l from-[#FF69B4] to-[#FF69B4]/60 hover:scale-105 font-bold text-white p-1 rounded-md transition-all duration-300"
        >
          Go to website
        </button>
      </div>
    </div>
  );
};
