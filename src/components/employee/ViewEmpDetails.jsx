import {  LoaderCircleIcon, Printer, } from "lucide-react";
import { useGetEmployeeByIdQuery } from "../../redux/services/employeeService";
import { useParams } from "react-router-dom";
import {  useRef } from "react";
// import React, { useRef } from "react";

function ViewEmpDetails() {
    const ref = useRef();
    const {id} = useParams()
    // const [hidden, setHidden] = useState(true)
    const {isLoading: empLoyeeIsLoading, data: employee} = useGetEmployeeByIdQuery(id);
    // const { toPDF, targetRef } = usePDF({ filename: `${employee?.fullName}-${employee?.id}` });
    const generateReport = () => {
     const printWindow = window.open("", "_blank");
     const head = document.head;
      printWindow.document.write(`
        <html>
       ${head.innerHTML}
          <body>
            ${ref.current.innerHTML}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();

    }
  return (
    !empLoyeeIsLoading ?
    <div className="my-5 max-w-5xl  bg-white  mx-auto  font-roboto  relative">
      <div className="bg-image" ref={ref}>
       <Printer className="absolute right-2 top-2 cursor-pointer" onClick={generateReport}/>
         <div className="print-container  shadow-lg rounded-lg p-8 mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-8">Employee Details </h1>

      <div className="grid grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className=" p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Employee ID:</span> {employee.id}
            </p>
            <p>
              <span className="font-medium">Full Name:</span> {employee.fullName}
            </p>
            <p>
              <span className="font-medium">CNIC:</span> {employee.cnic}
            </p>
            <p>
              <span className="font-medium">Gender:</span> {employee.gender}
            </p>
            <p>
              <span className="font-medium">Contact No.:</span> {employee.contactNo}
            </p>
          </div>
        </div>

        {/* Employment Information */}
        <div className=" p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Employment Information</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Designation:</span> {employee.designation}
            </p>
            <p>
              <span className="font-medium">Department:</span> {employee.department}
            </p>
            <p>
              <span className="font-medium">Employee Type:</span> {employee.employeeType}
            </p>
            <p>
              <span className="font-medium">Employment Type:</span> {employee.employmentType}
            </p>
            <p>
              <span className="font-medium">Scale:</span> {employee.scale}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          This is an official report generated on behalf of the organization.
        </p>
      </div>
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
