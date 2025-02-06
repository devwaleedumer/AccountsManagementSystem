import {  Loader, PlusIcon, XIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { useCreateStudentFeeHandlingMutation } from "../../redux/services/studentFeeHandlingService";
// Validation schema using Yup
const schema = yup.object().shape({
  department: yup.string().required("Deduction  is required"),
  noOfSemester: yup.number().required("Amount  is required").typeError("Amount  is required"),
  totalNoOfStudent: yup.number().required("No of semester  is required").typeError("No of semester  is number"),
  totalFeeCollected: yup.number().required("Total fee collected  is required").typeError("Only Number"),
  feePerSemester: yup.number().required("Fee per semester is required").typeError("Only Number"),
});
const AddFeeRecord = () => {
 const [showAlert, setShowAlert] = useState(true);
  // const router = useNavigate();
  const [CreateAllowance, { isLoading, isError, isSuccess }] =
    useCreateStudentFeeHandlingMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const onSubmit = async (data) => {
    await CreateAllowance(data);
     reset({
      department: '',
      noOfSemester: '',
      totalFeeCollected: '',
      totalNoOfStudent: '',
    });
  };
  // isSuccess = false
  // isSuccess = true

  useEffect(() => {
    
  
  },
  [isSuccess,isError,isLoading])
  return (
    <div className="my-5 max-w-xl  bg-white  mx-auto border shadow-lg rounded-lg font-roboto ">
      <div className="bg-image">
        <div className="mb-5 bg-primary-2 shadow-t-lg rounded-t-lg py-3">
          <div className=" text-primary-foreground  ml-2 flex items-center">
            <PlusIcon className="size-5 inline-block mr-2" />
            <span> Add Fee Record</span>
          </div>
        </div>
        {
          showAlert && isSuccess &&  (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 relative" role="alert">
              <p className="font-bold">Success</p>
              <p>Record Created successfully</p>
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
            <label className="block  mb-1" htmlFor="name">
               Department
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="name"
              type="text"
              placeholder="Department  Name"
              {...register("department")}
            />
            {errors.department && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.department.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="block  mb-1" htmlFor="description">
              No of Semester
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="description"
              type="text"
              placeholder="No of Semester"
              {...register("noOfSemester")}
            />
            {errors.noOfSemester && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.noOfSemester.message}
              </p>
            )}
          </div>
           <div className="w-full">
            <label className="block  mb-1" htmlFor="amount">
              Total Fee Collected
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="amount"
              type="text"
              placeholder="totalFeeCollected"
              {...register("totalFeeCollected")}
            />
            {errors.totalFeeCollected && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.totalFeeCollected.message}
              </p>
            )}
          </div>
           <div className="w-full">
            <label className="block  mb-1" htmlFor="amount">
              Total No of Student 
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="amount"
              type="text"
              placeholder="Total no of students"
              {...register("totalNoOfStudent")}
            />
            {errors.totalFeeCollected && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.totalNoOfStudent.message}
              </p>
            )}
          </div>
                <div className="w-full">
            <label className="block  mb-1" htmlFor="amount">
              Fee Per Semester 
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="amount"
              type="text"
              placeholder="Total no of students"
              {...register("feePerSemester")}
            />
            {errors.feePerSemester && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.feePerSemester.message}
              </p>
            )}
          </div>
          <div className="flex justify-center">
            
            <button
              type="button"
              onClick={handleSubmit(onSubmit, (errors) => console.log(errors))}
              className="bg-primary my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg   px-5 flex justify-items-center" >
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
  );
};

export default AddFeeRecord;
