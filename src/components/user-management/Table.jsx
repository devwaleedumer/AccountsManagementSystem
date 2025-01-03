import { LucideEye, PenSquareIcon, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"

const Table = () => {
  return (
   <section className="p-3 ">
     <div className="mx-auto w-full px-4 ">
            <div className="text-primary-foreground  bg-white  relative shadow-md sm:rounded-lg overflow-scroll border">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 bg-image">
                <div className="w-full md:w-1/2">
                    <form className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-300">
                                <svg aria-hidden="true" className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring focus:ring-offset-2 focus:ring-primary focus:outline-none  block w-half px pl-10 p-2 " placeholder="Search" required=""/>
                        </div>
                    </form>
                </div>
                <div className="w-full font-roboto  md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <Link to={'add-user'} className="flex items-center justify-center text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        Add User
                    </Link>
                    
                </div>
            </div>
        <div className="relative overflow-auto max-h-[600px]  shadow-md  w-full h-full font-roboto p-4">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 border border-collapse ">
        <thead className="text-xs  uppercase bg-primary-2 text-primary-foreground"> 
            <tr>
               
                <th scope="col" className="px-6 py-3 border-r">
                    SN.
                </th>
                <th scope="col" className="px-6 py-3 border-r">
                    Name
                </th>
                <th scope="col" className="px-6 py-3 border-r">
                    Username
                </th>
                <th scope="col" className="px-6 py-3 border-r">
                    Email
                </th>
                <th scope="col" className="px-6 py-3 border-r">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3 border-r">
                    Role
                </th>
                <th scope="col" className="px-6 py-3 border-r">
                    Status
                </th>
                <th scope="col" className="px-6 py-3 border-r">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className=" bg-white border-b  hover:bg-gray-50">
               
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    1
                </th>
                <td className="px-6 py-4">
                    Soban
                </td>
                <td className="px-6 py-4">
                    Soban10
                </td>
                <td className="px-6 py-4">
                    Soban@gmail.com
                </td>
                <td className="px-6 py-4">
                    0300-0000000
                </td>
                <td className="px-6 py-4">
                    Moderator
                </td>
                <td className="px-6 py-4">
                    Active
                </td>
                <td className="flex items-center px-6 py-4 space-x-2">
                   <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <PenSquareIcon className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <Trash2 className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <LucideEye className="size-5"/>
                   </button>

                </td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
                
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    No
                </td>
                <td className="px-6 py-4">
                    Yes
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4">
                    1.0 lb.
                </td>
                <td className="flex items-center px-6 py-4 space-x-2">
                   <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <PenSquareIcon className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <Trash2 className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <LucideEye className="size-5"/>
                   </button>

                </td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
                
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    Yes
                </td>
                <td className="px-6 py-4">
                    No
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4">
                    0.2 lb.
                </td>
                <td className="flex items-center px-6 py-4 space-x-2">
                   <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <PenSquareIcon className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <Trash2 className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <LucideEye className="size-5"/>
                   </button>

                </td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
                
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple Watch
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Watches
                </td>
                <td className="px-6 py-4">
                    Yes
                </td>
                <td className="px-6 py-4">
                    No
                </td>
                <td className="px-6 py-4">
                    $199
                </td>
                <td className="px-6 py-4">
                    0.12 lb.
                </td>
                <td className="flex items-center px-6 py-4 space-x-2">
                   <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <PenSquareIcon className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <Trash2 className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <LucideEye className="size-5"/>
                   </button>

                </td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple iMac
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    PC
                </td>
                <td className="px-6 py-4">
                    Yes
                </td>
                <td className="px-6 py-4">
                    Yes
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    7.0 lb.
                </td>
                <td className="flex items-center px-6 py-4 space-x-2">
                   <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <PenSquareIcon className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <Trash2 className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <LucideEye className="size-5"/>
                   </button>

                </td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple AirPods
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    No
                </td>
                <td className="px-6 py-4">
                    Yes
                </td>
                <td className="px-6 py-4">
                    $399
                </td>
                <td className="px-6 py-4">
                    38 g
                </td>
                <td className="flex items-center px-6 py-4 space-x-2">
                   <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <PenSquareIcon className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <Trash2 className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <LucideEye className="size-5"/>
                   </button>

                </td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    iPad Pro
                </th>
                <td className="px-6 py-4">
                    Gold
                </td>
                <td className="px-6 py-4">
                    Tablet
                </td>
                <td className="px-6 py-4">
                    No
                </td>
                <td className="px-6 py-4">
                    Yes
                </td>
                <td className="px-6 py-4">
                    $699
                </td>
                <td className="px-6 py-4">
                    1.3 lb.
                </td>
                <td className="flex items-center px-6 py-4 space-x-2">
                   <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <PenSquareIcon className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <Trash2 className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <LucideEye className="size-5"/>
                   </button>

                </td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Magic Keyboard
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    Yes
                </td>
                <td className="px-6 py-4">
                    Yes
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4">
                    453 g
                </td>
                <td className="flex items-center px-6 py-4 space-x-2">
                   <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <PenSquareIcon className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <Trash2 className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <LucideEye className="size-5"/>
                   </button>

                </td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple TV 4K
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    TV
                </td>
                <td className="px-6 py-4">
                    Yes
                </td>
                <td className="px-6 py-4">
                    No
                </td>
                <td className="px-6 py-4">
                    $179
                </td>
                <td className="px-6 py-4">
                    1.78 lb.
                </td>
                <td className="flex items-center px-6 py-4 space-x-2">
                   <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <PenSquareIcon className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <Trash2 className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <LucideEye className="size-5"/>
                   </button>

                </td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
               
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    AirTag
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    Yes
                </td>
                <td className="px-6 py-4">
                    No
                </td>
                <td className="px-6 py-4">
                    $29
                </td>
                <td className="px-6 py-4">
                    53 g
                </td>
                <td className="flex items-center px-6 py-4 space-x-2">
                   <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <PenSquareIcon className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <Trash2 className="size-5"/>
                   </button>
                     <button type="button" className="bg-primary  text-primary-foreground  focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-3 py-2 text-center">
                    <LucideEye className="size-5"/>
                   </button>

                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
     </div>
   </section>
  )
}

export default Table