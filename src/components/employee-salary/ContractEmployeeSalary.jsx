import {  Loader, LoaderCircleIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useGenerateContractEmployeesSalaryMutation, useGetAllEmployeesByWithDeductionsAndAllowancesQuery } from "../../redux/services/employeeService";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { useGetAllEmployeeDeductionAndAllowanceQuery } from "../../redux/services/deductionService";
import axios from "axios";
import {saveAs} from 'file-saver'
const ContractEmployeeSalary = () => {
  const { isLoading, data,refetch } = useGetAllEmployeesByWithDeductionsAndAllowancesQuery(3);
      const [showAlert, setShowAlert] = useState(true);
    const [generatePayRole,{isLoading: generatePayRoleLoading, isSuccess: generatePayRoleSuccess, isError: generatePayRoleError}] =  useGenerateContractEmployeesSalaryMutation();
    const handleGenerateEmployeePayRole = async () => {
       await generatePayRole().unwrap(() => {
         refetch()
       });
    }
        const [reportLoading, setReportLoading] = useState(false);
const handleDownload = async () => {
    setReportLoading(true)
    try {
      // Step 1: Fetch the Excel file from the API
      const response = await axios.get('https://localhost:7161/api/reports?employmentType='+3, {
        responseType: 'arraybuffer', // Ensures that the data is returned as a binary stream
      }).finally(() => {
          setReportLoading(false);
      });

      // Step 2: Create a Blob from the response data
      const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      // Step 3: Use FileSaver to save the file
      saveAs(blob, `contract-employee-salary-${new Date().getMonth() + 1}-${new Date().getFullYear()}.xlsx`);
    } catch (error) {
      console.error('Error downloading the Excel file', error);
    }
  };
    useEffect(() => {
      if (generatePayRoleSuccess) {
        refetch()
      }
    },[generatePayRoleSuccess])

      const { isLoading: ADIsLoading,data: ADData} = useGetAllEmployeeDeductionAndAllowanceQuery()
    
  return  isLoading || ADIsLoading  ? (
    <div className="w-full h-full">
      <LoaderCircleIcon className="animate-spin size-20 text-primary mx-auto mt-52" />
    </div>
  ) : (
    <section className="p-3 ">
      <div className="mx-auto w-full px-4 border rounded ">
        <div className="mb-8 mt-4">
          <h1 className="text-3xl font-semibold"> Contract Employee Payroll</h1>
          <h4 className="text-gray-700">
            Generate Monthly Payroll for Contract Employee
          </h4>
           {showAlert && generatePayRoleSuccess && (
          <div
            className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 relative"
            role="alert"
          >
            <p className="font-bold">Success</p>
            <p>Payroll Generated successFully</p>
            <button
              onClick={() => setShowAlert(false)}
              className="w-4 h-4 ml-auto absolute right-4 top-2"
            >
              <XIcon />
            </button>
          </div>
        )}
        {showAlert && generatePayRoleError && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 relative"
            role="alert"
          >
            <p className="font-bold">Error</p>
            <p>Something went wrong</p>
            <button
              onClick={() => setShowAlert(false)}
              className="w-4 h-4 ml-auto absolute right-4 top-2"
            >
              <XIcon/>
            </button>
          </div>
        )}
        </div>
        <div className="text-primary-foreground  bg-white  relative shadow-md sm:rounded-lg overflow-scroll border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 bg-image">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-300">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring focus:ring-offset-2 focus:ring-primary focus:outline-none  block w-half px pl-10 p-2 "
                    placeholder="Search"
                    required=""
                  />
                </div>
              </form>
            </div>
            <div className="w-full font-roboto gap-8  md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                 <div className="text-black">
                <strong>Salary Month:</strong> {format(new Date(),"MMMM, yyyy")}
              </div>
             {
              data.isPayRollGenerated ? 
              //   <button
              //   className="flex items-center justify-center text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              // >
              //  <CheckSquare className="size-3.5 mr-2 font-bold"/>
              //   PayRoll ALready Generated for This Month

              //   </button>
                <button
                 onClick={async() => await handleDownload()}
                 disabled= {reportLoading}
            type="button"
            className="bg-primary my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center"
          >
            Download Report
          </button>
                :
                 <button
                onClick={async() => await handleGenerateEmployeePayRole()}

                className="flex items-center justify-center text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                {
                  !generatePayRoleLoading ?
                  <>
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Generate Payroll
                </>
               : (
              <Loader className="size-5 text-center animate-spin" />
            )
                }
              </button>
             }
            </div>
          </div>
          <div className="relative overflow-auto max-h-[600px]  shadow-md  w-full h-full font-roboto p-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 border border-collapse ">
              <thead className="text-xs  uppercase bg-primary-2 text-primary-foreground">
                <tr>
                  <th scope="col" className="px-6 py-3 border-r">
                    Id
                  </th>

                  <th scope="col" className="px-6 py-3 border-r">
                    Full Name
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    CNIC
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Contact no.
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Scale
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Designation
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Department
                  </th>

                  <th scope="col" className="px-6 py-3 border-r">
                    Employment Type
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Employee Type
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Actions
                  </th>
                  {ADData.map((adData,index) => ( <th key={index} scope="col" className="px-6 py-3 border-r">
                    {adData}
                  </th>))}
                </tr>
              </thead>
               <tbody>
                {data?.employees.map((item, index) => (
                  <tr
                    className="bg-white border-b  hover:bg-gray-50"
                    key={index + item.name}
                  >
                    <td className="px-6 py-4">EMP-{item.id}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.fullName}
                    </th>
                    <td className="px-6 py-4">{item.cnic}</td>
                    <td className="px-6 py-4">{item.scale}</td>
                    <td className="px-6 py-4">{item.designation}</td>
                    <td className="px-6 py-4">{item.department}</td>
                    <td
                      className="flex items-center px-6 py-4 space-x-2"
                      rowSpan={2}
                    >
                      <Link
                        to={`manage-contract-employee-salary/${item.id}`}
                        className="bg-primary   text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center w-20"
                      >
                        Manage
                      </Link>
                    </td>
                    {
                      item.allowances?.map((data,index) => {
                        return data.amount != null ? 
                       <td key={data.amount+index+data.name}  className="px-6 py-4">{data.amount}</td>
                        : 
                       <td  key={data.amount+index+data.name} className="px-6 py-4">-</td>

                      })
                    }

                      {
                      item.deductions?.map((data,index) => {
                        return data.amount != null ? 
                       <td key={data.amount+index+data.name}  className="px-6 py-4">{data.amount}</td>
                        : 
                       <td  key={data.amount+index+data.name} className="px-6 py-4">-</td>

                      })
                    }
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractEmployeeSalary;
