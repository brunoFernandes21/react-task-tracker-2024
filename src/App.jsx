import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team"
import MyProjects from "./pages/MyProjects";
import NewProject from "./pages/NewProject";
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <div className="mb-20">
      <Header />
      <section className="px-5 md:max-w-[1200px] text-slate-800 m-auto">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/new-project" element={<NewProject/>}/>
          <Route path="/my-projects" element={<MyProjects/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/landing-page" element={<LandingPage/>}/>
        </Routes>
      </section>
    </div>
  );
};

export default App;
