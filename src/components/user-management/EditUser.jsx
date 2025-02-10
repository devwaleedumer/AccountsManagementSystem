/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {  Loader, PlusCircle, XIcon, } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEditMutation, useRegisterMutation } from "../../redux/services/authService";
import {  useEffect, useState } from "react";
 // Validation schema using Yup
const schema = yup.object().shape({
    id: yup.number().nullable(),
 fullName: yup
    .string()
    .min(6, "Full Name must be at least 6 characters")
    .required("Full Name is required"),
    phoneNumber: yup
    .string()
    .min(11, "Phone Number must be at least 6 characters")
    .required("Number is required"),
 email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required("Confirm Password is required"),
      role: yup.string().required("Role is required")
          .typeError("Please select a valid Role"), // Ensures a valid number is selected
    
});
export const EditUser = () => {
   const [showAlert, setShowAlert] = useState(true);
  
    const router = useNavigate();
   const [registerUser,{isLoading,isError,isSuccess}] =  useEditMutation()
   useEffect(() => {
    
  
  },
  [isSuccess,isError,isLoading])
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
          <div className=" text-primary-foreground  ml-2 flex items-center"><PlusCircle className="size-5 inline-block mr-2"/><span> Register User</span></div>
        </div>
        {
          showAlert && isSuccess &&  (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 relative" role="alert">
              <p className="font-bold">Success</p>
              <p>Department  created successfully</p>
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
        }          <div className="space-y-4 p-6">
             <div className="w-full">
            <label className="block  mb-1" htmlFor="fullName">
             Full Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2" id="fullName" type="name" placeholder="FullName" {...register("fullName")}/>
            {errors.fullName && <p className="text-red-500 text-xs italic mt-1">{errors.fullName.message}</p>}
            </div>
            <div className="w-full">
            <label className="block  mb-1" htmlFor="name">
             Phone Number
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2" id="phone number" type="name" placeholder="Phone Number" {...register("phoneNumber")}/>
            {errors.phoneNumber && <p className="text-red-500 text-xs italic mt-1">{errors.phoneNumber.message}</p>}
            </div>
          <div className="w-full">
            <label className="block  mb-1" htmlFor="departmentTypeId">
              Role
            </label>
            <select  id="role"
            defaultValue="" 
          {...register("role")}
            className="shadow bg-white   border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
><option value="" >Select Role</option>

                <option value={"Admin"} >Admin</option>
                <option value={"Auditor"} >Auditor</option>
                <option value={"Salary Incharge"} >Salary Incharge</option>
                <option value={"Data Entry Operator"} >Data Entry Operator</option>


            </select>
            {errors.role && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.role.message}
              </p>
            )}
          </div>
             <div className="w-full">
            <label className="block  mb-1" htmlFor="email">
                  E-Mail Address
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2" id="email" type="email" placeholder="Email" {...register("email")}/>
            {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email.message}</p>}
            </div>
            <div className="w-full">
            <label className="block  mb-1" htmlFor="password">
                  Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-primary focus:ring-offset-2 " id="password" type="password" placeholder="Password" {...register("password")}/>
              {errors.password && <p className="text-red-500 text-xs italic mt-1">{errors.password.message}</p>}
            </div>
             <div className="w-full">
            <label className="block  mb-1" htmlFor="confirmPassword">
                 Confirm Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-primary focus:ring-offset-2 " id="confirmPassword" type="password" placeholder="Confirm Password" {...register("confirmPassword")}/>
              {errors.confirmPassword && <p className="text-red-500 text-xs italic mt-1">{errors.confirmPassword.message}</p>}
            </div>
         <div className="justify-items-center">
             <button type="button" onClick={handleSubmit(onSubmit, (errors) => console.log(errors))}  className="bg-primary sm:w-40   my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center">
            {
          !isLoading ? "Register" : <Loader className="size-5 text-center animate-spin"/>}
            
          </button>
         </div>

           </div>
      </div>
    </div>
  )
}
export default EditUser