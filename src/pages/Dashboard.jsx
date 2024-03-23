import Task from "../components/Task";
import { FaFolder } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Dashboard = ({ tasks, setTasks }) => {
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
    <main className="mt-10">
      <h1 className="text-lg text-gray-500">Dashboard</h1>
        <section className="flex items-center gap-8 mb-10 mt-10">
          <button
            onClick={sortByTaskName}
            className="group relative w-[160px] flex items-center gap-2 text-gray-500 ml-4"
          >
            <FaFolder />
            <span className="text-gray-500 px-2 py-1">by task name</span>
            <span className=" absolute group-hover:opacity-90 transition-opacity bg-gray-700 text-white px-4 py-1 rounded opacity-0 mb-20 -left-4">
              Sort By Task Name
            </span>
          </button>

          <button
            onClick={sortByPersonName}
            className=" group relative w-[160px] flex items-center gap-2 text-gray-500 border"
          >
            <span className="absolute group-hover:opacity-90 transition-opacity bg-gray-700 text-white px-4 py-1 rounded opacity-0 mb-20 -left-8 ">
              Sort By Person Name
            </span>
            <FaUser />
            <span className="text-gray-500 px-2 py-1">by person</span>
          </button>
        </section>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
    </main>
  );
};

export default Dashboard;