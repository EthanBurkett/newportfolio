import { motion } from "framer-motion";
import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiNuxtdotjs,
  SiPostgresql,
  SiMongodb,
  SiFlutter,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoFirebase } from "react-icons/io5";
import { DiCss3 } from "react-icons/di";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Languages
      </h3>

      <div className="grid grid-cols-4 gap-12">
        <Skill
          directionLeft={true}
          name="React"
          icon={<FaReact color={"#61DBFB"} size={80} />}
        />
        <Skill
          directionLeft={true}
          name="Firebase"
          icon={<IoLogoFirebase color={"#F5820D"} size={80} />}
        />
        <Skill
          directionLeft={true}
          name="TypeScript"
          icon={<SiTypescript color="#007acc" size={80} />}
        />
        <Skill
          name="Javascript"
          directionLeft={true}
          icon={<SiJavascript color="#F0DB4F" size={80} />}
        />
        <Skill
          directionLeft={true}
          name="NextJS"
          icon={<SiNextdotjs color="white" size={80} />}
        />
        <Skill
          directionLeft={true}
          name="HTML5"
          icon={<AiFillHtml5 color="#f06529 " size={80} />}
        />
        <Skill
          directionLeft={true}
          name="CSS3"
          icon={<DiCss3 color="#2965f1" size={80} />}
        />
        <Skill
          directionLeft={true}
          name="TailwindCSS"
          icon={<SiTailwindcss color="#01B7D6" size={80} />}
        />
        <Skill
          directionLeft={true}
          name="NuxtJS"
          icon={<SiNuxtdotjs color="#00c58e" size={80} />}
        />
        <Skill
          name="PostgresDB"
          directionLeft={true}
          icon={<SiPostgresql color={"#326790"} size={80} />}
        />
        <Skill
          name="MongoDB"
          directionLeft={true}
          icon={<SiMongodb color={"#11aa50"} size={80} />}
        />
        <Skill
          name="Flutter"
          directionLeft={true}
          icon={<SiFlutter color={"#45d2fd"} size={80} />}
        />
      </div>
    </motion.div>
  );
};

export default Skills;

type SkillProps = {
  icon: JSX.Element;
  directionLeft?: boolean;
  name: string;
};

const skillName = {
  initial: {
    y: 80,
    opacity: 0,
  },
  animate: {
    y: 60,
    opacity: 1,
  },
};

const Skill = ({ icon, directionLeft, name }: SkillProps) => {
  return (
    <motion.div initial="initial" animate="initial" whileHover="animate">
      <motion.div
        initial={{
          y: directionLeft ? 50 : -50,
          opacity: 0,
        }}
        transition={{
          duration: 1,
          delayChildren: 0.5,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="group relative flex cursor-pointer"
      >
        <span className="w-20 h-20 object-cover filter group-hover:scale-[1.05] transition duration-300 ease-in-out">
          {icon}
        </span>
        <div className="absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  h-20 w-20 z-0">
          <div className="flex items-center justify-center h-full">
            <motion.p
              variants={skillName}
              transition={{
                ease: "easeInOut",
              }}
              className="text-3xl font-bold text-white  "
            >
              {name}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
