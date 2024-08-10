"use client";
import { EventInfo, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
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
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

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

  const handleHoverStart = (event: MouseEvent, info: EventInfo) => {
    controls.stop();
    setTime(Date.now());
  };

  const handleHoverEnd = (event: MouseEvent, info: EventInfo) => {
    controls.start({
      y: isOdd ? ["-100%", "100%"] : ["100%", "-100%"],
      transition: {
        y: {
          repeat: Infinity,
          duration: projects.length * 3,
          ease: "linear",
          repeatType: "loop",
          delay: -(time - startTime) / 1000,
        },
      },
    });
    setStartTime(Date.now());
  };

  return (
    <div className="overflow-y-hidden hidden md:block">
      <motion.div
        className="flex flex-col gap-16 items-center"
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        {projects.map((project) => (
          <div key={project.href}>
            <ProjectBox {...project} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
