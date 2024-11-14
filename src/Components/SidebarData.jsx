import { HiX } from "react-icons/hi"
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/home"
    },
    {
        title: "Mails",
        icon: <EmailIcon/>,
        link: "/mails"
    },
    {
        title: "Accounts",
        icon: <AccountCircleIcon/>,
        link: "/accounts"
    },
    {
        title: "Analytics",
        icon: <LeaderboardIcon/>,
        link: "/analytics"
    },
    {
        title: "Group",
        icon: <GroupsIcon/>,
        link: "/group"
    },
    {
        title: "Logout",
        icon: <LogoutIcon/>,
        link: "/logout"
    },
]
