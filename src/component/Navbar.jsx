import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ setQuery, toggletopslide }) => {
    const [dark, setdark] = useState(false);
    const [navitems, setnavitems] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    const style = {
        btnMode: !dark ? "from-green-600 to-blue-900" : "from-green-100 to-blue-200",
        uiMode: dark ? "bg-slate-900" : "bg-green-200",
        text: dark ? "text-white" : "text-slate-900"
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setnavitems(false);
            }
            else{setnavitems(true)}
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <nav className={`shadow-xl z-10 bg-white min-h-[12vh] px-5 py-1 flex flex-col md:flex-row justify-between items-center`}>
                <div
                    className='absolute md:hidden flex top-6 left-8 text-black cursor-pointer'
                    onClick={() => setnavitems(!navitems)}>
                    <MenuIcon />
                </div>
                <img onClick={() => navigate('/')}
                    className='h-16 w-16 md:mx-5 mx-14 my-1 cursor-pointer rounded-xl'
                    src='/Logo1.png' alt="markable"
                />

                

                <div
                    className={`flex md:flex-row flex-col md:justify-between justify-center items-center transition-all duration-500 ease-in-out ${navitems ? "max-h-[500px]" : "max-h-0"} overflow-hidden w-full`}
                    style={{ height: navitems ? "auto" : "0px" }}
                >
                    <div className={`md:flex hidden w-40`}></div>
                    <ul className="flex font-semibold md:justify-between justify-center items-center md:flex-row flex-col gap-5 md:mb-0 mb-2">
                        <li className={`${location.pathname === "/myapps" ? "text-indigo-800" : `${style.text}`} hover:text-indigo-400`}>
                            <NavLink to="/myapps">MyApps</NavLink>
                        </li>
                        <li className={`${location.pathname === "/" ? "text-indigo-800" : `${style.text}`} hover:text-indigo-400`}>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className={`${location.pathname === "/explore" ? "text-indigo-800" : `${style.text}`} hover:text-indigo-400`}>
                            <NavLink to="/explore">Explore</NavLink>
                        </li>
                    </ul>

                    <div className={`w-full max-w-80 rounded-md pl-6 p-2 my-1 mx-14 bg-slate-200 md:mb-0 mb-2`}>
                        <input
                            className='bg-slate-200 text-slate-900 outline-none'
                            onChange={(e) => setQuery(e.target.value.toLowerCase())}
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </div>

                <div className='absolute right-5 top-6 text-black cursor-pointer' onClick={toggletopslide}>
                    <SettingsIcon fontSize='large' />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
