import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";

import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <ScrollTop />
    </>
  );
}