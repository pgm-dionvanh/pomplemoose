import { useState } from 'react';
import Newar_svg from "../../assets/img/new_arrivals.svg";
import Tshirt_svg from "../../assets/img/basic-tshirt.svg";
import Sale_svg from "../../assets/img/sale.svg";

export default function FeaturedBanners() {
const [navbar, setNavbar] = useState(false);

return (
<section>
    <div className="flex flex-col md:flex-row justify-between items-center pb-6 pt-6 max-w-[650px] md:max-w-[980px] lg:max-w-[1028px] xl:max-w-[1280px]  m-auto">
        <div       style={{background: `linear-gradient(rgba(0, 0, 0, .30), rgba(0, 0, 0, .30)), url(${Newar_svg})`}}  className="flex flex-col md:w-[25rem] w-[22rem] product__item1 m-4 content-center justify-center">
            <div className="flex flex-col ml-4">
                <span className="text-white w-[7rem] ml-2 mb-2">New arrivals
                    are now in!</span>
                <button className='product__item--button'>View New Arrivals</button>
            </div>
        </div>
        <div style={{background: `linear-gradient(rgba(0, 0, 0, .30), rgba(0, 0, 0, .30)), url(${Tshirt_svg})`, backgroundSize: '22rem'}} className="flex flex-col w-[22rem] md:w-[15.5rem] product__item2 m-4 content-center justify-center">
            <div className="flex flex-col ml-4">
                <span className="text-white">View our most popular items</span>
                <button className='product__item--button'>View Best Sellers</button>
            </div>
        </div>
        <div style={{background: `linear-gradient(rgba(0, 0, 0, .30), rgba(0, 0, 0, .30)), url(${Sale_svg})`, backgroundSize: '20rem'}} className="flex flex-col w-[22rem] md:w-[15.5rem] product__item3 m-4 content-center justify-center">
            <div className="flex flex-col ml-4">
                <span className="text-white">Our story</span>
                <button className='product__item--button'>About Us</button>
            </div>
        </div>
    </div>
</section>
)}