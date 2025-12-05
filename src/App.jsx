import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Hero from "./components/Hero";
import ModuleGrid from "./components/ModuleGrid";
import ExperiencePanel from "./components/Panel/ExperiencePanel";
import ProjectsPanel from "./components/Panel/ProjectsPanel";
import EducationPanel from "./components/Panel/EducationPanel";
import SkillsPanel from "./components/Panel/SkillsPanel";
import CertsPanel from "./components/Panel/CertsPanel";
import ContactPanel from "./components/Panel/ContactPanel";

function App() {
  const [labMode, setLabMode] = useState(false);
  const [activePanel, setActivePanel] = useState(null);

  const closePanel = () => setActivePanel(null);

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black font-sans">

      {/* Hero (before entering lab) */}
      {!labMode && (
        <Hero onEnterLab={() => setLabMode(true)} />
      )}

      {/* Lab Grid (centered modules) */}
      {labMode && (
        <ModuleGrid setActivePanel={setActivePanel} />
      )}

      {/* Panels */}
      <AnimatePresence>
        {activePanel === "projects" && <ProjectsPanel onClose={closePanel} />}
        {activePanel === "education" && <EducationPanel onClose={closePanel} />}
        {activePanel === "skills" && <SkillsPanel onClose={closePanel} />}
        {activePanel === "certs" && <CertsPanel onClose={closePanel} />}
        {activePanel === "contact" && <ContactPanel onClose={closePanel} />}
        {activePanel === "experience" && <ExperiencePanel onClose={closePanel} />}
      </AnimatePresence>

    </div>
  );
}

export default App;
