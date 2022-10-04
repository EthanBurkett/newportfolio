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
  const text = "Ethan burkett";

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={beard}
        width={128}
        height={128}
        className="relative rounded-full mx-auto object-cover"
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
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
