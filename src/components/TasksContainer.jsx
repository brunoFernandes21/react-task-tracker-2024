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
    <main className="mt-20">
      <section className="flex items-center mb-10 gap-8 ml-4">
        <button
          onClick={sortByTaskName}
          data-tooltip-target="tooltip-default" type="button"
          className="flex items-center gap-2 text-gray-500"
        >
          <FaFolder />
          <span>Sort by task name</span>
        </button>
        <div
          id="tooltip-default"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Tooltip content
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          onClick={sortByPersonName}
          className="flex items-center gap-2 text-gray-500"
        >
          <FaUser />
          <span>Sort by person name</span>
        </button>
      </section>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </main>
  );
};

export default TasksContainer;
