"use client";
import { ProjectBox } from "./ProjectBox";
import { ProjectBoxProps } from "../types";

export const Projects = ({
  projects,
  isOdd,
}: {
  projects: ProjectBoxProps[];
  isOdd?: boolean;
}) => {
  return (
    <div className="overflow-y-auto">
      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          <ProjectBox key={project.href} {...project} />
        ))}
      </div>
    </div>
  );
};
