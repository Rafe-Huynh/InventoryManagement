
import { Archive, CircleDollarSign, Clipboard, Layout, SlidersHorizontal, User } from "lucide-react";
export const SidebarItems = [
    {
        href: "/dashboard",
        icon: Layout,
        label: "Dashboard",
       
    },
    {
        href: "/inventory",
        icon: Archive,
        label: "Inventory",
       
    },
    {
        href: "/product",
        icon: Clipboard,
        label: "Product",
       
    },
    {
        href: "/users",
        icon: User,
        label: "User",
       
    },
    {
        href: "/settings",
        icon: SlidersHorizontal,
        label: "Settings",  
    },
    {
        href: "/expenses",
        icon: CircleDollarSign,
        label: "Expenses",  
    }
]