import { CreditCardIcon, LoaderCircleIcon, } from "lucide-react";
import { useGetEmployeeByIdQuery } from "../../redux/services/employeeService";
import { useParams } from "react-router-dom";

function ViewEmpDetails() {
   const {id} = useParams()
   const {isLoading: empLoyeeIsLoading, data: employeeData} = useGetEmployeeByIdQuery(id);
  return (
    !empLoyeeIsLoading ?
    <div className="my-5 max-w-5xl  bg-white  mx-auto border shadow-lg rounded-lg font-roboto  ">
      <div className="bg-image">
        <div className="mb-5 bg-primary-2 shadow-t-lg rounded-t-lg py-3 flex justify-center">
          <div className=" text-primary-foreground  ml-2 flex items-center">
            {" "}
            <CreditCardIcon className="size-5 inline-block mr-2 " />
            <span> Employees Detail</span>
          </div>
        </div>{" "}

                
        <div className="flex p-4 justify-around">
            
        <div className="flex space-y-2 flex-col">
          <div className="space-x-3">
            <strong>Employee Id:</strong>
            <span>{employeeData.id}</span>
          </div>
          <div className="space-x-3">
            <strong>Full Name:</strong>
            <span>{employeeData.fullName}</span>
          </div>
          <div className="space-x-3">
            <strong>Designation</strong>
            <span>{employeeData.designation}</span>
          </div>
          <div className="space-x-3">
            <strong>CNIC: </strong>
            <span>{employeeData.cnic}</span>
          </div>
          <div className="space-x-3">
            <strong>Gender: </strong>
            <span>{employeeData.gender}</span>
          </div>
          <div className="space-x-3">
            <strong>Contact No.</strong>
            <span>{employeeData.contactNo}</span>
          </div>
        </div>
        
          <div className="flex space-y-2 flex-col">
            <div className="space-x-3">
              <strong>Department</strong>
              <span>{employeeData.department}</span>
            </div>
            <div className="space-x-3">
              <strong>Employee Type</strong>
              <span>{employeeData.employeeType}</span>
            </div>
            <div className="space-x-3">
              <strong>Employment Type</strong>
              <span>{employeeData.employmentType}</span>
            </div>
          </div>
          <div className="flex space-y-2 flex-col">
          <div className="space-x-3">
            <strong>Scale</strong>
            <span>{employeeData.scale}</span>
          </div>
        </div>
        </div>
        <div className="flex justify-center"> 
             <button className="bg-primary w-20  my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center">Print</button>
        </div>
      </div>
    </div>
    :
     <div className='w-full h-full'>
        <LoaderCircleIcon className='animate-spin size-20 text-primary mx-auto mt-52'/>
    </div>
  );
}

export default ViewEmpDetails;
