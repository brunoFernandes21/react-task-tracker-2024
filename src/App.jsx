import Header from "./components/Header"
import TaskContainer from "./components/TaskContainer"

const App = () => {
  return (
    <main>
      <Header/>
      <section className="max-w-[1200px] text-slate-800 m-auto">
        <TaskContainer/>
      </section>
    </main>
  )
}

export default App