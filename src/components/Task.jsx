const Task = ({ task }) => {
  return (
    <main className={`grid grid-cols-6 mt-1 bg-gray-100 p-5 rounded task ${task.status} divide-`}>
      <section className="col-span-3 ">
        <div className="text-lg text-slate-400">Task title</div>
        <div>{task.title}</div>
      </section>
      <section>
        <div className="text-lg text-slate-400">Person</div>
        <div>{task.person}</div>
      </section>
      <section>
        <div className="text-lg text-slate-400">Due by</div>
        <div>{task.due}</div>
      </section>
      <section className="flex items-center justify-center">
        <div className={`flex items-center justify-center font-semibold rounded-full py-1 w-24 text-white chip ${task.status}`}>
        <span>{task.status}</span>
        </div>
      </section>
    </main>
  );
};

export default Task;
