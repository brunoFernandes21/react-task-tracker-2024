
import { useSelector, useDispatch } from "react-redux";
import { AddProjectForm } from "../features/projects/AddProjectForm";
import Projects from "../features/projects/Projects.jsx";

const Dashboard = () => {
 
  return (
    <main className="mt-10">
      <h1 className="text-lg text-gray-500">Dashboard</h1>
      <AddProjectForm/>
      <Projects/>
    </main>
  );
};

export default Dashboard;
