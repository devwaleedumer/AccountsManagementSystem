import {  CreditCardIcon, IdCardIcon, Info, Loader, LoaderCircleIcon, LocateFixedIcon, Users, XIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useEffect } from "react";
import { useEffect, useState } from "react";
import {  useGetAllDesignationQuery } from "../../redux/services/designationService";
import { useGetAllDepartmentsQuery } from "../../redux/services/departmentService";
import { useGetAllBasePaysQuery } from "../../redux/services/basicPaysService";
import { useGetAllEmployeeTypeQuery } from "../../redux/services/employeeTypeService";
import { useEditEmployeeMutation, useGetEmployeeByIdAllDetailsQuery } from "../../redux/services/employeeService";
import { useParams } from "react-router-dom";
// Validation schema using Yup
const schema = yup.object().shape({
  id: yup.number().nullable(),
  fullName: yup.string().required("Full Name is required").matches(
        /^[A-Za-z\s]+$/,
        "Must contain only letters "
      ),
  cNIC: yup
    .string()
    .matches(/^\d+$/, "CNIC must be a number")
    .required("CNIC is required")
    .min(13, "13 digits required"),
  dOB: yup.date().required("Date of Birth is required").typeError("Invalid date formate"),
  contractFrom: yup.date().nullable(),
  contractTo: yup.date().nullable,
  fatherNameOrHusbandName: yup
    .string()
    .required("Father or Husband Name is required"),
  email: yup.string().email("invalid email").required("email is required"),
  gender: yup.string().required("Gender is required"),
  religion: yup.string().required("Religion is required"),
  bloodGroup: yup.string().required("Blood Group is required"),
  joiningDate: yup.date().required("Joining Date is required").typeError("Invalid date formate"),
  qualification: yup.string().required("Qualification is required"),
  employmentTypeEId: yup.number().required("Employment Type ID is required").typeError("Employment type is required"),
  domicile: yup.string().required("Domicile is required").matches(
        /^[A-Za-z\s]+$/,
        "Must contain only letters "
      )

,
  province: yup.string().required("Province is required").matches(
        /^[A-Za-z\s]+$/,
        "Must contain only letters "
      ),
  district: yup.string().required("District is required").matches(
        /^[A-Za-z\s]+$/,
        "Must contain only letters "
      ),
  address: yup.string().required("Address is required"),
  contactNo: yup
    .string()
    .matches(/^\d+$/, "Contact Number must be a number")
    .required("Contact Number is required")
        .min(11, "11 digits required"),
  basicPayScaleId: yup.number().required("Basic Pay Scale  is required").typeError("Basic pay is required"),
  departmentId: yup.number().required("Department  is required").typeError("Department is required"),
  designationId: yup.number().required("Designation  is required").typeError("Designation is required"),
  employeeTypeId: yup.number().required("Employee Type  is required").typeError("Employee type is required"),
  bankName: yup.string().required("Bank Name is required"),
  branchName: yup.string().required("Branch Name is required").matches(
        /^[A-Za-z\s]+$/,
        "Must contain only letters "
      ),
  branchCode: yup.number().required("Branch Code is required"),
  accountNumber: yup.string().required("Account Number is required"),
  branchAddress: yup.string().required("Branch Address is required"),
});
const EditEmployee = () => {
  const {id} = useParams()
  const [showAlert, setShowAlert] = useState(true);
  // const router = useNavigate();
  const [CreateEmployee, { isLoading, isError, isSuccess }] =
    useEditEmployeeMutation();
  const {isLoading: empLoyeeIsLoading, data: employeeData} = useGetEmployeeByIdAllDetailsQuery(id);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    values: employeeData
  });

  // 
  const { data : designationData, isLoading: designationIsLoading } = useGetAllDesignationQuery();
  const { data : departmentData, isLoading: departmentIsLoading } = useGetAllDepartmentsQuery();
  const { data : payScaleData, isLoading: payScaleIsLoading } = useGetAllBasePaysQuery()
  const { data : employeeTypeData, isLoading: employeeTypeIsLoading } = useGetAllEmployeeTypeQuery()
  const employmentType =  watch("employmentTypeEId","")

  const onSubmit = async (data) => {
    data.joiningDate = data.joiningDate.toISOString().split('T')[0];
    data.contractFrom = data.contractFrom !== "" ?  data.contractFrom.toISOString().split('T')[0] : null;
    data.contractTo = data.contractTo !== "" ?  data.contractTo.toISOString().split('T')[0] : null;
    data.dOB = data.dOB.toISOString().split('T')[0];
    await CreateEmployee(data);
  };
  // isSuccess = false
  // isSuccess = true

  useEffect(() => {}, [isSuccess, isError, isLoading]);
  return (
    !(designationIsLoading && departmentIsLoading && payScaleIsLoading && employeeTypeIsLoading && empLoyeeIsLoading) 
    ?
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
              placeholder="Full Name"
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
              Father or Husband Name
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
            <label className="block  mb-1" htmlFor="Contact Number">
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
            <label className="block  mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="email"
              type="text"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="block  mb-1" htmlFor="Date of Birth">
              Date of Birth
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="DOB"
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
            {errors.religion && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.religion.message}
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
            
        </div>
       </div>
       <div className="p-4">
       
       
       
        <div className="flex mb-4 bg-primary-2 shadow-lg rounded-lg py-3 px-2 text-white items-center">
            <LocateFixedIcon className="size-5 inline-block mr-2" />
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
            <label className="block  mb-1" htmlFor="PermanentAddress">
              Permanent Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="postaladdress"
              type="text"
              placeholder="PermanentAddress"
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
            <span className="text-xl">Employment Details</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
              <div className="w-full">
            <label className="block  mb-1" htmlFor="designation">
              Designation
            </label>
            <select
              id="designation"
              defaultValue=""
              {...register("designationId")}
              className="shadow bg-white   border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <option value="">Select Designation</option>
              {
                designationData?.map(( data, index) =>(
                  <option key={index+data.name} value={data.id}>{data.name}</option>
                ) )
              }
            </select>
            {errors.designationId && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.designationId.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="block  mb-1" htmlFor="Scale">
              Scale
            </label>
            <select
              id="Scale"
              defaultValue=""
              {...register("basicPayScaleId")}
              className="shadow bg-white   border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
                     <option value="">Select PayScale</option>

        {
               payScaleData?.map(( data, index) =>(
                  <option key={index+data.payScaleName} value={data.id}>{data.payScaleName}</option>
                ) )
              }                         
            </select>
            {errors.basicPayScaleId && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.basicPayScaleId.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="block  mb-1" htmlFor="employeeTypeId">
              Employee Type 
            </label>
            <select
              id="employeeTypeId"
              defaultValue=""
              {...register("employeeTypeId")}
              className="shadow bg-white   border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <option value="">Select Employment Type </option>
             {
                employeeTypeData?.map(( data, index) =>(
                  <option key={index+data.name} value={data.id}>{data.name}</option>
                ) )
              }
            </select>
            {errors.employeeTypeId && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.employeeTypeId.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="block  mb-1" htmlFor="employmentTypeEId">
              Employment Type
            </label>
            <select
              id="employmentTypeEId"
              defaultValue=""
              {...register("employmentTypeEId")}
              className="shadow bg-white   border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <option  defaultValue={''}>Select Employment Type</option>
              <option value={1}>Permanent</option>
              <option value={2}>Adhoc</option>
              <option value={3}>Contract</option>
              <option value={4}>Fixed</option>
            </select>
            {errors.employmentTypeEId && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.employmentTypeEId.message}
              </p>
            )}
          </div>
            <div className="w-full">
            <label className="block  mb-1" htmlFor="departmentId">
              Department
            </label>
            <select
              id="departmentId"
              defaultValue=""
              {...register("departmentId")}
              className="shadow bg-white   border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <option value="">Select Department</option>{
                departmentData?.map(( data, index) =>(
                  <option key={index+data.name} value={data.id}>{data.name}</option>
                ) )
              }
             
            </select>
            {errors.departmentId && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.departmentId.message}
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
           <div className={`w-full ${(employmentType == 1) && "col-span-3"}`}>
            <label className="block  mb-1" htmlFor="Qualification">
            Qualification
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="qualification"
              type="text"
              placeholder="Qualification"
              {...register("qualification")}
            />
            {errors.qualification && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.qualification.message}
              </p>
            )}
          </div>
         {
          (employmentType != 1) && 
          <>
           <div className="w-full">
            <label className="block  mb-1" htmlFor="Date of Birth">
              Contract From
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="DOB"
              type="date"
              placeholder="Contract from date"
              {...register("contractFrom")}
            />
            {errors.contractFrom && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.contractFrom.message}
              </p>
            )}
          </div>
           <div className="w-full">
            <label className="block  mb-1" htmlFor="Date of Birth">
              Contract To
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="DOB"
              type="date"
              placeholder="Contract upto Date"
              {...register("contractTo")}
            />
            {errors.contractTo && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.contractTo.message}
              </p>
            )}
          </div>
          </>
         }
          
        </div>
        </div>
       




       
        <div className="p-4">
        <div className="flex mb-4 bg-primary-2 shadow-lg rounded-lg py-3 px-2 text-white items-center">
            <CreditCardIcon className="size-5 inline-block mr-2" />
            <span className="text-xl">Employee Bank Details</span>
        </div>
       <div className="grid grid-cols-3 gap-4">
       <div className="w-full">
            <label className="block  mb-1" htmlFor="branchName">
              Branch Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="branchName"
              type="text"
              placeholder="Branch Name"
              {...register("branchName")}
            />
            {errors.branchName && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.branchName.message}
              </p>
            )}
          </div>
           {/* Bank Name */}
          <div className="w-full">
            <label className="block  mb-1" htmlFor="bankName">
              Bank Name
            </label>
            <select
              id="bankName"
              defaultValue=""
              {...register("bankName")}
              className="shadow bg-white   border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
               <option value="" disabled selected>Select a Bank</option>
  <option value="UBL">United Bank Limited (UBL)</option>
  <option value="HBL">Habib Bank Limited (HBL)</option>
  <option value="MCB">Muslim Commercial Bank (MCB)</option>
  <option value="NBP">National Bank of Pakistan (NBP)</option>
  <option value="Faysal">Faysal Bank</option>
  <option value="BankAlfalah">Bank Alfalah</option>
  <option value="BankOfPunjab">Bank of Punjab</option>
  <option value="StandardChartered">Standard Chartered Bank</option>
  <option value="AlliedBank">Allied Bank Limited</option>
  <option value="BankIslamic">Bank Islami Pakistan Limited</option>
  <option value="BankOfKhyber">Bank of Khyber</option>
  <option value="FirstWomenBank">First Women Bank Limited</option>
  <option value="UBLOM">United Bank Limited (OMAN)</option>
  <option value="SBP">State Bank of Pakistan (SBP)</option>
  <option value="Citibank">Citibank Pakistan</option>
  <option value="PakBruneiInvestment">Pak Brunei Investment Company</option>
  <option value="AlBarakaBank">Al Baraka Bank</option>
  <option value="DubaiIslamicBank">Dubai Islamic Bank Pakistan</option>
  <option value="PakOmanInvestment">Pak Oman Investment Company</option>
  <option value="TheBankofKhyber">The Bank of Khyber</option>

            </select>
            {errors.bankName && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.bankName.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="block  mb-1" htmlFor="branchAddress">
              Branch Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="branchAddress"
              type="text"
              placeholder="Branch Address"
              {...register("branchAddress")}
            />
            {errors.branchAddress && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.branchAddress.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="block  mb-1" htmlFor="branchcode">
              Branch Code
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="branchcode"
              type="text"
              placeholder="Branch Code"
              {...register("branchCode")}
            />
            {errors.branchCode && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.branchCode.message}
              </p>
            )}
          </div>
          <div className="w-fu">
            <label className="block  mb-1" htmlFor="accountNo">
              Account Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:ring-2 focus:ring-primary focus:ring-offset-2"
              id="accountNo"
              type="text"
              placeholder="Account Number"
              {...register("accountNumber")}
            />
            {errors.accountNumber && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.accountNumber.message}
              </p>
            )}
          </div>
       </div>
        </div>
      
      
      
      
      
      
      
      
      
        <div className="flex justify-center">
          
          <button
            type="button"
            onClick={handleSubmit(onSubmit, (errors) => console.log(errors))}
            className="bg-primary my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center"
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
    :
      <div className='w-full h-full'>
        <LoaderCircleIcon className='animate-spin size-20 text-primary mx-auto mt-52'/>
    </div>
  );
};

export default EditEmployee;
