import React from "react";
import { Element } from "react-scroll";

import Hero from "../components/hero/Hero";
import Divider from "../components/Divider";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Footer from "../components/footer/footer";
import Skills from "../components/Skills";

const HomePage = () => {
  return (
    <div>
      <Element name="hero">
        <Hero />
      </Element>
      <Divider />

      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>

      <Footer />
    </div>
  );
};

export default HomePage;
