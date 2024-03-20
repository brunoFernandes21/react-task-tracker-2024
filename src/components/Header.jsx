const Header = () => {
  return (
    <nav className="flex justify-between items-center h-16 sm:px-10 lg:px-40 text-slate-600">
      <h1>Task Tracker</h1>
        <ul className="flex gap-6 items-center">
          <li className=" cursor-pointer hover:text-slate-900 transition-all ease-in-out">All Tasks</li>
          <li className="cursor-pointer hover:text-slate-900 transition-all ease-in-out">New Tasks</li>
        </ul>
    </nav>
  )
}

export default Header