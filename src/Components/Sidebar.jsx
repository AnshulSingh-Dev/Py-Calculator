import { FaSearch } from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import { HiMenuAlt3,HiX } from "react-icons/hi";
import { useState } from "react";

function Sidebar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="sidebar-container">
  {/* Navbar Section */}
  <div className="bg-gradient-to-r from-gray-900 via-black to-gray-700 h-20 flex items-center justify-between shadow-md px-6 sm:px-16">
    <button onClick={() => setIsOpen(!isOpen)} className="p-4 shadow-md bg-gray-300 rounded-full hover:bg-gray-700 transition-colors duration-300">
      {isOpen ? <HiX size={24}/> : <HiMenuAlt3 size={24}/>}
    </button>
    
    <h1 className="text-white text-3xl font-bold hover:text-yellow-400 mr-96 transition-colors duration-300">
        WorkInProgress...
    </h1>

    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-64 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
      />
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-yellow-400 hover:text-white hover:scale-110 shadow-md transition-all duration-300">
        <FaSearch />
      </button>
    </div>
  </div>

  {/* Sidebar Section */}
  <div className={`sidebar shadow-2xl h-full text-black w-64 bg-white p-4 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
    <ul className="h-auto mt-3 space-y-2" >
      {SidebarData.map((val, key) => (
        <li
          key={key}
          onClick={() => {
            window.location.pathname = val.link;
          }}
          className="flex items-center h-16 px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300"
        >
          <div className="icon-div flex-shrink-0 mr-4">{val.icon}</div>
          <div className="value-div font-semibold text-lg">{val.title}</div>
        </li>
      ))}
    </ul>
  </div>
</div>

    )
}
export default Sidebar;