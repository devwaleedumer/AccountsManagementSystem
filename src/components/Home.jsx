import { BadgeCheck, Building, Building2, BuildingIcon, CalendarDays, DollarSign, Mail, Minus, Phone, Plus, UserCircle, UserCog, UserMinus, Users, Wallet } from "lucide-react"
import { Link } from "react-router-dom"
// Mock user data - In a real app, this would come from your auth/API
const currentUser = {
  name: "John Doe",
  role: "HR Administrator",
  employeeType: "Full Time",
  email: "john.doe@company.com",
  phone: "+1 (555) 123-4567",
  department: "Human Resources",
  joinDate: "Jan 2023",
  imageUrl: "https://picsum.photos/65"
}
const Home = () => {
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
                  <h3 className="text-lg font-medium text-gray-900">{currentUser.name}</h3>
                  <p className="text-sm text-gray-500">{currentUser.role}</p>
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
                  <span className="ml-2 font-medium text-gray-900">{currentUser.email}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Phone className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-600">Phone:</span>
                  <span className="ml-2 font-medium text-gray-900">{currentUser.phone}</span>
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
                <p className="text-2xl font-semibold text-green-900">1,234</p>
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
                <p className="text-2xl font-semibold text-green-900">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:bg-green-200 transition-colors duration-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-200">
                <UserMinus className="h-6 w-6 text-green-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-green-900">On Leave</p>
                <p className="text-2xl font-semibold text-green-900">23</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:bg-green-200 transition-colors duration-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-200">
                <UserCog className="h-6 w-6 text-green-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-green-900">New Requests</p>
                <p className="text-2xl font-semibold text-green-900">5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Deduction', icon: <Minus className="h-6 w-6" />, href: 'deduction' },
            { title: 'Employee Type', icon: <UserCog className="h-6 w-6" />, href: 'employee-type' },
            { title: 'Allowance', icon: <Plus className="h-6 w-6" />, href: 'allowance' },
            { title: 'Department', icon: <Building className="h-6 w-6" />, href: 'departments' },
            { title: 'Department Type', icon: <BuildingIcon className="h-6 w-6" />, href: 'department-type' },
            { title: 'Salary', icon: <DollarSign className="h-6 w-6" />, href: 'salary' },
            { title: 'Base Pay', icon: <Wallet className="h-6 w-6" />, href: 'base-pay' },
            { title: 'Employee', icon: <UserCircle className="h-6 w-6" />, href: 'employees' },
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