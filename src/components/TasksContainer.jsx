import Task from "./Task";
import { FaFolder } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const TasksContainer = ({ tasks, setTasks }) => {
  const sortByTaskName = () => {
    const sortedTasks = tasks.sort((a, b) => {
      //One way of sorting string in ASC
      return a.title < b.title ? -1 : 1;
    });
    setTasks([...sortedTasks]);
  };

  const sortByPersonName = () => {
    const sortedTasks = tasks.sort((a, b) => {
      if (tasks.length !== 0) {
        //One way of sorting string in ASC
        return a.person.localeCompare(b.person);
      }
    });
    setTasks([...sortedTasks]);
  };

  return (
    <main className="mt-20 relative">
      <section className="flex items-center mb-10 gap-8">

        <button
          onClick={sortByTaskName}
          className="group relative flex items-center gap-2 text-gray-500 ml-4"
        >
          <span
            className="absolute group-hover:opacity-90 transition-opacity bg-gray-700 text-white px-4 py-1 rounded opacity-0 mb-24 "
          >SortByTaskName</span>
          <FaFolder />
          <span className="text-gray-500 px-2 py-1">by task name</span>
        </button>

        <button
          onClick={sortByPersonName}
          className="group relative flex items-center gap-2 text-gray-500 ml-4"
        >
          <span
            className="absolute group-hover:opacity-90 transition-opacity bg-gray-700 text-white px-4 py-1 rounded opacity-0 mb-24 "
          >SortByPersonName</span>
          <FaUser />
          <span className="text-gray-500 px-2 py-1">by task name</span>
        </button>

      </section>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </main>
  );
};

export default TasksContainer;
