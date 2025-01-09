import { CreditCardIcon } from "lucide-react";

function ViewUser() {
  return (
    <div className="my-5 max-w-5xl  bg-white  mx-auto border shadow-lg rounded-lg font-roboto   ">
      <div className="bg-image">
        <div className="mb-5 bg-primary-2 shadow-t-lg rounded-t-lg py-3">
          <div className=" text-primary-foreground  ml-2 flex items-center">
            {" "}
            <CreditCardIcon className="size-5 inline-block mr-2 " />
            <span> User Details</span>
          </div>
        </div>{" "}
        <h1 className="text-2xl text-center font-semibold">FUUAST AMS</h1>
        <div className="flex p-4  justify-around">
          <div className="flex space-y-2 flex-col">
            <div className="space-x-3">
              <strong>Name</strong>
              <span>Soban</span>
            </div>
            <div className="space-x-3">
              <strong>Name</strong>
              <span>Soban</span>
            </div>
            <div className="space-x-3">
              <strong>Name</strong>
              <span>Soban</span>
            </div>
            <div className="space-x-3">
              <strong>Name</strong>
              <span>Soban</span>
            </div>
          </div>
          <div className="flex space-y-2 flex-col">
            <div className="space-x-3">
              <strong>Name</strong>
              <span>Soban</span>
            </div>
            <div className="space-x-3">
              <strong>Name</strong>
              <span>Soban</span>
            </div>
            <div className="space-x-3">
              <strong>Name</strong>
              <span>Soban</span>
            </div>
            <div className="space-x-3">
              <strong>Name</strong>
              <span>Soban</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center"> 
             <button className="bg-primary w-20  my-4 py-2 text-white hover:bg-primary/90 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 flex justify-center">Print</button>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
