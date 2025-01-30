import { Boxes, Building, Building2, BuildingIcon, LayoutDashboard, PersonStandingIcon, Receipt, ReceiptText, Timer, UserRoundCheckIcon, UserRoundCogIcon, UserRoundPenIcon, UserRoundPlusIcon, Users2, UserSquare2Icon, UsersRoundIcon } from "lucide-react";

 const sideBarMenuItems = [
    {
        title: "Dashboard",
        to: "",
        icon: LayoutDashboard
    },
     {
        title: "Users",
        to: "users",
        icon: UserRoundPlusIcon
    },
    {
        title: "Employees",
        to: "employees",
        icon: Users2
    },
    {
        title: "Salary",
        to: "salary",
        icon: ReceiptText
    },
     {
        title: "Allowances",
        to: "allowance",
        icon: Receipt
    },
     {
        title: "Deductions",
        to: "deduction",
        icon: Boxes
    },
     {
        title: "Departments",
        to: "departments",
        icon: Building2
    },
     {
        title: "Department Type",
        to: "department-type",
        icon: BuildingIcon
    },
     {
        title: "Designations",
        to: "designation",
        icon: Timer
    },
     {
        title: "Employee Types",
        to: "employee-type",
        icon: Boxes
    },
    {
        title: "Base Pay",
        to: "BasicPays",
        icon: Boxes
    },
    
]

export default sideBarMenuItems