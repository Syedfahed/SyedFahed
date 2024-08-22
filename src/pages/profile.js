import React from "react";
import { NavBar } from "../components/UI";
import Experience from "../components/Expericence";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/contact";
import { Projects } from "../components/Project";
import Footer from "../components/Footer";
import { AboutMe } from "../components/AboutMe";

export default function Profile() {
  return (
    <>
      <NavBar />
      <AboutMe/>
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
