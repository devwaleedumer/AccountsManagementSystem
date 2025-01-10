import { Route, Routes, BrowserRouter } from "react-router-dom"
import Layout from "./components/app-layout/layout"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import Login from "./pages/login"
import UserList from "./components/user-management/UserList"
import AddUser  from "./components/user-management/AddUser"
import ViewUser from "./components/user-management/ViewUser"
import Table from "./components/user-management/Table"
import Salary from "./components/salary/salary"
import CreateDepartmentType from "./components/department-type/CreateDepartmentType"
import EditDepartmentType from "./components/department-type/EditDepartmentType"
import ViewDepartmentType from "./components/department-type/ViewDepartmentType"
import CreateDepartment from "./components/department/CreateDepartment"
import CreateDesignation from "./components/designation/CreateDesignation"
import CreateBasicPay from "./components/basicPay/CreateBasicPay"
import CreateEmployee from "./components/employee/CreateEmployee"
import CreateEmployeeType from "./components/employee-type/CreateEmployeeType"
import DepartmentTypes from "./components/department-type/DepartmentTypes"
import CreateDeduction from "./components/deductions/CreateDeduction"
import CreateAllowance from "./components/allowances/CreateAllowance"
import Employees from "./components/employee/Employees"
import CreateEmployeeAllowance from "./components/salary/allowance/EmployeeAllowance"
import CreateEmployeeDeduction from "./components/salary/deduction/EmployeeDeduction"
import ManagePermanentEmployeeSalary from "./components/manage-employee-salary/ManagePermanentEmployeeSalary"
import PermanentEmployeeSalary from "./components/employee-salary/PermanentEmployeeSalary"
import ManageAdhocEmployeeSalary from "./components/manage-employee-salary/ManageAdhocEmployee"
import AdhocEmployeeSalary from "./components/employee-salary/AdhocEmployeeSalary"
import ContractEmployeeSalary from "./components/employee-salary/ContractEmployeeSalary"
import FixedEmployeeSalary from "./components/employee-salary/FixedEmployeeSalary"
import ViewEmpDetails from "./components/employee/ViewEmpDetails"
import BasicPays from "./components/basicPay/BasicPays"
import EditBasicPay from "./components/basicPay/EditBasicPay"
import Departments from "./components/department/Departments"
import EditDepartment from "./components/department/EditDepartment"
import Allowances from "./components/allowances/Allowances"
import EditAllowance from "./components/allowances/EditAllowance"
import Deductions from "./components/deductions/Deductions"
import EditDeduction from "./components/deductions/EditDeduction"
import Designations from "./components/designation/Designations"
import EditDesignation from "./components/designation/EditDesignation"
import EmployeeTypes from "./components/employee-type/EmployeeTypes"
import EditEmployeeType from "./components/employee-type/EditEmployeeType"
import Home from "./components/Home"
import ForgotPassword from "./pages/ForgetPassword"
import EditEmployee from "./components/employee/EditEmployee"
function App() {

  return (
    <>
    <Provider store={store}>
       <BrowserRouter>
      <Routes>
        <Route  path="/ams"  element={<Layout/>}>
           <Route  index element={<Home/>}/>  
          <Route  path="users" element={<UserList/>}/> 
          <Route  path="users/view-user" element={<ViewUser/>}/> 
          <Route  path="users/add-user" element={<AddUser/>}/> 
        <Route  path="users/table" element={<Table/>}/>

        <Route path="salary"  element={<Salary/>}/>
        <Route path="salary/add-employee-allowance/:id"  element={<CreateEmployeeAllowance/>}/>
        <Route path="salary/add-employee-deduction/:id"  element={<CreateEmployeeDeduction/>}/>
        
        <Route path="department-type"  element={<DepartmentTypes/>}/>
        <Route path="department-type/create"  element={<CreateDepartmentType/>}/>
        <Route path="department-type/edit/:id"  element={<EditDepartmentType/>}/>
        <Route path="department-type/view/:id"  element={<ViewDepartmentType/>}/>
        
        <Route path="departments/create"  element={<CreateDepartment/>}/>
        <Route path="departments/edit/:id"  element={<EditDepartment/>}/>
        <Route path="departments"  element={<Departments/>}/>

        <Route path="designation/create"  element={<CreateDesignation/>}/>
        <Route path="designation/edit/:id"  element={<EditDesignation/>}/>
        <Route path="designation"  element={<Designations/>}/>
        
        <Route path="base-pay/create"  element={<CreateBasicPay/>}/>
        <Route path="base-pay/edit/:id"  element={<EditBasicPay/>}/>
        <Route path="base-pay"  element={<BasicPays/>}/>
        
        <Route path="employees/create"  element={<CreateEmployee/>}/>
        <Route path="employees/edit/:id"  element={<EditEmployee/>}/>
        <Route path="employees"  element={<Employees/>}/>
        <Route path="employees/view/:id"  element={<ViewEmpDetails/>}/>


        <Route path="salary/permanent-employee-salary/manage-permanent-employee-salary/:id"  element={<ManagePermanentEmployeeSalary/>}/>
        <Route path="salary/adhoc-employee-salary/manage-adhoc-employee-salary/:id"  element={<ManageAdhocEmployeeSalary/>}/>
        <Route path="salary/permanent-employee-salary"  element={<PermanentEmployeeSalary/>}/>
        <Route path="salary/adhoc-employee-salary"  element={<AdhocEmployeeSalary/>}/>
        <Route path="salary/contract-employee-salary"  element={<ContractEmployeeSalary/>}/>
        <Route path="salary/fixed-employee-salary"  element={<FixedEmployeeSalary/>}/>
      
        <Route path="deduction/create"  element={<CreateDeduction/>}/>
        <Route path="deduction/edit/:id"  element={<EditDeduction/>}/>
        <Route path="deduction"  element={<Deductions/>}/>
        <Route path="allowance/create"  element={<CreateAllowance/>}/>
        <Route path="allowance"  element={<Allowances/>}/>
        <Route path="allowance/edit/:id"  element={<EditAllowance/>}/>
        <Route path="employee-type/create"  element={<CreateEmployeeType/>}/>
        <Route path="employee-type"  element={<EmployeeTypes/>}/>
        <Route path="employee-type/edit/:id"  element={<EditEmployeeType/>}/>
        </Route>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/forgot-password"  element={<ForgotPassword/>}/>
         

      </Routes>
     </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
