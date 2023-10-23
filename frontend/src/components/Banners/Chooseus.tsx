import { useState } from 'react'
import Freeshipping from '../../assets/img/freeshipping.svg'
import Easypay from '../../assets/img/easypay.svg'
import Moneyback from '../../assets/img/moneyback.svg'
import Quality from '../../assets/img/quality.svg'

export default function ChooseUs() {
return (
<section className='m-auto w-full mt-12 max-w-[650px] md:max-w-[980px] lg:max-w-[1028px] xl:max-w-[1280px]  mb-[70px] md:mb-[150px]'>
    <div className="container">
        <ul className="flex flex-col items-center md:flex-row justify-between">
            <li className="w-[22%] mb-12 text-center md:text-center">
                <img className="mb-[28px] md:mb-[43px] h-[70px] w-[70px] m-auto justify-center items-center" src={Freeshipping} alt="Free shipping"/>
                <div>
                    <h4 className="text-xl font-bold">Free shipping</h4>
                    <p>Purchases over $100 CAD or 73 Euro are eligible for free shipping via USPS First Class Mail.</p>
                </div>
            </li>
            <li className="w-[22%] mt-2 mb-12 text-center md:text-center">
                <img className="m-auto mb-[28px] md:mb-[43px] h-[70px] w-[70px] justify-center items-center" src={Easypay} alt="Free shipping"/>
                <div>
                    <h4 className="text-xl font-bold">Easy payments</h4>
                    <p>All payments are processed instantly over a secure payment protocol.</p>
                </div>
            </li>
            <li className="w-[22%] mt-2 mb-12 text-center md:text-center">
                <img className="m-auto mb-[28px] md:mb-[43px] h-[70px] w-[70px] justify-center items-center" src={Moneyback} alt="Free shipping"/>
                <div>
                    <h4 className="text-xl font-bold">Money-Back Guarantee</h4>
                    <p>If an item arrived damaged or you've changed your mind, you can send it back for a full refund.</p>
                </div>
            </li>
            <li className="w-[22%] mt-2 mb-12 text-center md:text-center">
                <img className="m-auto mb-[28px] md:mb-[43px] h-[70px] w-[70px] justify-center items-center" src={Quality} alt="Free shipping"/>
                <div>
                    <h4 className="text-xl font-bold">Finest Quality</h4>
                    <p> Designed to last, each of our products has been crafted with the finest materials.</p>
                </div>
            </li>
        </ul>
    </div>
</section>
)}