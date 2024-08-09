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
  const [positionY, setPositionY] = useState(0);

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
    setPositionY(info.point.y);
    controls.stop();
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
          from: positionY,
        },
      },
    });
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
