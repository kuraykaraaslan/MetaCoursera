'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLemon, faBook } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Menu from "./Menu";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        if (showMenu) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    }




    return (
        <>
            <nav className="flex flex-wrap items-center justify-between p-5 bg-white select-none">
                <div className="flex items-center flex-shrink-0 mr-6 text-black">
                    <span className="flex font-semibold text-xl tracking-tight"><FontAwesomeIcon icon={faLemon} className="text-shadow text-yellow-400"
                        style={{ color: "#fff700", width: "1.2rem", marginRight: "1.2rem", marginInlineEnd: "0.6rem" }} />Little Lemon</span>
                </div>

                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow"></div>
                    <div>
                        <a
                            onClick={toggleMenu}
                            className="flex inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-yellow hover:text-black hover:bg-white mt-4 lg:mt-0">
                            <FontAwesomeIcon icon={faBook} className="text-shadow text-yellow-400"
                                style={{ width: "1.2rem", marginRight: "1.2rem",marginTop: "0.3rem", marginInlineEnd: "0.6rem" }} /><span className="font-semibold pt-1">Menu</span>
                        </a>

                    </div>
                </div>
            </nav>
            <div className={"w-full block flex-grow lg:flex lg:w-auto bg-yellow-500 bg-opacity-100 transition duration-500 ease-in-out transform " + (showMenu ? "translate-x-0" : "-translate-x-full")} style={{ position: "fixed", top: "0", width: "100%", height: "100%", zIndex: "3", overflowY: "scroll" }}>
                <div className="w-full block flex-grow lg:flex lg:w-auto bg-yellow-500 bg-opacity-100 transition duration-500 ease-in-out transform " style={{ position: "fixed", top: "0", width: "100%", height: "100%", zIndex: "3" }}>
                    <nav className="min-w-full top-0 z-50 px-4 py-3">
                        <div className="min-w-screen flex flex-wrap items-center justify-between mx-auto p-4 overflow-y-auto">
                            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <FontAwesomeIcon icon={faLemon} className="text-shadow text-yellow-400" style={{ color: "white", width: "3rem", height: "3rem", marginInlineEnd: "0.6rem" }} />
                                <span className="font-semibold text-xl tracking-tight">Little Lemon</span>
                            </a>
                            <a
                                onClick={toggleMenu}
                                className="flex inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-yellow hover:text-black hover:bg-white">
                                <FontAwesomeIcon icon={faBook} className="text-shadow text-white"
                                    style={{ width: "1.2rem", marginRight: "1.2rem", marginTop: "0.3rem",marginInlineEnd: "0.6rem" }} /><span className="font-semibold text-white pt-1">Close</span>
                            </a>
                            <Menu />
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navbar;