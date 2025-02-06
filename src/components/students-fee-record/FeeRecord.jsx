import { LoaderCircleIcon, PenSquareIcon, Printer, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDeleteStudentFeeHandlingMutation, useGetAllStudentFeeHandlingQuery } from '../../redux/services/studentFeeHandlingService';

const StudentFeeHandling = () => {
        const [filteredData, setFilteredData] = useState(null); // To store filtered data
    const {isLoading, data} = useGetAllStudentFeeHandlingQuery()
    const [deleteDepartmentType,] = useDeleteStudentFeeHandlingMutation();
    const handleDelete = async(id) =>{
       await deleteDepartmentType(id)
    }
        useEffect(() => {
            if (data) {
                setFilteredData(data)
            }
        },[data,isLoading])

          // Function to handle the input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    // Filter the data based on the search query (case-insensitive)
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered); // Update filtered data
  };


   const generateReport = () => {
  const printWindow = window.open("", "_blank");
  const head = document.head.innerHTML;
const totalRevenueFromFee   = data?.reduce((total, item) => total + item.totalFeeCollected, 0);
  // Add Tailwind CSS CDN for styling in the new window
  const tailwindCDN = `
    <style>
      @media print {
        body {
          margin: 0;
          padding: 0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
       
        th {
          background-color: #f3f4f6;
          font-weight: bold;
        }
      }
    </style>
  `;

  // Generate the table rows from the data
  const tableRows = data
    ?.map(
      (item) => `
      <tr class="bg-white border-b hover:bg-gray-50">
        <td class="px-6 py-4">${item.id}</td>
        <td class="px-6 py-4">${item.department}</td>
        <td class="px-6 py-4">${item.totalFeeCollected}</td>
        <td class="px-6 py-4">${item.noOfSemester}</td>
        <td class="px-6 py-4">${item.totalNoOfStudent}</td>
        <td class="px-6 py-4">${item.feePerSemester}</td>
      </tr>
    `
    )
    .join("");

  // Write the HTML content to the new window
  printWindow.document.write(`
    <html>
      <head>
        ${head}
      </head>
      <body>
        <h1 class="text-2xl font-bold text-center my-4">Student Fee Report</h1>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 border border-collapse">
          <thead class="text-xs uppercase bg-gray-200 text-gray-700">
             <tr>
                <th scope="col" className="px-6 py-3 border">
                    Id
                </th>
               
                <th scope="col" className="px-6 py-3 border">
                    Department
                </th>
                
               
                <th scope="col" className="px-6 py-3 border">
                    Total fee collected
                </th>
                <th scope="col" className="px-6 py-3 border">
                    Total Semesters
                </th>
                <th scope="col" className="px-6 py-3 border">
                    Total Students
                </th>
                <th scope="col" className="px-6 py-3 border">
                    Fee Per Semester
                </th>
            
            </tr>
          </thead>
          <tbody>
            ${tableRows}
             <tr>
                <th scope="col" className="px-6 py-3 border">
                </th>
               
                <th scope="col" className="px-6 py-3 border">
                </th>
                
               
                <th scope="col" className="px-6 py-3 border">
                </th>
                <th scope="col" className="px-6 py-3 border">
                </th>
                <th scope="col" className="px-6 py-3 border">
                Total revenue from fee
                </th>
                <th scope="col" className="px-6 py-3 border">
                    ${totalRevenueFromFee}
                </th>
            
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
};


  return (
    isLoading ?
    <div className='w-full h-full'>
        <LoaderCircleIcon className='animate-spin size-20 text-primary mx-auto mt-52'/>
    </div>
    :   
     <section className="p-3 ">
     <div className="mx-auto w-full px-4 ">
            <div className="text-primary-foreground  bg-white  relative shadow-md sm:rounded-lg overflow-scroll border">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 bg-image">
                <div className="w-full md:w-1/2">
                    <form className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-300">
                                <svg aria-hidden="true" className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input onChange={handleSearchChange}  type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring focus:ring-offset-2 focus:ring-primary focus:outline-none  block w-half px pl-10 p-2 " placeholder="Search by Name" required=""/>
                        </div>
                    </form>
                </div>
                 <div className="w-full font-roboto  md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button onClick={generateReport} className='flex items-center justify-center text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>
                <Printer className='mr-2 size-4'/>
                    Print
                </button>   
                <Link to={'create'} className="flex items-center justify-center text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        Add Fee Record
                    </Link>
                    
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
                    Department
                </th>
                
               
               
                
                <th scope="col" className="px-6 py-3 border-r">
                    Total Semesters
                </th>

                <th scope="col" className="px-6 py-3 border-r">
                    Total Students
                </th>

                 <th scope="col" className="px-6 py-3 border-r">
                    Fee Per Semester
                </th>
                 <th scope="col" className="px-6 py-3 border-r">
                    Total fee collected
                </th>
                 <th scope="col" className="px-6 py-3 border-r">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
          {
            filteredData?.map((item,index) =>(
                  <tr className="bg-white border-b  hover:bg-gray-50" key={index+item.name}>
                 <td className="px-6 py-4">
                    {item.id}
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                   {item.department}
                </th>
                
                <td className="px-6 py-4">
                    {item.noOfSemester}
                </td>
                <td className="px-6 py-4">
                    {item.totalNoOfStudent}
                </td>
                <td className="px-6 py-4">
                    {item.feePerSemester}
                </td>
                <td className="px-6 py-4">
                    {item.totalFeeCollected}
                </td>
                <td className="flex items-center px-6 py-4 space-x-2">
                   <Link to={`edit/${item.id}`} className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <PenSquareIcon className="size-5"/>
                   </Link>
                     <button onClick={() => handleDelete(item.id)}   className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <Trash2 className="size-5"/>
                   </button>
                     {/* <Link to={`view/${item.id}`} className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <LucideEye className="size-5"/>
                   </Link> */}
                </td>
            </tr>
            ) )
          }
           
        </tbody>
    </table>
</div>
</div>
     </div>
   </section>

  )
}

export default StudentFeeHandling