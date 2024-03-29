import ProjectAuthor from '../features/projects/ProjectAuthor'

const Project = ({ project }) => {
  return (
    <main className={`grid grid-cols-6 mt-1 bg-gray-100 p-5 rounded project ${project.status} divide-`}>
      <section className=" col-span-6 md:col-span-3">
        <div className="text-lg text-slate-400">Project title</div>
        <div>{project.title}</div>
      </section>
      <section className="sm:col-span-3 md:col-span-1">
        <div className="text-lg text-slate-400">Assigned to</div>
        <ProjectAuthor memberId={project.memberId}/>
      </section>
      <section className="sm:col-span-3 md:col-span-1">
        <div className="text-lg text-slate-400">Due by</div>
        <div>{project.due}</div>
      </section>
      <section className="flex items-center justify-center sm:pt-2 md:span-1">
        <div className={`flex items-center justify-center font-semibold rounded-full py-1 w-24 text-white chip ${project.status}`}>
        <span>{project.status}</span>
        </div>
      </section>
    </main>
  );
};

export default Project;
