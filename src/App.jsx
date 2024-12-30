import { Route, Routes, BrowserRouter } from "react-router-dom"
import Layout from "./components/app-layout/layout"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import Login from "./pages/login"
import UserList from "./components/user-management/UserList"
import AddUser  from "./components/user-management/AddUser"
import Table from "./components/Table"

function App() {

  return (
    <>
    <Provider store={store}>
       <BrowserRouter>
      <Routes>
        <Route  path="/ams"  element={<Layout/>}>
          {/* <Route  index element={<h1>Home</h1>}/>  */}
          <Route  path="users" element={<UserList/>}/> 
          
        </Route>
        <Route path="/login"  element={<Login/>}/>
        <Route  path="/users/add-user" element={<AddUser/>}/> 
        <Route  path="/users/table" element={<Table/>}/> 


      </Routes>
     </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
