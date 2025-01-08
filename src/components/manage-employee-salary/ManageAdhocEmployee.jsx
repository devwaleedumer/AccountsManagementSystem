import { LoaderCircleIcon, Plus, X } from "lucide-react"
import { useDeleteEmployeeAllowanceMutation, useEmployeeAllowanceQuery } from "../../redux/services/allowanceService"
import { Link, useParams } from "react-router-dom";
import { useDeleteEmployeeDeductionMutation, useEmployeeDeductionsQuery } from "../../redux/services/deductionService";
import { useGetEmployeeByIdQuery } from "../../redux/services/employeeService";
import { useEffect, useState } from "react";

const ManageAdhocEmployeeSalary = () => {
  const { id } = useParams(); // Get the "id" parameter from the route
  const {data: deductionsData, isLoading: deductionLoading} = useEmployeeDeductionsQuery(id)
  const {data: allowanceData, isLoading: allowanceLoading} = useEmployeeAllowanceQuery(id)
  const {data: employee, isLoading: employeeLoading} = useGetEmployeeByIdQuery(id)
  const [deleteEmployeeDeduction,] = useDeleteEmployeeDeductionMutation();
  const [deleteEmployeeAllowance,] = useDeleteEmployeeAllowanceMutation();
  const [totalDeductions, setTotalDeductions] = useState(0);
  const [totalAllowances, setTotalAllowances] = useState(0);
  
  useEffect(() => {
    setTotalAllowances(allowanceData?.reduce((acc,current) => acc + current.amount,0))
    setTotalDeductions(deductionsData?.reduce((acc,current) => acc + current.amount,0))
   
  }, [deductionsData,allowanceData])
  

  const handleEmployeeDeductionDeletion = async (deductionId) => {
    await deleteEmployeeDeduction({deductionId: deductionId, employeeId: id});
  }
   const handleEmployeeAllowanceDeletion = async (allowanceId) => {
    await deleteEmployeeAllowance({allowanceId: allowanceId, employeeId: id});
  }
  return (
    !(deductionLoading && allowanceLoading && deductionsData != undefined && allowanceData != undefined && employeeLoading && employee != undefined) 
    ?
    <div className="border w-full h-full p-4 rounded-md  font-roboto">
     <div>
        <h1 className="text-3xl font-semibold">Employee  Payroll</h1>
     <h4 className="text-gray-700">Generate Monthly Payroll for Employee</h4>
     </div>
      <div className="space-y-8 mt-4">
        <div className="border rounded-md px-6 py-5  shadow  bg-white">
          <h1 className="text-lg font-semibold">Employee Details</h1>
          <div className="mt-2 grid grid-cols-4 gap-x-4 gap-y-2">
           <div className="space-x-2">
             <label htmlFor="" className="font-medium">Full Name:</label>
            <span className="text-gray-500">{employee?.fullName}</span>
           </div>
            <div className="space-x-2">
             <label htmlFor="" className="font-medium">CNIC:</label>
            <span className="text-gray-500">{employee?.cnic}</span>
           </div>
            <div className="space-x-2">
             <label htmlFor="" className="font-medium">Gender:</label>
            <span className="text-gray-500">{employee?.gender}</span>
           </div>
           <div className="space-x-2">
             <label htmlFor="" className="font-medium">Department:</label>
            <span className="text-gray-500">{employee?.department}</span>
           </div>
           <div className="space-x-2">
             <label htmlFor="" className="font-medium">Designation:</label>
            <span className="text-gray-500">{employee?.designation}</span>
           </div>
           <div className="space-x-2">
             <label htmlFor="" className="font-medium">Pay Scale:</label>
            <span className="text-gray-500">{employee?.scale}</span>
           </div>
            <div className="space-x-2">
             <label htmlFor="" className="font-medium">Employee Type:</label>
            <span className="text-gray-500">{employee?.employeeType}</span>
           </div>
             <div className="space-x-2">
             <label htmlFor="" className="font-medium">Employment Type:</label>
            <span className="text-gray-500">{employee?.employmentType}</span>
           </div>
           </div>
          </div>
     </div>
     <div className="border rounded-md px-4 py-3 mt-2 shadow  bg-white">
            <div className="flex justify-between mb-5">
            <h1 className="text-lg font-semibold">Allowances</h1>
                  <Link  to={'/ams/salary/add-employee-allowance/'+id} className=" py-2 rounded-md px-2 bg-primary text-white flex" >
                <Plus className="size-5 mr-1"/>
              <span >
                  Add Allowance
              </span>
            </Link>
            </div>
            <div className="grid gap-3 grid-cols-6">
                 {
                  allowanceData?.map((item,index) =>
                   ( <button key={index+item.name}  className="relative py-2 rounded-md px-2 bg-primary text-white">
                {item.name}
                {item.isRepetitive == false && <X onClick={() => {
                  handleEmployeeAllowanceDeletion(item.id)
                }} className="absolute top-1 right-1 size-3"/>}
                    <div>
                   Rs. <strong>{item.amount}/-</strong>
                  </div>
            </button>
            ) )
                 }
   
            </div>
              <div className="flex justify-end mt-4">
              <p className="border-b border-black "> <strong>Total Allowances:</strong> Rs.<span>{totalAllowances}/-</span></p>
              </div>
          </div>
      <div className="border rounded-md px-4 py-3 mt-2 shadow  bg-white">
            <div className="flex justify-between mb-5">
            <h1 className="text-lg font-semibold">Deductions</h1>
                  <Link to={'/ams/salary/add-employee-deduction/'+id} className=" py-2 rounded-md px-2 bg-primary text-white flex">
                <Plus className="size-5 mr-1"/>
              <span>
                  Add Deduction
              </span>

            </Link>
            </div>
            <div className="grid gap-3 grid-cols-6">
            {
                  deductionsData?.map((item,index) =>
                   ( <button key={index+item.name}  className=" py-2 rounded-md px-2 bg-primary text-white relative">{item.name}{item.isRepetitive == false && 
                   <X onClick={() => {
                    handleEmployeeDeductionDeletion(item.id)
                   }} className="absolute top-1 right-1 size-3"/>}
                  <div>
                   Rs. <strong>{item.amount}/-</strong>
                  </div>
            </button>
          ))}
            </div>
             <div className="flex justify-end mt-4">
              <p className="border-b border-black "> <strong>Total Deductions:</strong> Rs.<span>{totalDeductions}/-</span></p>
              </div>
        </div>
      </div>
    :
      <div className='w-full h-full'>
        <LoaderCircleIcon className='animate-spin size-20 text-primary mx-auto mt-52'/>
    </div>
  )
}

export default ManageAdhocEmployeeSalary