/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {  useResetPasswordMutation } from "../redux/services/authService";
import { Loader, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
 // Validation schema using Yup
const schema = yup.object().shape({
  email: yup
    .string()
    .optional("Email is required"),
     password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required("Confirm Password is required"),
    token: yup.string().optional(),
});
function ResetPassword() {
const [login,{isLoading,isError,isSuccess}] =  useResetPasswordMutation()
// eslint-disable-next-line no-undef
const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
const [searchParams] = useSearchParams(); // Get query parameters
  const token = searchParams.get("token");
  const email = searchParams.get("email");


  const onSubmit = async (data) => {
    data.email = email;
    data.token = token;
      reset({
        password:"",
        confirmPassword:"",
      })
      await login(data);
    
};
  const [showAlert, setShowAlert] = useState(true);
  
   useEffect(() => {
    
    
  },
  [isSuccess,isError,isLoading])


  return (
    <div className="w-full min-h-screen flex justify-center items-center font-roboto px-4 bg-image" >
        <div className="max-w-md w-full px-4 md:px-8 py-8  bg-white rounded-lg shadow-lg border bg-image">
            <div className="flex justify-center items-center">
            <img src="/src/assets/images/logo.svg" className="size-20"  alt="logo" />
            </div>
            <h1 className="text-2xl  font-roboto   text-center my-5">Reset Account</h1>

    {
          showAlert && isSuccess &&  (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 relative" role="alert">
              <p className="font-bold">Success</p>
              <p>Password set successfully</p>
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


           <div className="space-y-4">
             <div className="w-full">
            <label className="block  mb-1" htmlFor="email">
                  Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2" id="email" type="email" placeholder="Password" {...register("password")}/>
            {errors.password && <p className="text-red-500 text-xs italic mt-1">{errors.password.message}</p>}
            </div>
            <div className="w-full">
            <label className="block  mb-1" htmlFor="email">
                Confirm  Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2" id="email" type="email" placeholder="Confirm Password" {...register("confirmPassword")}/>
            {errors.confirmPassword && <p className="text-red-500 text-xs italic mt-1">{errors.confirmPassword.message}</p>}
            </div>
           </div>
            <button type="button" onClick={handleSubmit(onSubmit, (errors) => console.log(errors))}  className="bg-primary w-full my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center">{!isLoading ? "Reset" : <Loader className="size-5 text-center animate-spin"/>}</button>
           {/* <button type="button" className="w-full focus:outline-none text-white bg-primary hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 my-4">Login</button> */}
            <Link to={'/login'} className="text-primary">Login</Link>
        </div>
    </div>
  )
}

export default ResetPassword