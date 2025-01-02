import { Plus } from "lucide-react"

const Salary = () => {
  return (
    <div className="border w-full h-full p-4 rounded-md  bg-image font-roboto">
     <div>
        <h1 className="text-3xl font-semibold">Employee Payroll</h1>
     <h4 className="text-gray-700">Generate Monthly Payroll for Employee</h4>
     </div>
     <div className="mt-4">
        <div className="border rounded-md px-4 py-3 mt-2 shadow  bg-white">
            <div className="flex justify-between mb-5">
            <h1 className="font-medium text-xl">Allowances</h1>
                  <button className=" py-2 rounded-md px-2 bg-primary text-white flex">
                <Plus className="size-5 mr-1"/>
           
              <span>
                  Add Allowance
              </span>

            </button>
            </div>
            <div className="grid gap-3 grid-cols-6">
                  <button className=" py-2 rounded-md px-2 bg-primary text-white">
                Rent Allowance
            </button>
            
             <button className=" py-2 rounded-md px-2 bg-primary text-white">
                Medical Allowance
            </button>
             <button className=" py-2 rounded-md px-2 bg-primary text-white">
                Conveyance Allow.
            </button>
             <button className=" py-2 rounded-md px-2 bg-primary text-white">
                Entertainment Allowance
            </button>
             <button className=" py-2 rounded-md px-2 bg-primary text-white">
                20% Ad-hoc Relief Allow (Freez 2013)
            </button>
             <button className=" py-2 rounded-md px-2 bg-primary text-white">
                25% Disparity Reduction Allowane
            </button>
            
            </div>
        </div>
     </div>
      <div className="mt-4">
        <div className="border rounded-md px-4 py-3 mt-2 shadow  bg-white">
            <div className="flex justify-between mb-5">
            <h1 className="font-medium text-xl">Deductions</h1>
                  <button className=" py-2 rounded-md px-2 bg-primary text-white flex">
                <Plus className="size-5 mr-1"/>
           
              <span>
                  Add Deduction
              </span>

            </button>
            </div>
            <div className="grid gap-3 grid-cols-6">
                  <button className=" py-2 rounded-md px-2 bg-primary text-white">
               Subscription to Ben.Fund
            </button>
            
             <button className=" py-2 rounded-md px-2 bg-primary text-white">
                Medical Allowance
            </button>
             <button className=" py-2 rounded-md px-2 bg-primary text-white">
                Conveyance Allow.
            </button>
             <button className=" py-2 rounded-md px-2 bg-primary text-white">
                Entertainment Allowance
            </button>
             <button className=" py-2 rounded-md px-2 bg-primary text-white">
                20% Ad-hoc Relief Allow (Freez 2013)
            </button>
             <button className=" py-2 rounded-md px-2 bg-primary text-white">
                25% Disparity Reduction Allowane
            </button>
            
            </div>
        </div>
     </div>

     <div className="flex justify-center">
        <button className="bg-primary text-white py-2 px-4 rounded-md mt-4">
            Generate Payroll For Month
        </button>
     </div>
    </div>
  )
}

export default Salary