import { Boxes, Building, Building2, LayoutDashboard, Receipt, ReceiptText, Timer, Users2 } from "lucide-react";

 const sideBarMenuItems = [
    {
        title: "Dashboard",
        to: "/dashboard",
        icon: LayoutDashboard
    },
     {
        title: "Users",
        to: "/users",
        icon: Users2
    },
    {
        title: "Employees",
        to: "/employees",
        icon: Building
    },
    {
        title: "Salary",
        to: "/salary",
        icon: ReceiptText
    },
     {
        title: "Expenditures",
        to: "/expenditures",
        icon: Receipt
    },
     {
        title: "Heads",
        to: "/head-of-accounts",
        icon: Boxes
    },
     {
        title: "Departments",
        to: "/departments",
        icon: Building2
    },
     {
        title: "Activities",
        to: "/activities",
        icon: Timer
    },
    
]

export default sideBarMenuItems