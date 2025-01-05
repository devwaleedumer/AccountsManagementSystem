import { ArrowLeft, CreditCard, IdCardIcon, Info, Loader, Users, XIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { useCreateDesignationMutation } from "../../redux/services/designationService";
// Validation schema using Yup
const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  cNIC: yup
    .string()
    .matches(/^\d+$/, "CNIC must be a number")
    .required("CNIC is required"),
  dOB: yup.date().required("Date of Birth is required"),
  fatherNameOrHusbandName: yup
    .string()
    .required("Father or Husband Name is required"),
  gender: yup.string().required("Gender is required"),
  religion: yup.string().required("Religion is required"),
  bloodGroup: yup.string().required("Blood Group is required"),
  joiningDate: yup.date().required("Joining Date is required"),
  ntn: yup.string().required("NTN is required"),
  employmentTypeEId: yup.number().required("Employment Type ID is required"),
  domicile: yup.string().required("Domicile is required"),
  province: yup.string().required("Province is required"),
  district: yup.string().required("District is required"),
  address: yup.string().required("Address is required"),
  contactNo: yup
    .string()
    .matches(/^\d+$/, "Contact Number must be a number")
    .required("Contact Number is required"),
  basicPayScaleId: yup.number().required("Basic Pay Scale ID is required"),
  departmentId: yup.number().required("Department ID is required"),
  designationId: yup.number().required("Designation ID is required"),
  employeeTypeId: yup.number().required("Employee Type ID is required"),
 bankName: yup.string().required("Bank Name is required"),
  branchName: yup.string().required("Branch Name is required"),
  branchCode: yup.number().required("Branch Code is required"),
  accountNumber: yup.string().required("Account Number is required"),
});
const CreateEmployee = () => {
  const [showAlert, setShowAlert] = useState(true);
  // const router = useNavigate();
  const [CreateDesignation, { isLoading, isError, isSuccess }] =
    useCreateDesignationMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await CreateDesignation(data);
    reset({
      name: "",
      description: "",
    });
  };
  // isSuccess = false
  // isSuccess = true

  useEffect(() => {}, [isSuccess, isError, isLoading]);
  return (
    <div className="my-5 max-w-5xl  bg-white  mx-auto border shadow-lg rounded-lg font-roboto ">
      <div className="bg-image">
        <div className="mb-5 bg-primary-2 shadow-t-lg rounded-t-lg py-3">
          <div className=" text-primary-foreground  ml-2 flex items-center">
            <Users className="size-5 inline-block mr-2" />
            <span> Add Employee</span>
          </div>
        </div>
        {showAlert && isSuccess && (
          <div
            className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 relative"
            role="alert"
          >
            <p className="font-bold">Success</p>
            <p>Employee created successfully</p>
            <button
              onClick={() => setShowAlert(false)}
              className="w-4 h-4 ml-auto absolute right-4 top-2"
            >
              <XIcon />
            </button>
          </div>
        )}
        {showAlert && isError && (
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
              <XIcon />
            </button>
          </div>
        )}
       {/* Personal Info */}
       <div className="p-4 ">
        <div className="flex mb-4 bg-primary-2 shadow-lg rounded-lg py-3 px-2 text-white items-center">
            <IdCardIcon className="size-5 inline-block mr-2" />
            <span className="text-xl">Personal Information</span>
        </div>
         <div className="grid grid-cols-3 gap-4">
          <div className="w-full">
            <label className="block  mb-1" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="fullName"
              type="text"
              placeholder="Designation"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="block  mb-1" htmlFor="fatherNameOrHusbandName">
              Husband or Father Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="fatherNameOrHusbandName"
              type="text"
              placeholder="Father or husband name"
              {...register("fatherNameOrHusbandName")}
            />
            {errors.fatherNameOrHusbandName && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.fatherNameOrHusbandName.message}
              </p>
            )}
          </div>
            <div className="w-full">
            <label className="block  mb-1" htmlFor="CNIC">
              CNIC Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="CNIC"
              type="text"
              placeholder="CNIC Number"
              {...register("cNIC")}
            />
            {errors.cNIC && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.cNIC.message}
              </p>
            )}
          </div>
            <div className="w-full">
            <label className="block  mb-1" htmlFor="CNIC">
              Contact Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="contactNo"
              type="text"
              placeholder="Contact Number"
              {...register("contactNo")}
            />
            {errors.contactNo && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.contactNo.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="block  mb-1" htmlFor="fullName">
              Date of Birth
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="fullName"
              type="date"
              placeholder="Date of Birth"
              {...register("dOB")}
            />
            {errors.dOB && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.dOB.message}
              </p>
            )}
          </div>
          {/* Gender */}
          <div className="w-full">
            <label className="block  mb-1" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              defaultValue=""
              {...register("gender")}
              className="shadow bg-white   border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>
        {/* Religion */}
         <div className="w-full">
            <label className="block  mb-1" htmlFor="religion">
              Religion
            </label>
            <select
              id="religion"
              defaultValue=""
              {...register("religion")}
              className="shadow bg-white   border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <option value="">Select Religion</option>
              <option value="Islam">Islam</option>
              <option value="Christianity">Christianity</option>
              <option value="Hindu">Hindu</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>
            {/* Blood Group */}
            <div className="w-full">
            <label className="block mb-1" htmlFor="bloodGroup">
              Blood Group
            </label>
            <select
              id="bloodGroup"
              {...register("bloodGroup")}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 bg-white  leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            {errors.bloodGroup && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.bloodGroup.message}
              </p>
            )}
          </div>
             <div className="w-full">
            <label className="block  mb-1" htmlFor="joiningDate">
              Joining Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="joiningDate"
              type="date"
              placeholder="Joining Date"
              {...register("joiningDate")}
            />
            {errors.joiningDate && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.joiningDate.message}
              </p>
            )}
          </div>
        </div>
       </div>
       <div className="p-4">
        <div className="flex mb-4 bg-primary-2 shadow-lg rounded-lg py-3 px-2 text-white items-center">
            <CreditCard className="size-5 inline-block mr-2" />
            <span className="text-xl">Address Information</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
             <div className="w-full">
            <label className="block  mb-1" htmlFor="province">
              Province
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="province"
              type="text"
              placeholder="Province"
              {...register("province")}
            />
            {errors.province && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.province.message}
              </p>
            )}
          </div>

           <div className="w-full">
            <label className="block  mb-1" htmlFor="district">
              District
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="district"
              type="text"
              placeholder="District"
              {...register("district")}
            />
            {errors.district && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.district.message}
              </p>
            )}
          </div>

           <div className="w-full">
            <label className="block  mb-1" htmlFor="domicile">
              Domicile
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="domicile"
              type="text"
              placeholder="Domicile"
              {...register("domicile")}
            />
            {errors.domicile && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.domicile.message}
              </p>
            )}
          </div>

               <div className="w-full col-span-3">
            <label className="block  mb-1" htmlFor="address">
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="address"
              type="text"
              placeholder="Address"
              {...register("address")}
            />
            {errors.address && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
        </div>
       </div>
         <div className="p-4">
             <div className="flex mb-4 bg-primary-2 shadow-lg rounded-lg py-3 px-2 text-white items-center">
            <Info className="size-5 inline-block mr-2" />
            <span className="text-xl">Other Information</span>
        </div>
        <div className="">
             <div className="w-full">
            <label className="block  mb-1" htmlFor="ntn">
              NTN
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="ntn"
              type="text"
              placeholder="NTN"
              {...register("ntn")}
            />
            {errors.ntn && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.ntn.message}
              </p>
            )}
          </div>
        </div>
        </div>
        <div className="flex justify-between">
          <button className="bg-primary    my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center">
            <ArrowLeft className="mr-1" />
            Back
          </button>
          <button
            type="button"
            onClick={handleSubmit(onSubmit, (errors) => console.log(errors))}
            className="bg-primary my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center"
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
  );
};

export default CreateEmployee;
