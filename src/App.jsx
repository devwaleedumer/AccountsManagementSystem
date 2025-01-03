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
import DepartmentTypes from "./components/department-type/DepartmentTypes"
import EditDepartmentType from "./components/department-type/EditDepartmentType"
import ViewDepartmentType from "./components/department-type/ViewDepartmentType"
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
        <Route path="department-type/create"  element={<CreateDepartmentType/>}/>
        <Route path="department-type/edit/:id"  element={<EditDepartmentType/>}/>
        <Route path="department-type/view/:id"  element={<ViewDepartmentType/>}/>
        <Route path="department-type"  element={<DepartmentTypes/>}/>
        </Route>
        <Route path="/login"  element={<Login/>}/>
         
        



      </Routes>
     </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
