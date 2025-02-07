import { BadgeCheck, BadgeDollarSignIcon, Boxes, Building2, BuildingIcon, CircleSlashIcon, Coins, Currency, DollarSign, DollarSignIcon, FenceIcon, LayoutDashboard, LucideDollarSign, Minus, MinusCircle, Notebook, PersonStandingIcon, Plus, PlusCircle, Receipt, ReceiptText, Timer, UserCog, UserCog2, UserRoundCheckIcon, UserRoundCogIcon, UserRoundPenIcon, UserRoundPlusIcon, Users2, UserSquare2Icon, UsersRoundIcon, Wallet } from "lucide-react";

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
        icon: DollarSign
    },
    {
        title: "Base Pay",
        to: "base-pay",
        icon: Wallet
    },
     {
        title: "Allowances",
        to: "allowance",
        icon: Plus
    },
     {
        title: "Deductions",
        to: "deduction",
        icon: Minus
    },
    {
        title: "Fee Handling",
        to: "studentFeeHandling",
        icon: BadgeDollarSignIcon
    },
    {
        title: "Employee Types",
        to: "employee-type",
        icon: UserCog
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
        icon: BadgeCheck
    },
     
    
]

export default sideBarMenuItems