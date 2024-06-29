import { ScriptProps } from "next/script";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tw-merge";
import clsx from "clsx";

type Props = {
  icon: string;
  title: string;
  subtitle: string;
  techStacks: JSX.Element[];
  startedWork: string;
  endedWork: string;
  summaryPoints: string[];
  href?: string;
};

const ExperienceCard = (props: Props & ScriptProps) => {
  return (
    <article className="bg-[#292929] p-10 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center opacity-100 md:hover:opacity-100 md:opacity-40 transition-opacity duration-200">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        src={props.icon}
        alt=""
        className="h-32 w-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center"
      />

      <div className="md:px-10 scale-75 md:scale-100">
        <a
          href={props.href}
          target="_blank"
          rel="noreferrer"
          className={twMerge(
            clsx(
              `text-3xl md:text-4xl font-light transition-all w-auto`,
              props.href && "underline hover:text-white/80 cursor-pointer"
            )
          )}
        >
          {props.title}
        </a>
        <p className="font-bold text-2xl mt-1">{props.subtitle}</p>
        <div className="flex space-x-2 my-2">
          {props.techStacks.map((techStack) => (
            <span
              title={techStack.key as string}
              key={techStack.key}
              className="w-10 h-10 rounded-full"
            >
              {techStack}
            </span>
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {props.startedWork} - {props.endedWork}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {props.summaryPoints.map((summaryPoint) => (
            <li key={props.title}>{summaryPoint}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
