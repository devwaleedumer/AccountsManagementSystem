import { CreditCardIcon, FormInputIcon, LucideScanEye, LucideView, PiIcon, TerminalSquareIcon, View, ViewIcon } from "lucide-react";

function ViewEmpDetails() {
  return (
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
            <strong>Full Name</strong>
            <span>Soban</span>
          </div>
          <div className="space-x-3">
            <strong>Father or Husband Name</strong>
            <span>Soban</span>
          </div>
          <div className="space-x-3">
            <strong>CNIC Number</strong>
            <span>Soban</span>
          </div>
          <div className="space-x-3">
            <strong>Contact Number</strong>
            <span>Soban</span>
          </div>
        </div>
        
          <div className="flex space-y-2 flex-col">
            <div className="space-x-3">
              <strong>Email</strong>
              <span>Soban</span>
            </div>
            <div className="space-x-3">
              <strong>Date of Birth</strong>
              <span>Soban</span>
            </div>
            <div className="space-x-3">
              <strong>Name</strong>
              <span>Soban</span>
            </div>
            <div className="space-x-3">
              <strong>Name</strong>
              <span>Soban</span>
            </div>
            
          </div>
          <div className="flex space-y-2 flex-col">
          
            
          <div className="space-x-3">
            <strong>Full Name</strong>
            <span>Soban</span>
          </div>
          <div className="space-x-3">
            <strong>Father or Husband Name</strong>
            <span>Soban</span>
          </div>
          <div className="space-x-3">
            <strong>CNIC Number</strong>
            <span>Soban</span>
          </div>
          <div className="space-x-3">
            <strong>Contact Number</strong>
            <span>Soban</span>
          </div>
        </div>
        </div>
        <div className="flex justify-center"> 
             <button className="bg-primary w-20  my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center">Print</button>
        </div>
      </div>
    </div>
  );
}

export default ViewEmpDetails;
