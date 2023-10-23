import React, {useState} from "react"
import { Link, NavLink } from "react-router-dom";
import Logo_svg from "../../assets/img/logo.svg";
import { navItem } from "./";


export interface MobileNavigationProps {
    navItems: navItem[]
}

export function MobileNavigation({ navItems }: MobileNavigationProps) {
const [navbar, setNavbar] = useState(false);

return (
<>
    <div className="flex items-center justify-between ml-2 mr-2 my-2 md:hidden">
        <Link to="/"><img className="w-8 h-8" src={Logo_svg}></img></Link>
        <button onClick={()=> setNavbar(!navbar)} type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400
            hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset
            focus:ring-white-500"
            aria-expanded="false" data-toggle="collapse" data-target="#demo">
            <span className="sr-only">Open menu</span>
            {navbar ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd" />
            </svg>
            ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            )}
        </button>
    </div>
    <nav className={`flex-1 justify-self-center pb-3 mt-8 m-4 md:hidden md:pb-0 md:mt-0 ${ navbar ? "block" : "hidden"
        }`}>
        <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:hidden md:pb-0 md:mt-0 ${ navbar ? "block"
                : "hidden" }`}>
                <ul  className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {navItems.map((navItem) =>
                    <li key={navItem.name}>
                        <NavLink  to={navItem.link} className="header__listItem">
                            { navItem.name }
                        </NavLink>
                    </li>
                )}
                </ul>
            </div>
        </div>
    </nav>
</>
)
}