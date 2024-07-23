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
  const containerVariants = {
    animate: {
      y: isOdd ? ["-100%", "100%"] : ["100%", "-100%"],
      transition: {
        y: {
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="overflow-y-hidden">
      <motion.div
        className="flex flex-col gap-16 items-center"
        variants={containerVariants}
        animate="animate"
      >
        {projects.map((project) => (
          <ProjectBox key={project.href} {...project} />
        ))}
      </motion.div>
    </div>
  );
};
