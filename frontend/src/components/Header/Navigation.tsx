import React from "react"
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import Logo_svg from "../../assets/img/logo.svg";
import { SmallNavigation } from "./SmallNavigation";
import SearchForm from "./searchForm";
import { AvatarMenu } from "./AvatarMenu";

export interface navItem {
    name: string,
    link: string;
}

export interface NavigationProps {
    navItems: navItem[]
}

export function Navigation({ navItems }: NavigationProps) {
return (
<>
    <SmallNavigation/>
    <nav className="shadow flex justify-between hidden md:flex mt-1 space-y-8 md:flex px-4 sm:px-6 md:space-x-6 md:space-y-0">
        <ul id="intro_menu" className="items-center mb-3 hidden md:block mt-1 space-y-8 md:flex px-4 md:space-x-6 md:space-y-0">
        <NavLink key="logo" to="/" className="flex items-center">
            <img className="h-auto w-12 m-2 max-w-none" src={Logo_svg} alt="" />
        </NavLink>
        {navItems.map((navItem) =>
            <NavLink key={navItem.name} to={navItem.link} className="header__listItem">
                { navItem.name }
            </NavLink>
        )}
        </ul>
        <SearchForm/>
        <AvatarMenu/>
    </nav>
</>
)
}