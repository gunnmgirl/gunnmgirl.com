import { StaticImageData } from "next/image";

export type ProjectBoxProps = {
  projectImage: StaticImageData;
  href: string;
  title: string;
  description: string;
};
