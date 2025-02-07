import { BadgeCheck, BadgeDollarSign, Building, Building2, BuildingIcon, CalendarDays, DollarSign, Mail, Minus, Phone, Plus, UserCircle, UserCog, Users, Users2, Wallet } from "lucide-react"
import { Link } from "react-router-dom"
import { getUser } from "../core/data/tokenLocalStorageService"
// Mock user data - In a real app, this would come from your auth/API
const currentUser = {
  name: "Hammad Haider Kiani",
  role: "Head of Accounts Department",
  employeeType: "Permanent",
  email: "Kiani123@gmail.com",
  phone: "0300-1234567",
  department: "Administration",
  joinDate: "Jan 2010",
  imageUrl: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
}

const Home = () => {
const user = getUser();
  return (
   <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* User Information Card */}
        <div className="mb-8 bg-white rounded-lg shadow overflow-hidden">
          <div className="bg-primary-2 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">User Information</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center">
                <img
                  src={currentUser.imageUrl}
                  alt="Profile"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{user?.userName}</h3>
                  <p className="text-sm text-gray-500">{user?.role}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <UserCog className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-600">Employee Type:</span>
                  <span className="ml-2 font-medium text-gray-900">{currentUser.employeeType}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Building className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-600">Department:</span>
                  <span className="ml-2 font-medium text-gray-900">{currentUser.department}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-600">Email:</span>
                  <span className="ml-2 font-medium text-gray-900">{user?.email}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Phone className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-600">Phone:</span>
                  <span className="ml-2 font-medium text-gray-900">{user?.phoneNumber || "N/A"}</span>
                </div>
                <div className="flex items-center text-sm">
                  <CalendarDays className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-600">Join Date:</span>
                  <span className="ml-2 font-medium text-gray-900">{currentUser.joinDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  mb-8">
          <div className="bg-white rounded-lg shadow p-6 hover:bg-green-200 transition-colors duration-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-200">
                <Users className="h-6 w-6 text-green-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-green-900">Total Employees</p>
                <p className="text-2xl font-semibold text-green-900">24</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:bg-green-200 transition-colors duration-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-200">
                <Building2 className="h-6 w-6 text-green-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-green-900">Departments</p>
                <p className="text-2xl font-semibold text-green-900">15</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Employee', icon: <Users2 className="h-6 w-6" />, href: 'employees' },
            { title: 'Salary', icon: <DollarSign className="h-6 w-6" />, href: 'salary' },
            { title: 'Base Pay', icon: <Wallet className="h-6 w-6" />, href: 'base-pay' },
            { title: 'Allowance', icon: <Plus className="h-6 w-6" />, href: 'allowance' },
            { title: 'Deduction', icon: <Minus className="h-6 w-6" />, href: 'deduction' },
            { title: 'FeeHandling', icon: <BadgeDollarSign className="h-6 w-6" />, href: 'studentFeeHandling' },
            { title: 'Employee Type', icon: <UserCog className="h-6 w-6" />, href: 'employee-type' },
            { title: 'Department', icon: <Building2 className="h-6 w-6" />, href: 'departments' },
            { title: 'Department Type', icon: <BuildingIcon className="h-6 w-6" />, href: 'department-type' },
            { title: 'Designation', icon: <BadgeCheck className="h-6 w-6" />, href: 'designation' },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="bg-white rounded-lg shadow p-6 hover:bg-green-200 transition-colors duration-200 group"
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-200 group-hover:bg-green-300 transition-colors duration-200">
                  <div className="text-green-700 group-hover:text-green-800 transition-colors duration-200">
                    {item.icon}
                  </div>
                </div>
                <h3 className="ml-4 text-lg font-medium text-green-900">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </main>
  )
}

export default Home