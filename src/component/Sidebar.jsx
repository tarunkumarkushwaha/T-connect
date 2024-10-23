import { useState, useRef, useCallback, useEffect } from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CollectionsIcon from '@mui/icons-material/Collections';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';

const Sidebar = ({ setmodalType, modalType }) => {
    const [open, setOpen] = useState(false);
    const Menus = [
        { title: "contact", icon: <ContactPageIcon />, color: "text-blue-500" },
        { title: "project", icon: <AssignmentIcon />, color: "text-slate-500" },
        { title: "album", icon: <CollectionsIcon />, color: "text-green-500" },
        { title: "board", icon: <DashboardIcon />, color: "text-orange-500" },
        { title: "organisation", icon: <BusinessIcon />, color: "text-red-500" }
    ];

    const menuRef = useRef();

    const closeOpenMenus = useCallback(
        (e) => {
            if (
                menuRef.current &&
                open &&
                !menuRef.current.contains(e.target)
            ) {
                setOpen(!open);
            }
        },
        [open]
    );

    useEffect(() => {
        document.addEventListener("mousedown", closeOpenMenus);
    }, [closeOpenMenus]);

    return (
        <div ref={menuRef} className="absolute z-20 top-0 bottom-0 left-0 rounded-md">
            <div className={` ${open ? "w-72 border border-slate-300" : "w-14 border border-white"} bg-white rounded-md h-full p-4 pt-8 relative duration-300`}>
                <div className={`${open ? 'rotate-180' : 'rotate-0'} text-blue-500 bg-slate-300 transition-all duration-300 absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                    title={`click to ${!open ? "expand" : "close"}`}
                >
                    <KeyboardDoubleArrowLeftIcon />
                </div>
                <div className="flex gap-x-4 items-center">
                    <div className={`cursor-pointer duration-500`}>
                        <img onClick={() => navigate('/')}
                            className='h-16 w-16 cursor-pointer rounded-xl'
                            src='/Logo1.png' alt="markable"
                        />
                    </div>
                    <h1 className={` origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
                        Makerble
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li key={index}
                            onClick={() => { setmodalType(Menu.title); setOpen(!open) }}
                            className={`flex ${modalType == Menu.title ? "font-bold text-xl" : "text-sm"} hover:font-bold transition-all duration-100 mt-2 rounded-md py-2 cursor-pointer items-center gap-x-3 
                            ${Menu.color} `}>
                            {Menu.icon}
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

export default Sidebar;
