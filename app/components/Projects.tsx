"use client";
import { useChain, useSpring, useSpringRef, animated } from "@react-spring/web";
import { projects } from "../static/projects";
import { ProjectBox } from "./ProjectBox";
import { ProjectBoxProps } from "../types";

export const Projects = ({
  projects,
  isOdd,
}: {
  projects: ProjectBoxProps[];
  isOdd?: boolean;
}) => {
  const scrollRef = useSpringRef();
  const scrollStyles = useSpring({
    ref: scrollRef,
    from: { transform: "translateY(-100%)" },
    to: { transform: false ? "translateY(100%)" : "translateY(-100%)" },
    config: { duration: 5000 },
    loop: true,
  });

  useChain([scrollRef]);

  return (
    <div style={{ overflow: "hidden" }}>
      <animated.div
        className="flex flex-col gap-16"
        style={{ ...scrollStyles, willChange: "transform" }}
      >
        {projects.map((project) => (
          <ProjectBox key={project.href} {...project} />
        ))}
      </animated.div>
    </div>
  );
};
