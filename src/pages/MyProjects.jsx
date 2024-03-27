import { useState } from "react";
import Project from "../components/Project";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const MyProjects = ({ projects, setProjects }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  //   const filteredProjects = projects.filter((project) => {
  //     return project.person === "Bruno"
  // })
  return (
    <main className="mt-10">
      <h1 className="text-lg text-gray-500">My Projects</h1>
      <section className="mt-10 bg-white shadow-md p-2 rounded-md">
        {/* {filteredProjects.map((project) => (
          <Project key={project.id} project={project}/>
        ))} */}
        <div className="relative mb-3 border border-red-500">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-200 text-slate-700 rounded-t-1 text-dark-500"
          >
            <span>What is Material Tailwind?</span>
            <FaPlus
              className={`absolute right-0 pt-1 text-xs ${
                isExpanded ? "opacity-0" : "opacity-100"
              }`}
            />
            <FaMinus
              className={`absolute right-0 pt-1 text-xs ${
                isExpanded ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
          <div
            className={`h-0  ${
              isExpanded ? "overflow-visible" : "overflow-hidden"
            } transition-all duration-300 ease-in-out`}
          >
            <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              alias, iure sed cupiditate odio rerum dignissimos, esse quod totam
              veritatis consequuntur blanditiis deserunt officia itaque
              repellendus inventore, doloribus mollitia soluta?
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyProjects;
