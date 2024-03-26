import { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Team from "./pages/Team"
import MyProjects from "./pages/MyProjects";
import NewProject from "./pages/NewProject";
import { allProjects } from "./components/ProjectsList"
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";

const App = () => {
  const [projects, setProjects] = useState(allProjects);
  return (
    <div>
      <Header />
      <section className="px-5 md:max-w-[1200px] text-slate-800 m-auto">
        <Routes>
          <Route path="/" element={<Dashboard projects={projects} setProjects={setProjects}/>}/>
          <Route path="/new-project" element={<NewProject/>}/>
          <Route path="/my-projects" element={<MyProjects projects={projects} setProjects={setProjects}/>}/>
          <Route path="/projects" element={<Projects projects={projects}/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/landing-page" element={<LandingPage/>}/>
        </Routes>
        
      </section>
    </div>
  );
};

export default App;
