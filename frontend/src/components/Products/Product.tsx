import { useState } from 'react'
import { Link } from 'react-router-dom'
import productImg from '../../assets/img/product-1.jpg';
export interface ProductItemProps {
    imageUrl: string;
    id: number;
    name: string;
    price: number;
}

export const imagePath = (path: string | undefined) => { /* For local images */
        return `/src/assets/img/${path}`
}

export default function ProductItem({ imageUrl, id, name, price }:ProductItemProps) {
return (
    <div className="w-[16rem] items-center flex flex-col md:flex-row gap-24">
        <Link to={'/product/' + id} className="product__item h-full w-[16rem]">
                <div  style={{ backgroundImage: `url(${ imageUrl } )`, backgroundSize: 'cover'}} className={`flex justify-end w-[16rem] h-96 bg-[url('${ imageUrl }')]`}>
                    <span>
                        <button className="flex group m-4 bg-white rounded-full border p-2 hover:bg-red-700 hover:stroke-white" type="button"><svg className="w-6 h-6 group-hover:stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button>
                    </span>
                </div>
                <div className="mt-4 product__description">
                    <h3 className="text-xl mb-2 text-gray-600">{ name }</h3>
                    <span className="text-lg text-gray-400">$ { price }</span>
                </div>
        </Link>
    </div>
)}