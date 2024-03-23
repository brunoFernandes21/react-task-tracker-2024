import Task from "../components/Task";

Task
const MyTasks = ( { tasks, setTasks}) => {
  
  const filteredTasks = tasks.filter((task) => {
    return task.person === "Bruno"
})
  return (
    <main className="mt-10">
      <h1 className="text-lg text-gray-500">My Tasks</h1>
      <section className="mt-10">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task}/>
        ))}
      </section>
    </main>
  );
};

export default MyTasks;
