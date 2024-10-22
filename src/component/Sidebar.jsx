import { useState } from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Contacts", data: ["herry", "siyamadit", "Claire"] },
        { title: "Projects", data: "Transactions" },
        { title: "Album", data: "Card" },
        { title: "Board", data: "Notifications" },
        { title: "Organisation", data: "Calendar" },
        { title: "People You follow", data: "Debt" },
        { title: "Followers", data: "Legal" }
    ];
    return (
        <div className="flex">
            <div className={` ${open ? "w-72" : "w-20 "} bg-slate-500 h-screen p-5  pt-8 relative duration-300`}>
                <div className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}>
                    <ControlPointIcon />
                </div>
                <div className="flex gap-x-4 items-center">
                    <div
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    >
                        <EmojiEmotionsIcon />
                    </div>
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Makerble
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li key={index}
                            className={`flex mt-2 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                            ${index === 0 && "bg-light-white"} `}>
                            <MenuIcon />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar