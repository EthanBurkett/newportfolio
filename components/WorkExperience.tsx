import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { FaReact, FaDatabase, FaLinux, FaVuejs } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiLinux,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPostgresql,
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
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl hidden md:inline-flex">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard
          icon={"https://www.datto.com/wp-content/uploads/evol-logo.png"}
          title={"Evo Security"}
          href="https://evosecurity.com"
          subtitle={"Systems Engineer"}
          startedWork={"April 2024"}
          endedWork="Present"
          techStacks={[
            <FaReact key="react" size={40} />,
            <FaLinux key="linux" size={40} />,
            <FaVuejs key="vue" size={40} />,
            <SiNextdotjs key="next" size={40} />,
            <SiNuxtdotjs key="nuxt" size={40} />,
            <SiPostgresql key="postgres" size={40} />,
          ]}
          summaryPoints={[
            "Create and maintain web applications built in React and NuxtJS",
            "Create and maintain the infrastructure network and main server",
            "Manage Proxmox environments",
            "Created a web application for proxmox in NextJS that links with EntraID for engineers to quickly create proxmox environments",
          ]}
        />
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
      </div>
    </motion.div>
  );
};

export default WorkExperience;
