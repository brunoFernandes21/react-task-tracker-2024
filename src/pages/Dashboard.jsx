import Project from "../components/Project";
import { FaFolder } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { AddProjectForm } from "../features/projects/AddProjectForm";
import { sortByTaskName, sortByMemberName} from "../features/projects/projectsSlice.js"

const Dashboard = () => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch()
  

  const byTaskName = () => {
    if(projects.length !==0) {
      const sortedProjects = [...projects].sort((a, b) => {
        //One way of sorting string in ASC
        return a.title < b.title ? -1 : 1;
      });
       dispatch(sortByTaskName(sortedProjects))
    }
  };

  const byPersonName = () => {
    if (projects.length !== 0) {
      const sortedProjects = [...projects].sort((a, b) => {
        //different way of sorting string in ASC
        return a.person.localeCompare(b.person);
      });
      dispatch(sortByMemberName(sortedProjects))
    }
  };
 
  return (
    <main className="mt-10">
      <h1 className="text-lg text-gray-500">Dashboard</h1>
      <AddProjectForm/>

      <section className="flex items-center gap-8 mb-10 mt-10">
        <button
          onClick={byTaskName}
          className="group relative w-[160px] flex items-center gap-2 text-gray-500 ml-4"
        >
          <FaFolder />
          <span className="text-gray-500 px-2 py-1">by project name</span>
          <span className=" absolute group-hover:opacity-90 transition-opacity bg-gray-700 text-white px-4 py-1 rounded opacity-0 mb-20 -left-4">
            Sort By Task Name
          </span>
        </button>

        <button
          onClick={byPersonName}
          className=" group relative w-[160px] flex items-center gap-2 text-gray-500 border"
        >
          <span className="absolute group-hover:opacity-90 transition-opacity bg-gray-700 text-white px-4 py-1 rounded opacity-0 mb-20 -left-8 ">
            Sort By Person Name
          </span>
          <FaUser />
          <span className="text-gray-500 px-2 py-1">by person</span>
        </button>
      </section>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </main>
  );
};

export default Dashboard;
