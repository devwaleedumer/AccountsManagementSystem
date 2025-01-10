import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

// Mock user data - In a real app, this would come from your auth/API
const currentUser = {
  name: "John Doe",
  role: "HR Administrator",
  employeeType: "Full Time",
  email: "john.doe@company.com",
  phone: "+1 (555) 123-4567",
  department: "Human Resources",
  joinDate: "Jan 2023",
  imageUrl: "https://picsum.photos/40"
}

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1)
  }
  useEffect(() => {

  },[location])
  return (
    <div className="min-h-[75px] w-full bg-primary-2 pl-8 pt-4">
      <header className=" shadow-sm">
        <div className="  px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between">
   <div className=" flex gap-4 text-primary-foreground items-center">
     {
      location.pathname != "/ams" || location.pathname != "/ams/"  && <ArrowLeft className="cursor-pointer size-10" onClick={() => onClickBack()}/>
     }
     <h1 className=" font-semibold   text-4xl"> FUUAST AMS</h1>
     </div>         
      <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-white">{currentUser.name}</p>
                <p className="text-xs text-primary-foreground">{currentUser.role}</p>
              </div>
              <img
                src={currentUser.imageUrl}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </header>


    </div>
  )
}

export default Header