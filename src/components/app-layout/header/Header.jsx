import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { getUser } from "../../../core/data/tokenLocalStorageService";

// Mock user data - In a real app, this would come from your auth/API
const currentUser = {
  name: "Hammad Haider Kiani",
  role: "Head of Accounts Department",
  employeeType: "Permanent",
  email: "Kiani123@gmail.com",
  phone: "0300-1234567",
  department: "Administration",
  joinDate: "Jan 2010",
  imageUrl: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
}

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = getUser();
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
     ( location.pathname != "/ams" && location.pathname != "/ams/")  && <ArrowLeft className="cursor-pointer size-10" onClick={() => onClickBack()}/>
     }
     <h1 className=" font-semibold   text-4xl"> FUUAST AMS</h1>
     </div>         
      <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-white">{user?.userName}</p>
                <p className="text-xs text-primary-foreground">{user?.role}</p>
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