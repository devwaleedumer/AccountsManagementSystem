import { Boxes, Building, Building2, LayoutDashboard, Receipt, ReceiptText, Timer, Users2 } from "lucide-react";

 const sideBarMenuItems = [
    {
        title: "Dashboard",
        to: "/dashboard",
        icon: LayoutDashboard
    },
     {
        title: "Users",
        to: "ams/users",
        icon: Users2
    },
    {
        title: "Employees",
        to: "ams/employees",
        icon: Building
    },
    {
        title: "Salary",
        to: "ams/salary",
        icon: ReceiptText
    },
     {
        title: "Expenditures",
        to: "ams/expenditures",
        icon: Receipt
    },
     {
        title: "Heads",
        to: "ams/head-of-accounts",
        icon: Boxes
    },
     {
        title: "Departments",
        to: "ams/departments",
        icon: Building2
    },
     {
        title: "Activities",
        to: "ams/activities",
        icon: Timer
    },
    
]

export default sideBarMenuItems