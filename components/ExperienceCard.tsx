import { ScriptProps } from "next/script";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  icon: string;
  title: string;
  subtitle: string;
  techStacks: JSX.Element[];
  startedWork: string;
  endedWork: string;
  summaryPoints: string[];
};

const ExperienceCard = (props: Props & ScriptProps) => {
  return (
    <article className="bg-[#292929] p-10 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center hover:opacity-100 opacity-40 transition-opacity cursor-pointer duration-200">
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

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{props.title}</h4>
        <p className="font-bold text-2xl mt-1">{props.subtitle}</p>
        <div className="flex space-x-2 my-2">
          {props.techStacks.map((techStack) => (
            <span key={techStack.key} className="w-10 h-10 rounded-full">
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
