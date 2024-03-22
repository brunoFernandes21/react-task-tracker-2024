const Header = () => {
  return (
    <nav className="flex justify-between items-center h-16 px-5 md:px-10 lg:px-40 text-gray-500">
      <h1>Task Tracker</h1>
        <ul className="flex gap-6 items-center">
          <li className="font-semibold cursor-pointer hover:text-slate-900 transition-all ease-in-out">All Tasks</li>
          <li className="font-semibold cursor-pointer hover:text-slate-900 transition-all ease-in-out">New Tasks</li>
        </ul>
    </nav>
  )
}

export default Header