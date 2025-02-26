import PropTypes from "prop-types";
import './Sidebar.css'
import sideBarMenuItems from "../../../core/data/home-sidebar-data";
import { LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../../../core/data/tokenLocalStorageService";
const Sidebar = ({toggleSidebar,setToggleSidebar}) => {
  const router = useNavigate();

const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);}
    const handleLogoutUser = () => {
      removeUser();
      router('/login');
    }
  return (
    <div className={`fixed overflow-hidden h-full top-0 left-0 z-20  py-[6px] px-[14px] font-roboto transition-[width] duration-500 bg-background border shadow-3xl  ${toggleSidebar ?  "w-[78px]" : "w-[250px]" }`} >
       {/* Head */}
        <div className="h-[60px] flex items-center relative bg-white z-[99] ">
            <h1 className={`font-bold text-primary-2 text-2xl transition-opacity duration-500 ${toggleSidebar == false ? "opacity-100" : "opacity-0" }`}>
              AMS
            </h1>
           <img src="/src/assets/images/logo.svg" onClick={() => {
            handleToggleSidebar();
           }} className={`size-[50px] cursor-pointer absolute transition-all duration-500 right-0`} alt="" />
        </div>
        {/* menu */}
      <div className="bg-image h-full w-full overflow-scroll hide-scroller pb-32">
         {sideBarMenuItems.map((item,index) =>  
         <Link to={item.to}  key={index+item.title} className="flex items-center rounded-[12px] 
          my-2  border cursor-pointer bg-primary-2 text-primary-foreground 
          overflow-hidden hover:bg-[green] hover:transition-colors
           hover:duration-100 hover:ease-in-out" 
           >
            <div className=" flex justify-center items-center h-[50px] leading-[50px] min-w-[50px]">
              {<item.icon className="size-5"/>}
            </div>
           <span className={`transition-opacity duration-500 ${toggleSidebar ? "opacity-0": "opacity-100"}`} >{item.title}</span>
          </Link> )}
      </div>
      {/* Footer */}
      <div className="py-[6px] px-[14px] absolute bottom-0 border-t  left-0 w-full bg-primary-2 text-primary-foreground z-[99]">
        <div className=" flex items-center  min-h-[60px] w-full">
            <h1 className={`font-bold text-2xl transition-opacity duration-500 ${toggleSidebar == false ? "opacity-100" : "opacity-0" }`}>
              Logout
            </h1>
           <LogOut  onClick={() => handleLogoutUser()} className={`absolute size-5 cursor-pointer transition-all duration-500 right-7 ${toggleSidebar && "  rotate-180"}`} alt="" />

        </div>
      </div>
    
    </div>
  )
}

export default Sidebar

Sidebar.propTypes = {
  toggleSidebar: PropTypes.bool,
  setToggleSidebar: PropTypes.func
}