import { ArrowLeft, Loader, LoaderCircleIcon, PlusIcon, XIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { useCreateEmployeeAllowanceMutation, useGetAllEmployeeAllowanceQuery } from "../../../redux/services/allowanceService";
import { useParams } from "react-router-dom";
// Validation schema using Yup
const schema = yup.object().shape({
  allowanceId: yup.number().required("Allowance is required")
      .typeError("Please select a valid Allowance"), // Ensures a valid number is selected
});
const CreateEmployeeAllowance = () => {
 const [showAlert, setShowAlert] = useState(true);
  // const router = useNavigate();
  const [CreateEmployeeAllowance, { isLoading, isError, isSuccess }] =
    useCreateEmployeeAllowanceMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
     const { id } = useParams(); // Get the "id" parameter from the route

  const {isLoading:departmentTypeLoading, data} = useGetAllEmployeeAllowanceQuery(id);
  
  const onSubmit = async (data) => {
    await CreateEmployeeAllowance({employeeId:id, allowanceId: data.allowanceId});
     reset({
        allowanceId: ''
    });
  };
  // isSuccess = false
  // isSuccess = true

  useEffect(() => {
    
  
  },
  [isSuccess,isError,isLoading])
  return ( 
    !departmentTypeLoading ?
    <div className="my-5 max-w-xl  bg-white  mx-auto border shadow-lg rounded-lg font-roboto ">
      <div className="bg-image">
        <div className="mb-5 bg-primary-2 shadow-t-lg rounded-t-lg py-3">
          <div className=" text-primary-foreground  ml-2 flex items-center">
            <PlusIcon className="size-5 inline-block mr-2" />
            <span> Add Employee Allowance</span>
          </div>
        </div>
        {
          showAlert && isSuccess &&  (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 relative" role="alert">
              <p className="font-bold">Success</p>
              <p>EmployeeAllowance  created successfully</p>
              <button onClick={() => setShowAlert(false)} className="w-4 h-4 ml-auto absolute right-4 top-2">
                <XIcon />
              </button>
            </div>
          )
        }
        {
         showAlert &&  isError && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 relative" role="alert">
              <p className="font-bold">Error</p>
              <p>Something went wrong</p>
               <button onClick={() => setShowAlert(false)} className="w-4 h-4 ml-auto absolute right-4 top-2">
                <XIcon />
              </button>
            </div>
          )
        }
        <div className="space-y-4 p-6">
        
        
           <div className="w-full">
            <label className="block  mb-1" htmlFor="departmentTypeId">
              Allowance
            </label>
            <select  id="departmentTypeId"
            defaultValue="" 
          {...register("allowanceId")}
            className="shadow bg-white   border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
><option value="" >Select Allowance</option>
            {
                data?.map((item,index) =>(

                <option value={item.id} key={index+item.name}>{item.name}</option>

                ))
            }

            </select>
            {errors.allowanceId && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.allowanceId.message}
              </p>
            )}
          </div>
          <div className="flex justify-between">
            <button className="bg-primary    my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center">
              <ArrowLeft className="mr-1" />
              Back
            </button>
            <button
              type="button"
              onClick={handleSubmit(onSubmit, (errors) => console.log(errors))}
              className="bg-primary    my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center"
            >
              {!isLoading ? (
                "Create"
              ) : (
                <Loader className="size-5 text-center animate-spin" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
    :
      <div className='w-full h-full'>
        <LoaderCircleIcon className='animate-spin size-20 text-primary mx-auto mt-52'/>
    </div>
  );
};

export default CreateEmployeeAllowance;
