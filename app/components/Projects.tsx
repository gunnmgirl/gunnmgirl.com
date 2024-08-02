"use client";
import { motion } from "framer-motion";
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
    <div className="overflow-y-hidden hidden md:block">
      <motion.div
        className="flex flex-col gap-16 items-center"
        animate={{ y: isOdd ? ["-100%", "100%"] : ["100%", "-100%"] }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 12,
            ease: "linear",
            repeatType: "mirror",
          },
        }}
      >
        {projects.map((project) => (
          <ProjectBox key={project.href} {...project} />
        ))}
      </motion.div>
    </div>
  );
};
