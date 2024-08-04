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
  // pause animation on child element hover
  const motionProps = {
    y: isOdd ? ["-100%", "100%"] : ["100%", "-100%"],
    transition: {
      y: {
        repeat: Infinity,
        duration: 12,
        ease: "linear",
        repeatType: "mirror",
      },
    },
  };

  return (
    <div className="overflow-y-hidden hidden md:block">
      <motion.div
        className="flex flex-col gap-16 items-center"
        animate={motionProps}
      >
        {projects.map((project) => (
          <motion.div
            key={project.href}
            whileHover={{ y: 0 }}
            animate={motionProps}
          >
            <ProjectBox key={project.href} {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
