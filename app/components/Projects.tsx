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
  const [startTime, setStartTime] = useState(0);
  const [isHoverOver, setIsHoverOver] = useState(false);
  const [endTime, setEndTime] = useState(0);

  useEffect(() => {
    if (!startTime) {
      controls.start({
        y: isOdd ? ["-100%", "100%"] : ["100%", "-100%"],
        transition: {
          y: {
            repeat: Infinity,
            duration: projects.length * 3,
            ease: "linear",
          },
        },
      });
      setStartTime(Date.now());
    }
  }, [isOdd, controls]);

  const handleHoverStart = () => {
    controls.stop();
    setTime(Date.now());
    setIsHoverOver(false);
  };

  const handleHoverEnd = () => {
    // always negative to speed up the animation
    const delay =
      Math.abs(((startTime - time) / 1000) % (projects.length * 3)) * -1;

    controls.start({
      y: isOdd ? ["-100%", "100%"] : ["100%", "-100%"],
      transition: {
        y: {
          repeat: Infinity,
          duration: projects.length * 3,
          ease: "linear",
          delay: delay,
        },
      },
    });
    setEndTime(Date.now());
    setIsHoverOver(true);
  };

  useEffect(() => {
    if (isHoverOver) {
      setStartTime(startTime + (endTime - time));
    }
  }, [isHoverOver]);

  return (
    <div className="overflow-y-hidden hidden md:block">
      <motion.div
        className="flex flex-col gap-16 items-center"
        animate={controls}
      >
        {projects.map((project) => (
          <motion.div
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            key={project.href}
          >
            <ProjectBox {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
