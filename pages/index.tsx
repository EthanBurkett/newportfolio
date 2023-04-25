import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 text-white h-screen snap-y snap-always overflow-scroll overflow-x-hidden z-0">
      <Head>
        <title>Ethan Burkett</title>
      </Head>

      <Header />

      <section id="hero" className="snap-center scroll-smooth">
        <Hero />
      </section>

      <section id="about" className="snap-center scroll-smooth">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
