import { useState } from "react"
import Header from "./header/Header"
import PropTypes from "prop-types";
import Sidebar from "./sidebar/Sidebar"
const Layout = ({children}) => {
  // toggle sidebar
  const [toggleSidebar, setToggleSidebar] = useState(true)
  return (
    <div className="flex flex-col">
        <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
        <div className={`h-full transition-all duration-500   ${toggleSidebar == true ? "ml-[78px]" : "ml-[250px]"} ${toggleSidebar == true ? "w-[calc(100%_-_78px)]" : "w-[calc(100%_-_250px)]"}`}>
        <Header/>
        <div className="min-h-[calc(100vh_-_75px)] bg-image p-4">
            {children}
        </div>
        </div>
    </div>
  )
}
export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}