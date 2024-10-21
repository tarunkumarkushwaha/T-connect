import { useCallback, useEffect, useRef, useState } from "react"
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BoltIcon from '@mui/icons-material/Bolt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

const Topbar = ({ topslide, toggletopslide }) => {
    const [notifications] = useState(11);
    const [messages] = useState(14);

    const menuRef = useRef();

    const closeOpenMenus = useCallback(
        (e) => {
            if (
                menuRef.current &&
                topslide &&
                !menuRef.current.contains(e.target)
            ) {
                toggletopslide();
            }
        },
        [topslide]
    );

    useEffect(() => {
        document.addEventListener("mousedown", closeOpenMenus);
    }, [closeOpenMenus]);
    return (
        <>
            <aside ref={menuRef} className={`fixed smooth-entry z-20 top-0 left-0 md:h-1/4 sm:h-2/4 shadow-lg w-full transition-all duration-1000 ease-in-out ${!topslide ? "-translate-y-full" : "-translate-y-1"}`}>
                <div className="h-full px-3 py-4 overflow-y-auto bg-slate-200/85">
                    <div className="flex justify-center items-center p-4 text-gray-900 cursor-pointer rounded-lg">
                        <span className="ms-3 font-extrabold text-3xl">Markable</span>
                    </div>
                    <div className="flex md:flex-row flex-col items-center justify-center gap-4">
                        <div className="flex items-center justify-center gap-4">
                            <div className="relative">
                                <NotificationsIcon />
                                {notifications > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {notifications}
                                    </span>
                                )}
                            </div>
                            <div className="relative">
                                <EmailIcon />
                                {messages > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {messages}
                                    </span>
                                )}
                            </div>
                            <BoltIcon />
                        </div>
                        <div className="flex items-center space-x-2">
                            <AccountCircleIcon fontSize="large" />
                            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Tarun Kushwaha</span>
                        </div>

                        <div className="flex items-center justify-center gap-4">

                            <button className="bg-red-500 text-white px-2 py-2 rounded-lg text-xs md:text-sm font-semibold">
                                + Create
                            </button>
                            <button className="border border-blue-500 text-blue-500 px-2 py-2 rounded-lg text-xs md:text-sm font-semibold">
                                ☆ Upgrade
                            </button>
                            <button className="border border-green-500 text-green-500 px-2 py-2 rounded-lg text-xs md:text-sm font-semibold">
                                More
                            </button>
                        </div>
                    </div>
                </div>
                <div className='absolute right-5 top-6 text-black cursor-pointer' onClick={toggletopslide}>
                    <SettingsIcon fontSize='large' />
                </div>
            </aside>
        </>
    )
}

export default Topbar