import Project from "../components/Project";

const MyProjects = ( { projects, setProjects}) => {
  
  const filteredProjects = projects.filter((project) => {
    return project.person === "Bruno"
})
  return (
    <main className="mt-10">
      <h1 className="text-lg text-gray-500">My Projects</h1>
      <section className="mt-10">
        {filteredProjects.map((project) => (
          <Project key={project.id} project={project}/>
        ))}
      </section>
    </main>
  );
};

export default MyProjects;
