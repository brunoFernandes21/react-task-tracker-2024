import Task from "../components/Task"

const Tasks = ({ tasks }) => {
  return (
    <main className="mt-10">
        <h1 className="text-lg text-gray-500">All Tasks</h1>
        <section className="">
          {tasks.map((task) => (
            <Task key={task.id} task={task}/>
          ))}
        </section>
    </main>
  )
}

export default Tasks