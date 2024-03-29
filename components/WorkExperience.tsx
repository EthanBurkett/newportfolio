import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { FaReact, FaDatabase } from "react-icons/fa";
import BlueLight from "../public/bluelight.jpg";
import {
  SiExpress,
  SiFirebase,
  SiLinux,
  SiNextdotjs,
  SiPython,
} from "react-icons/si";

const WorkExperience = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl hidden md:inline-flex">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard
          icon={
            "https://assets-global.website-files.com/603fea6471d9d8559d077603/6092b7514135708162a4be92_Favicon%20256.png"
          }
          title={"Upwork Freelancer"}
          subtitle={"Full Stack Developer"}
          startedWork={"January 2021"}
          endedWork={"Present"}
          techStacks={[
            <FaReact key="react" size={40} />,
            <FaDatabase key="db" size={40} />,
            <SiNextdotjs key="next" size={40} />,
            <SiExpress key="express" size={40} />,
          ]}
          summaryPoints={[
            "Create UX/UI designs for clients",
            "Create full stack applications",
            "Created manageable databases for clients",
          ]}
        />
        <ExperienceCard
          icon={
            "https://cdn.discordapp.com/attachments/1018712906122137600/1026968125373157376/download.jpg"
          }
          title={"BlueLight Studios"}
          subtitle={"Lead Developer"}
          startedWork={"May 2021"}
          endedWork={"June 2022"}
          techStacks={[
            <FaReact key="react" size={40} />,
            <SiFirebase key="firebase" size={40} />,
            <FaDatabase key="db" size={40} />,
            <SiNextdotjs key="next" size={40} />,
            <SiPython key="python" size={40} />,
            <SiExpress key="express" size={40} />,
            <SiLinux key="linux" size={40} />,
          ]}
          summaryPoints={[
            "Managed and created backend applications",
            "Created databases and schemas for applications",
            "Managed a team of 12 developers",
            "Managed backend servers",
          ]}
        />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
