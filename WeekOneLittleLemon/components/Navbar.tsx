import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLemon, faBook } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return (
        <nav className="flex flex-wrap items-center justify-between p-5 bg-white">
            <div className="flex items-center flex-shrink-0 mr-6 text-black">
                <span className="flex font-semibold text-xl tracking-tight"><FontAwesomeIcon icon={faLemon} className="text-shadow text-yellow-400"
                    style={{ color: "#fff700", width: "1.2rem", marginRight: "1.2rem", marginInlineEnd: "0.6rem" }} />Little Lemon</span>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow"></div>
                <div>
                    <a
                        href="#"
                        className="flex inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-yellow hover:text-black hover:bg-white mt-4 lg:mt-0">
                        <FontAwesomeIcon icon={faBook} className="text-shadow text-yellow-400"
                            style={{ width: "1.2rem", marginRight: "1.2rem", marginInlineEnd: "0.6rem" }} /><span className="font-semibold pt-1">Menu</span>
                    </a>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;