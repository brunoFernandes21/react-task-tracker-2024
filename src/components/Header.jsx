import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="flex justify-between items-center h-16 px-5 md:px-10 lg:px-40 text-gray-500">
      <h1 className="hover:text-slate-700 transition-all ease-in-out">
        <Link to="/">TaskTracker</Link>
      </h1>
      <ul className="flex gap-6 items-center">
        <li className="font-semibold cursor-pointer hover:text-slate-700 transition-all ease-in-out">
          <Link to="/new-task">New Task</Link>
        </li>
        <li className="font-semibold cursor-pointer hover:text-slate-700 transition-all ease-in-out">
          <Link to="/my-tasks">My Tasks</Link>
        </li>
        <li className="font-semibold cursor-pointer hover:text-slate-700 transition-all ease-in-out">
          <Link to="/tasks">All Tasks</Link>
        </li>
        <li className="font-semibold cursor-pointer hover:text-slate-700 transition-all ease-in-out">
          <Link to="/team">Team</Link>
        </li>
        <li className="font-semibold cursor-pointer hover:text-slate-700 transition-all ease-in-out">
          <Link to="/landing-page" className="flex items-center gap-1">
            <span>Log Out</span>
            <IoLogInOutline className="text-2xl"/>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
