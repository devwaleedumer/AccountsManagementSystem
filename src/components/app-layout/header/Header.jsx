import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

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
     <div className=" flex gap-4 text-primary-foreground items-center">
     {
      location.pathname != "/ams"  &&   <ArrowLeft className="cursor-pointer size-10" onClick={() => onClickBack()}/>
     }
     <h1 className=" font-semibold   text-4xl"> FUUAST AMS</h1>
     </div>
    </div>
  )
}

export default Header