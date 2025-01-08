import { ArrowUpRightFromSquareIcon, User } from "lucide-react"
import { Link } from "react-router-dom"

const Salary = () => {
  return (
    <div className="border w-full h-full p-4 rounded-md   font-roboto">
      {/* Head */}
     <div>
        <h1 className="text-3xl font-semibold">Employee Payroll</h1>
     <h4 className="text-gray-700">Generate Monthly Payroll for Employee</h4>
     </div>
     {/* Body */}
     <div className="grid sm:grid-cols-2 gap-4 mt-7">
      <Link to={`permanent-employee-salary`} className="bg-primary px-4 py-5 rounded-sm sm:min-h-20 text-white cursor-pointer">
       {/* Head */}
       <div className="flex justify-between items-center">
         <div className="flex gap-2 items-center ">
          <User className="size-7"/>
        <h1 className="text-2xl"> Permanent Employees</h1>
        </div>
        <ArrowUpRightFromSquareIcon/>
       </div>
        {/* body */}
        <div className="mt-2">
          <h1 className=" font-medium ml-1">Manage Pay roll for Permanent Employees</h1>
        </div>
      </Link>
     <Link to={`adhoc-employee-salary`} className="bg-primary px-4 py-5 rounded-sm sm:min-h-20 text-white cursor-pointer">
       {/* Head */}
       <div className="flex justify-between items-center">
         <div className="flex gap-2 items-center ">
          <User className="size-7"/>
        <h1 className="text-2xl"> Adhoc Employees</h1>
        </div>
        <ArrowUpRightFromSquareIcon/>
       </div>
        {/* body */}
        <div className="mt-2">
          <h1 className=" font-medium ml-1">Manage Pay roll for Adhoc Employees</h1>
        </div>
      </Link>
 <Link to={`contract-employee-salary`} className="bg-primary px-4 py-5 rounded-sm sm:min-h-20 text-white cursor-pointer">
       {/* Head */}
       <div className="flex justify-between items-center">
         <div className="flex gap-2 items-center ">
          <User className="size-7"/>
        <h1 className="text-2xl"> Contract based Employees</h1>
        </div>
        <ArrowUpRightFromSquareIcon/>
       </div>
        {/* body */}
        <div className="mt-2">
          <h1 className=" font-medium ml-1">Manage Pay roll for Contract based Employees</h1>
        </div>
      </Link>
       <Link to={`fixed-employee-salary`} className="bg-primary px-4 py-5 rounded-sm sm:min-h-20 text-white cursor-pointer">
       {/* Head */}
       <div className="flex justify-between items-center">
         <div className="flex gap-2 items-center ">
          <User className="size-7"/>
        <h1 className="text-2xl"> Contract (fixed) Employees</h1>
        </div>
        <ArrowUpRightFromSquareIcon/>
       </div>
        {/* body */}
        <div className="mt-2">
          <h1 className=" font-medium ml-1">Manage Pay roll for (fixed)  Employees</h1>
        </div>
      </Link>
      {/* footer */}
     </div>
    </div>
  )
}

export default Salary