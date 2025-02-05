import {  Loader, LoaderCircleIcon, PlusIcon, XIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";
/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useEffect } from "react";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { useEditDesignationMutation, useGetDesignationByIdQuery } from "../../redux/services/designationService";
// Validation schema using Yup
const schema = yup.object().shape({
  id: yup.number().nullable(),
  name: yup.string().required("Name  is required"),
  description: yup.string().required("description  is required"),
});
const EditDesignation = () => {
 const { id } = useParams(); // Get the "id" parameter from the route

 const [showAlert, setShowAlert] = useState(true);
  // const router = useNavigate();
  const [editDepartment, { isLoading, isError, isSuccess }] =
    useEditDesignationMutation();
    const {isLoading:departmentLoading,data} = useGetDesignationByIdQuery(id); // Fetch the department type by id    
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    values :data
  });
  const onSubmit = async (data) => {
    data.id = id; // Add the "id" parameter to the data object
    await editDepartment(data);
  };
  // isSuccess = false
  // isSuccess = true

  useEffect(() => {
    
  
  },
  [isSuccess,isError,isLoading])
  return (
    departmentLoading ?   <div className='w-full h-full'>
        <LoaderCircleIcon className='animate-spin size-20 text-primary mx-auto mt-52'/>
    </div> : <div className="my-5 max-w-xl  bg-white  mx-auto border shadow-lg rounded-lg font-roboto ">
      <div className="bg-image">
        <div className="mb-5 bg-primary-2 shadow-t-lg rounded-t-lg py-3">
          <div className=" text-primary-foreground  ml-2 flex items-center">
            <PlusIcon className="size-5 inline-block mr-2" />
            <span> Edit Designation</span>
          </div>
        </div>
        {
          showAlert && isSuccess &&  (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 relative" role="alert">
              <p className="font-bold">Success</p>
              <p>Designation Edited successfully</p>
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
               Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="name"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="block  mb-1" htmlFor="description">
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="description"
              type="text"
              placeholder="Description"
              {...register("description")}
            />
            {errors.description && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="justify-items-center">
              <button
              type="button"
              onClick={handleSubmit(onSubmit, (errors) => console.log(errors))}
              className="bg-primary    my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center"
            >
              {!isLoading ? (
                "Update"
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

export default EditDesignation;
