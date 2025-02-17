import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import logo from '../assets/logo.png';
import links from '../common/NavLinks';

function NavBar() {
    const location = useLocation();
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState({});

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const toggleSubmenu = (id, e) => {
        e.stopPropagation();
        setOpenSubmenus((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".mobile-menu") && !event.target.closest(".menu-button")) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className='w-full bg-[#172031] bg-opacity-10 backdrop-blur-md border-none h-fit rounded-4xl flex justify-between items-center px-4'>
            <div className='p-2'>
                <Link to='/'>
                    <img className='rounded-xl' height={20} width={100} src={logo} alt="Logo" />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className='px-2 hidden md:block'>
                <ul className="flex space-x-6">
                    {links.map((link) =>
                        link.subRoutes ? (
                            <li key={link.id} className="relative">
                                <button
                                    className="flex items-center space-x-1"
                                    onClick={() => toggleDropdown(link.id)}
                                >
                                    <span className={location.pathname.includes(link.path) ? "text-blue-500" : "text-white"}>
                                        {link.name}
                                    </span>
                                    {openDropdown === link.id ? <ChevronUp color='white' size={16} /> : <ChevronDown size={16} color='white' />}
                                </button>
                                {openDropdown === link.id && (
                                    <ul className="absolute left-0 mt-2 w-56 bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
                                        {link.subRoutes.map((sub) => (
                                            <li key={sub.id}>
                                                <Link
                                                    to={sub.path}
                                                    className={`block px-4 py-2 hover:bg-gray-700 ${location.pathname === sub.path ? "text-blue-500" : "text-white"
                                                        }`}
                                                    onClick={() => setOpenDropdown(null)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li key={link.id}>
                                <Link
                                    to={link.path}
                                    className={`${location.pathname === link.path ? "text-blue-500" : "text-white"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white p-2 menu-button">
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Sidebar */}
            <div className={`md:hidden  fixed top-20 inset-0  bg-opacity-90 text-white p-5 h-full transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out mobile-menu`}>

                <ul className="mt-10 space-y-4 bg-black p-4 rounded-lg">
                    {links.map((link) => (
                        <li key={link.id}>
                            <div className="flex items-center justify-between">
                                <Link
                                    to={link.path}
                                    className={`block text-lg ${location.pathname === link.path ? "text-blue-500" : ""}`}
                                    onClick={toggleMenu}
                                >
                                    {link.name}
                                </Link>
                                {link.subRoutes && (
                                    <button onClick={(e) => toggleSubmenu(link.id, e)}>
                                        <ChevronDown size={20} className={`transition-transform ${openSubmenus[link.id] ? "rotate-180" : ""}`} />
                                    </button>
                                )}
                            </div>
                            {link.subRoutes && openSubmenus[link.id] && (
                                <ul className="ml-4 mt-2 border-l border-white pl-3 space-y-2">
                                    {link.subRoutes.map((sub) => (
                                        <li key={sub.id}>
                                            <Link
                                                to={sub.path}
                                                className={`block text-sm ${location.pathname === sub.path ? "text-blue-500" : ""}`}
                                                onClick={toggleMenu}
                                            >
                                                {sub.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
}

export default NavBar;
