import { LoaderCircleIcon, LucideEye } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useGetDepartmentTypeByIdQuery } from '../../redux/services/departmentTypeService';


const ViewDepartmentType = () => {
     const { id } = useParams(); // Get the "id" parameter from the route
    const {isLoading,data} = useGetDepartmentTypeByIdQuery(id); // Fetch the department type by id    
    
  return (
    isLoading ? <div className='w-full h-full'>
        <LoaderCircleIcon className='animate-spin size-20 text-primary mx-auto mt-52'/>
    </div> : 
    <div className="my-5 max-w-xl  bg-white  mx-auto border shadow-lg rounded-lg font-roboto ">
      <div className="bg-image">
        <div className="mb-5 bg-primary-2 shadow-t-lg rounded-t-lg py-3">
          <div className=" text-primary-foreground  ml-2 flex items-center">
            {" "}
            <LucideEye className="size-5 inline-block mr-2 " />
            <span> Department Type Details</span>
          </div>
        </div>{" "}
        <h1 className="text-2xl text-center font-semibold">FUUAST AMS</h1>
        <div className="flex p-4  justify-around">
          <div className="flex space-y-2 flex-col">
            <div className="space-x-3">
              <strong>Id</strong>
              <span>{data.id}</span>
            </div>
            <div className="space-x-3">
              <strong>Name</strong>
              <span>{data.name}</span>
            </div>
            <div className="space-x-3">
              <strong>Description</strong>
              <span>{data.description}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center"> 
             <Link to={'/ams/department-type'}  className="bg-primary w-20  my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center mr-2">Back</Link>
             <button className="bg-primary w-20  my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center">Print</button>
        </div>
      </div>
    </div>
  )
}


export default ViewDepartmentType