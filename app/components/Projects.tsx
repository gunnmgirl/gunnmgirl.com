"use client";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { ProjectBox } from "./ProjectBox";
import { ProjectBoxProps } from "../types";

export const Projects = ({
  projects,
  isOdd,
}: {
  projects: ProjectBoxProps[];
  isOdd?: boolean;
}) => {
  const controls = useAnimation();
  const y = useMotionValue(isOdd ? -100 : 100);

  useEffect(() => {
    controls.start({
      y: isOdd ? ["-100%", "100%"] : ["100%", "-100%"],
      transition: {
        y: {
          repeat: Infinity,
          duration: projects.length * 3,
          ease: "linear",
          repeatType: "loop",
        },
      },
    });
  }, [isOdd, controls]);

  const handleHoverStart = () => {
    controls.stop();
  };

  const handleHoverEnd = () => {
    controls.start({
      y: isOdd ? ["-100%", "100%"] : ["100%", "-100%"],
      transition: {
        y: {
          repeat: Infinity,
          duration: projects.length * 3,
          ease: "linear",
          repeatType: "loop",
          from: y.get(),
        },
      },
    });
  };

  return (
    <div className="overflow-y-hidden hidden md:block">
      <motion.div
        className="flex flex-col gap-16 items-center"
        animate={controls}
      >
        {projects.map((project) => (
          <motion.div
            key={project.href}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          >
            <ProjectBox {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
