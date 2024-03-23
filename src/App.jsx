import { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Team from "./pages/Team"
import MyTasks from "./pages/MyTasks";
import NewTask from "./pages/NewTask";
import { allTasks } from "../src/components/TasksList"
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";

const App = () => {
  const [tasks, setTasks] = useState(allTasks);
  return (
    <div>
      <Header />
      <section className="px-5 md:max-w-[1200px] text-slate-800 m-auto">
        <Routes>
          <Route path="/" element={<Dashboard tasks={tasks} setTasks={setTasks}/>}/>
          <Route path="/new-task" element={<NewTask/>}/>
          <Route path="/my-tasks" element={<MyTasks/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/landing-page" element={<LandingPage/>}/>
        </Routes>
        
      </section>
    </div>
  );
};

export default App;
