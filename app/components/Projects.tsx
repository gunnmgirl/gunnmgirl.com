"use client";
import { motion, useAnimation } from "framer-motion";
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
        y: isOdd
          ? ["var(--y-odd-from)", "var(--y-odd-to)"]
          : ["var(--y-from)", "var(--y-to)"],
        x: isOdd
          ? ["var(--x-odd-from)", "var(--x-odd-to)"]
          : ["var(--x-from)", "var(--x-to)"],
        transition: {
          repeat: Infinity,
          duration: projects.length * 3,
          ease: "linear",
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
      y: isOdd
        ? ["var(--y-odd-from)", "var(--y-odd-to)"]
        : ["var(--y-from)", "var(--y-to)"],
      x: isOdd
        ? ["var(--x-odd-from)", "var(--x-odd-to)"]
        : ["var(--x-from)", "var(--x-to)"],
      transition: {
        repeat: Infinity,
        duration: projects.length * 3,
        ease: "linear",
        delay: delay,
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
    <div className="overflow-hidden">
      <motion.div
        className="flex flow-row gap-4 md:flex-col md:gap-16 items-center
        md:[--y-odd-from:-100%] md:[--y-from:100%] md:[--y-odd-to:100%] md:[--y-to:-100%] 
        md:[--x-odd-from:0%] md:[--x-from:0%] md:[--x-odd-to:0%] md:[--x-to:0%]
        [--x-odd-from:-100%] [--x-from:100%] [--x-odd-to:100%] [--x-to:-100%] 
        [--y-odd-from:0%] [--y-from:0%] [--y-odd-to:0%] [--y-to:0%]"
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
