/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLoginMutation } from "../redux/services/authService";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
 // Validation schema using Yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
});



function ForgotPassword() {
const [login,{isLoading,isError,isSuccess}] =  useLoginMutation()
const router = useNavigate();
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
      await login(data)
    
};
// isSuccess = false
// isSuccess = true
useEffect(() => {
    if(isSuccess){
       router("/login")
    }
},[isSuccess]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center font-roboto px-4 bg-image" >
        <div className="max-w-md w-full px-4 md:px-8 py-8  bg-white rounded-lg shadow-lg border bg-image">
            <div className="flex justify-center items-center">
            <img src="/src/assets/images/logo.svg" className="size-20"  alt="logo" />
            </div>
            <h1 className="text-2xl  font-roboto   text-center my-5">Recover Account</h1>
            <p className="text-red-500 text-xs italic my-2">{isError ? "Invalid credentials" : ""}</p>
           <div className="space-y-4">
             <div className="w-full">
            <label className="block  mb-1" htmlFor="email">
                  Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2" id="email" type="email" placeholder="Email" {...register("email")}/>
            {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email.message}</p>}
            </div>
           
           </div>
            <button type="button" onClick={handleSubmit(onSubmit, (errors) => console.log(errors))}  className="bg-primary w-full my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center">{!isLoading ? "Send Mail" : <Loader className="size-5 text-center animate-spin"/>}</button>
           {/* <button type="button" className="w-full focus:outline-none text-white bg-primary hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 my-4">Login</button> */}
            <Link to={'/login'} className="text-primary">Login</Link>
        </div>
    </div>
  )
}

export default ForgotPassword