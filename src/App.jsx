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
function App() {

  return (
    <>
    <Provider store={store}>
       <BrowserRouter>
      <Routes>
        <Route  path="/ams"  element={<Layout/>}>
           <Route  index element={<h1>Home</h1>}/>  
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
        <Route path="department-type"  element={<DepartmentTypes/>}/>
        
        <Route path="department/create"  element={<CreateDepartment/>}/>
        <Route path="designation/create"  element={<CreateDesignation/>}/>
        <Route path="base-pay/create"  element={<CreateBasicPay/>}/>
        <Route path="employees/create"  element={<CreateEmployee/>}/>
        <Route path="employees"  element={<Employees/>}/>
        <Route path="salary/permanent-employee-salary/manage-permanent-employee-salary/:id"  element={<ManagePermanentEmployeeSalary/>}/>
        <Route path="salary/adhoc-employee-salary/manage-adhoc-employee-salary/:id"  element={<ManageAdhocEmployeeSalary/>}/>
        <Route path="salary/permanent-employee-salary"  element={<PermanentEmployeeSalary/>}/>
        <Route path="salary/adhoc-employee-salary"  element={<AdhocEmployeeSalary/>}/>
        <Route path="salary/contract-employee-salary"  element={<ContractEmployeeSalary/>}/>
        <Route path="salary/fixed-employee-salary"  element={<FixedEmployeeSalary/>}/>
        <Route path="deduction/create"  element={<CreateDeduction/>}/>
        <Route path="allowance/create"  element={<CreateAllowance/>}/>
        <Route path="employee-type/create"  element={<CreateEmployeeType/>}/>
        </Route>
        <Route path="/login"  element={<Login/>}/>
         

      </Routes>
     </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
