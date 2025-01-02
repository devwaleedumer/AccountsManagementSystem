 import { ArrowLeft, Loader, PlusIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { useCreateDepartmentTypeMutation } from "../../redux/services/departmentTypeService";
 // Validation schema using Yup
const schema = yup.object().shape({
 name: yup
    .string()
    .required("Department Type name  is required"),
     description: yup
    .string()
    .required("description  is required"),
});
const CreateDepartmentType = () => {
      const router = useNavigate();
   const [registerUser,{isLoading,isError,isSuccess}] =  useCreateDepartmentTypeMutation()
   const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm({
       resolver: yupResolver(schema),
     });
   
     const onSubmit = async (data) => {
         await registerUser(data)
       
   };
   // isSuccess = false
   // isSuccess = true
   useEffect(() => {
       if(isSuccess){
          router("/ams/users")
       }
   },[isSuccess]);
  return (
    <div className="my-5 max-w-xl  bg-white  mx-auto border shadow-lg rounded-lg font-roboto ">
      <div className="bg-image">
        <div className="mb-5 bg-primary-2 shadow-t-lg rounded-t-lg py-3">
          <div className=" text-primary-foreground  ml-2 flex items-center"><PlusIcon className="size-5 inline-block mr-2"/><span> Add Department type</span></div>
        </div>
        <p className="text-red-500 text-xs italic my-2">{isError ? "Invalid credentials" : ""}</p>
          <div className="space-y-4 p-6">
             <div className="w-full">
            <label className="block  mb-1" htmlFor="name">
             Department Type Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2" id="name" type='text' placeholder="Department Type Name" {...register("name")}/>
            {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name.message}</p>}
            </div>
             <div className="w-full">
            <label className="block  mb-1" htmlFor="description">
                  Description
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2" id="description" type="text" placeholder="Description" {...register("description")}/>
            {errors.description && <p className="text-red-500 text-xs italic mt-1">{errors.description.message}</p>}
            </div>
         <div className="flex justify-between">
            <button className="bg-primary    my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center">
                <ArrowLeft className="mr-1"/>
                    Back
            </button>
             <button type="button" onClick={handleSubmit(onSubmit, (errors) => console.log(errors))}  className="bg-primary    my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center">
            {
          !isLoading ? "Create" : <Loader className="size-5 text-center animate-spin"/>}
            
          </button>
         </div>

           </div>
      </div>
    </div>
  )
}

export default CreateDepartmentType