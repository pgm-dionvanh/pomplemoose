import { useQuery } from '@apollo/client';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS, ProductsQueryResponse } from '../../graphql/products';
import ProductItem from './Product';

export default function JustForYou() {
const query = useQuery<ProductsQueryResponse>(PRODUCTS);
const { error, loading, data }= query;

if(loading) {
    return(
        <div>
            Loading...
        </div>
    )
}

if(error) {
    return (
        <div>
            Error
        </div>
    )
}

return (
<section className="pl-[16px] pr-[16px] sm:pl-[0px] sm:pr-[0px] m-auto mb-[70px] md:mb-[150px] max-w-[650px] md:max-w-[980px] lg:max-w-[1028px] xl:max-w-[1280px]">
    <div>
        <div className="flex items-center justify-between intro mb-[35px] md:mb-[35px]">
            <h4 className="text-2xl">New Arrivals</h4>
            <Link className="background-white rounded-full border pt-2 pb-2 pr-8 pl-8" to="/products">Show all</Link>
        </div>
        <div className="items-center flex flex-wrap flex-col md:flex-row gap-20">
        {data?.products.slice(0,4).map((item: { name:string ,id: number, price: number, imageUrl: string}, key) => (
                <ProductItem key={item.id} name={item.name} price={item.price} id={item.id} imageUrl={ item.imageUrl } />
            ))
        }
        </div>
    </div>
</section>
)}