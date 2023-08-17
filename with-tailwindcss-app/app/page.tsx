import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div className="bg-gray-800">
      {" "}
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
