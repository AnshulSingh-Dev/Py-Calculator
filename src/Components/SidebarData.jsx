import {HiChartPie, HiHome, HiLogout, HiMail, HiUser, HiUserGroup } from "react-icons/hi";

export const SidebarData = [
    {
        title: "Home",
        icon: <HiHome size={30}/>,
        link: "/home"
    },
    {
        title: "Mails",
        icon: <HiMail size={30}/>,
        link: "/mails"
    },
    {
        title: "Accounts",
        icon: <HiUser size={30}/>,
        link: "/accounts"
    },
    {
        title: "Analytics",
        icon: <HiChartPie size={30}/>,
        link: "/analytics"
    },
    {
        title: "Group",
        icon: <HiUserGroup size={30}/>,
        link: "/group"
    },
    {
        title: "Logout",
        icon: <HiLogout size={30}/>,
        link: "/logout"
    },
]
