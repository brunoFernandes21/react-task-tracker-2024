import { useSelector } from "react-redux";
import Project from "../../components/Project";

const Projects = () => {
  const projects = useSelector((state) => state.projects);

  const renderedProjects = projects.map((project) => (
    <section key={project.id} className="mt-10">
      <Project project={project} />
    </section>
  ));
  return (
    <main className="mt-10">
      <h1 className="text-lg text-gray-500">All Projects</h1>
      { renderedProjects }
    </main>
  );
};

export default Projects;
