import Project from "../components/Project"

const Projects = ({ projects }) => {
  return (
    <main className="mt-10">
        <h1 className="text-lg text-gray-500">All Projects</h1>
        <section className="mt-10">
          {projects.map((project) => (
            <Project key={project.id} project={project}/>
          ))}
        </section>
    </main>
  )
}

export default Projects