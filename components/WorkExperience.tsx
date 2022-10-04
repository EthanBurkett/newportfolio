import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { FaReact, FaDatabase } from "react-icons/fa";

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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard
          icon={
            "https://www.seekpng.com/png/detail/122-1229893_10-amazon-gift-card-amazon-logo-square.png"
          }
          title={"Amazon"}
          subtitle={"Software Development Engineer"}
          startedWork={"May 2021"}
          endedWork={"Present"}
          techStacks={[<FaReact size={40} />, <FaDatabase size={40} />]}
          summaryPoints={[
            "Created backend applications",
            "Manages databases",
            "Created frontend applications",
            "Created APIs",
            "Created microservices",
          ]}
        />
        <ExperienceCard
          icon={
            "https://www.seekpng.com/png/detail/122-1229893_10-amazon-gift-card-amazon-logo-square.png"
          }
          title={"Amazon"}
          subtitle={"Software Development Engineer"}
          startedWork={"May 2021"}
          endedWork={"Present"}
          techStacks={[<FaReact size={40} />, <FaDatabase size={40} />]}
          summaryPoints={[
            "Created backend applications",
            "Manages databases",
            "Created frontend applications",
            "Created APIs",
            "Created microservices",
          ]}
        />
        <ExperienceCard
          icon={
            "https://www.seekpng.com/png/detail/122-1229893_10-amazon-gift-card-amazon-logo-square.png"
          }
          title={"Amazon"}
          subtitle={"Software Development Engineer"}
          startedWork={"May 2021"}
          endedWork={"Present"}
          techStacks={[<FaReact size={40} />, <FaDatabase size={40} />]}
          summaryPoints={[
            "Created backend applications",
            "Manages databases",
            "Created frontend applications",
            "Created APIs",
            "Created microservices",
          ]}
        />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
