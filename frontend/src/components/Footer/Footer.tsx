import { useState } from 'react'
import Google_svg from "../../assets/img/google.svg"
import Linkedin_svg from "../../assets/img/linkedin.svg"
import Twitter_svg from "../../assets/img/twitter.svg"
import Fb_svg from "../../assets/img/facebook.svg"
import { Link, NavLink } from 'react-router-dom'
import { LinkIcon } from '../Header/LinkIcon'
export default function Footer() {
return (
<footer className="bg-white">
    <div className="footer__line h-[18px]"></div>
    <div className="grid grid-cols-2 py-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Customer service</h2>
            <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">Orders & delivery</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Payment</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Retouring</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Warranty & repair</a>
                </li>
            </ul>
        </div>
        
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">About us</h2>
            <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                    <NavLink to="/faq" className=" hover:underline">FAQ</NavLink>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Customer service</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Company</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Existence</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Subscribe to our
                newsletter!</h2>
            <input placeholder="Email"></input>
        </div>
        <div className="mb-4 mt-4">
            <h3 className="text-l font-semibold text-gray-500 mb-3">Follow us</h3>
            <div className="flex items-center follow__us_socials">
                <a className="mr-4"><img alt="Facebook" src={Fb_svg} /></a>
                <a className="mr-4"><img alt="Twitter" src={Twitter_svg} /></a>
                <a className="mr-4"><img alt="Google" src={Google_svg} /></a>
                <a className="mr-4"><img alt="Linkedin" src={Linkedin_svg} /></a>
            </div>
        </div>
    
        
    </div>
    <div className="flex justify-center mb-4">
            <a>Terms & conditions</a>
            <span className="ml-1 mr-1">|</span>
            <Link to= "/privacyPolicy">Privacy policy</Link>

        </div>
</footer>
)
}