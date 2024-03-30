import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";



const Header = () => {
  const [showMenuContent, setShowMenuContent] = useState(false);

  return (
    <nav className=" relative flex justify-between items-center h-16 px-5 md:px-10 lg:px-40 text-gray-500">
      <h1 className="hover:text-slate-700 transition-all ease-in-out">
        <Link to="/">ProjectTracker</Link>
      </h1>

      <div className="flex items-center gap-4">
        <button onClick={() => setShowMenuContent(!showMenuContent)} className="flex items-center gap-2 px-3 py-1 rounded hover:text-slate-700 hover:bg-gray-300 transition-all ease-in-out">
          <IoIosArrowDown className="text-[18px]" />
          <span className="text-[18px]">Menu</span>
        </button>

        <ul>
          <li className="font-semibold cursor-pointer hover:text-slate-700 transition-all ease-in-out">
            <Link to="/landing-page" className="flex items-center gap-1">
              <span className="text-[18px]">Log out</span>
              <IoLogInOutline className="text-[24px]" />
            </Link>
          </li>
        </ul>
      </div>

        {/* menu content  */}
      {showMenuContent && (
        <div className="bg-white absolute z-20 md:right-[112px] lg:right-[232px] top-[50px] rounded">
          <ul className=" flex flex-col gap-4 divide-y-2 py-2">
            <li onClick={() => setShowMenuContent(!showMenuContent)} className="flex items-center gap-2 font-semibold cursor-pointer hover:text-slate-700 transition-all ease-in-out px-4">
            <MdDashboard />
              <Link to="/" className="text-[18px]">Dashboard</Link>
            </li>
            
            <li onClick={() => setShowMenuContent(!showMenuContent)} className="flex items-center pt-4 gap-2 font-semibold cursor-pointer hover:text-slate-700 transition-all ease-in-out px-4">
            <FaFolder />
              <Link to="/my-projects" className="text-[18px]">My Projects</Link>
            </li>
            {/* <li onClick={() => setShowMenuContent(!showMenuContent)} className="font-semibold cursor-pointer hover:text-slate-700 transition-all ease-in-out">
              <Link to="/projects" className="text-[18px]">All Projects</Link>
            </li> */}
            <li onClick={() => setShowMenuContent(!showMenuContent)} className="flex items-center gap-2 pt-4 font-semibold cursor-pointer hover:text-slate-700 transition-all ease-in-out px-4">
            <FaUsers />
              <Link to="/team" className="text-[18px]">Team</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
