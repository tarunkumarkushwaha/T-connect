import { useCallback, useEffect, useRef, useState } from "react"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Bottombar = ({ bottomslide, togglebottomslide }) => {

    const menuRef = useRef();

    const closeOpenMenus = useCallback(
        (e) => {
            if (
                menuRef.current &&
                bottomslide &&
                !menuRef.current.contains(e.target)
            ) {
                togglebottomslide();
            }
        },
        [bottomslide]
    );

    useEffect(() => {
        document.addEventListener("mousedown", closeOpenMenus);
    }, [closeOpenMenus]);

    return (
        <>
            <aside ref={menuRef} className={`fixed z-20 bottom-0 left-0 h-[60%] shadow-lg w-full transition-all duration-1000 ease-in-out ${!bottomslide ? "translate-y-full" : "-translate-y-0"}`}>
                <div className="h-full px-3 py-4 overflow-y-auto bg-slate-200/85">
                    <div className="flex justify-center items-center p-3 text-gray-900 cursor-pointer rounded-lg">
                        <span className="ms-3 font-extrabold text-3xl">Markable</span>
                    </div>
                    <div className="flex md:flex-row flex-col items-center justify-center gap-2">
                        <button><h1 className="text-lg text-slate-600 font-semibold">Contacts</h1></button>
                        <button><h1 className="text-lg text-slate-600 font-semibold">Projects</h1></button>
                        <button><h1 className="text-lg text-slate-600 font-semibold">Albums</h1></button>
                        <button><h1 className="text-lg text-slate-600 font-semibold">Organisations</h1></button>
                        <button><h1 className="text-lg text-slate-600 font-semibold">Followers and people</h1></button>
                        <button><h1 className="text-lg text-slate-600 font-semibold">Boards</h1></button>
                        <button><h1 className="text-lg text-slate-600 font-semibold">Personal Progress</h1></button>
                        <button><h1 className="text-lg text-slate-600 font-semibold">Tasks</h1></button>
                    </div>
                </div>
                <div className={`absolute right-5 top-6 text-black cursor-pointer ${bottomslide ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} onClick={togglebottomslide}>
                    <KeyboardDoubleArrowDownIcon fontSize='large' />
                </div>

            </aside>
        </>
    )
}

export default Bottombar