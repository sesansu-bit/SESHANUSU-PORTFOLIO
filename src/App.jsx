import './App.css'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./navbar.jsx";
import Hero from "./hero.jsx";
import About from "./about.jsx";
import Skill from "./skill.jsx";
import Project from "./project.jsx";
import Contact from "./contact.jsx";
function App() {

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    const element = document.getElementById(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
    <Navbar/>
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skill"><Skill/></div>
      <div id="project"><Project/></div>
      <div id="contact"><Contact/></div>
    </>
  )
}

export default App;
