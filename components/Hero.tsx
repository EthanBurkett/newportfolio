import React from "react";
import { Cursor, useTypewriter, Typewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import beard from "../public/beardedman.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  // const [text, count] = useTypewriter({
  //   words: ["Hi, my name's Ethan", "Aspiring web developer", "Creator"],
  //   loop: true,
  //   delaySpeed: 2000,
  // });
  const text = "Hi, I'm Ethan Burkett";

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={
          "https://cdn.discordapp.com/attachments/1018712906122137600/1026965791578525706/logo.jpg"
        }
        className="relative rounded-full mx-auto object-cover w-32 h-32"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Fullstack Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
