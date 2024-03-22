import { useState } from "react";
import Header from "./components/Header";
import TasksContainer from "./components/TasksContainer";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      person: "Tyler",
      title: "Mobile Navigation",
      due: "5th March",
      status: "complete",
    },
    {
      id: 2,
      person: "Danny",
      title: "Landing Page",
      due: "27th Feb",
      status: "ongoing",
    },
    {
      id: 3,
      person: "Bruno",
      title: "Sign up form",
      due: "25th Jan",
      status: "complete",
    },
    {
      id: 4,
      person: "Raphael",
      title: "User authentication",
      due: "10th Feb",
      status: "overdue",
    },
  ]);
  return (
    <main>
      <Header />
      <section className="px-5 md:max-w-[1200px] text-slate-800 m-auto">
        <TasksContainer tasks={tasks} setTasks={setTasks} />
      </section>
    </main>
  );
};

export default App;
