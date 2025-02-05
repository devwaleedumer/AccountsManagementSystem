import { X } from "lucide-react"

function UnAuthorized() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
                <X className=" size-20 p-2  text-red-600 " />
       <h1 className="text-3xl  gap-4">
         You are Not Authorized for this page.
       </h1>
       <h5 className="text-xl">
        For Further assistance contact administrator.
       </h5>
    </div>
  )
}

export default UnAuthorized