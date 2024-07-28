"use client";
import Image from "next/image";
import { ProjectBoxProps } from "../types";

export const ProjectBox = (props: ProjectBoxProps) => {
  const { href, title, description, projectImage } = props;

  const handleViewProject = () => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="hover:scale-110 transition-all duration-400 max-w-sm p-3 flex flex-col gap-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image src={projectImage} alt="Picture of the project" />
      <h1 className="font-extrabold">{title}</h1>
      <p className="text-sm">{description}</p>
      <button
        onClick={handleViewProject}
        className="mt-2 text-sm w-max bg-gradient-to-l from-[#FF69B4] to-[#FF69B4]/60 hover:scale-105 font-bold text-white p-1 rounded-md transition-all duration-300"
      >
        Go to website
      </button>
    </div>
  );
};
