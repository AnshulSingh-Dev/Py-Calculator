import { FaHamburger } from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import { HiCube, HiGlobe, HiSparkles, HiUser } from "react-icons/hi";
import { TbHemisphere } from "react-icons/tb";

function Sidebar(){
    return(
        <div className="sidebar h-screen w-48 bg-gray-700 flex p-0 shadow-md">
            {/* <div className="control-sb">
                <button className=""><HiCube /></button>
            </div> */}
            <ul className="h-auto p-0 w-48">
                {SidebarData.map((val, key)=>{
                    return(
                        <li key={key} onClick={()=>{
                            window.location.pathname = val.link;
                        }} className="border-2 border-black flex items-center h-16 justify-center">
                            <div className="icon-div">{val.icon}</div>
                            <div className="value-div">{val.title}</div>
                        </li>
                    )
                })} 
            </ul>
        </div>
    )
}
export default Sidebar;