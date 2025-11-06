import React from 'react'
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/section/HeroSection.jsx";
import SkillsSection from "./components/section/SkillsSection.jsx";
import ProjectsSection from "./components/section/ProjectsSection.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
        <SkillsSection/>
        <ProjectsSection/>
      </div>
    </ThemeProvider>
  )
}

export default App