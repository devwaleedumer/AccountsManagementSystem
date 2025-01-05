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
        title: "Expenditures",
        to: "expenditures",
        icon: Receipt
    },
     {
        title: "Heads",
        to: "head-of-accounts",
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
        title: "Activities",
        to: "activities",
        icon: Timer
    },
    
]

export default sideBarMenuItems