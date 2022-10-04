import { motion } from "framer-motion";
import React from "react";
import beard from "../public/images/beardedman.png";
type Props = {};

const About = (props: Props) => {
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
      className="h-screen flex relative flex-col text-center scroll-smooth md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl hidden md:inline-flex">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="-mb-20 hidden md:inline-flex md:mb-0 flex-shring-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        src="https://cdn.discordapp.com/attachments/1018712906122137600/1026965791578525706/logo.jpg"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline  decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          I&lsquo;m Ethan Burkett. I started my coding journey around the age of
          12 and absolutely fell in love with designing websites, I first
          started coding HTML and CSS just messing about with styling and making
          dumb websites, I then fell in love with the JavaScript language. After
          this I would go on to make some dumb clicker games and just learn
          scripting more and more as I went on. A few years later I learned
          about template languages like EJS, and started learning more about
          NodeJS and starting Express servers. I really enjoyed being able to
          pass in scripts into my HTML and soon learned what React was, I
          thought it was dumb, EJS was the best. Then learned it 6 months later,
          absolutely adored it. I now have been coding for 6 years and creating
          React applications for 3. I aspire to work for a company that I can
          grow with and be apart of a team that I can learn from.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
