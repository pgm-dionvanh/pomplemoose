import { Link } from 'react-router-dom'
import productImg from '../../assets/img/product-1.jpg';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { PRODUCTS } from '../../graphql/products';
import { ProductsQueryResponse } from '../../graphql/products';
import ProductItem from '../Products/Product';

export default function Search() {
let { term } = useParams();

const {loading, error, data} = useQuery(PRODUCTS);

if(loading) {
    return (
        <>
            Loading...
        </>
    )
}

if(error) {
    return (
        <>
            Your search returned nothing...
        </>
    )
}

const filterData = data.products.filter((product: {name: string}) => product.name.includes(term ? term : "")); /* Added short if to fix error */

return (
<section className="mt-[70px] pl-[16px] pr-[16px] sm:pl-[0px] sm:pr-[0px] m-auto mb-[70px] md:mb-[150px] max-w-[650px] md:max-w-[980px] lg:max-w-[1028px] xl:max-w-[1280px]">

    <div className="items-center flex-wrap flex flex-col md:flex-row md:justify-center gap-24">
        {filterData?.map((item: {id: number, name: string, price: number, imageUrl: string}) => (
            <ProductItem key={item.id} id={item.id} price={item.price} name={item.name} imageUrl={item.imageUrl}></ProductItem>
        ))
        }
    </div>
</section>
)}