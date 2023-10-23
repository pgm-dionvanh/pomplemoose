import { useQuery } from '@apollo/client';
import { PRODUCTS, ProductsQueryResponse } from '../../graphql/products';
import ProductItem from './../Products/Product';

export default function WishList() {
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
<section className="mt-12 pl-[16px] pr-[16px] sm:pl-[0px] sm:pr-[0px] m-auto mb-[70px] md:mb-12 max-w-[650px] md:max-w-[980px] lg:max-w-[1028px] xl:max-w-[1280px]">
    <div>
        <div className="flex items-center justify-between intro mb-[35px] md:mb-[35px]">
            <h4 className="text-2xl">Wishlist</h4>
        </div>
        <div className="items-center flex flex-col md:flex-row gap-24">
        {data?.products.map((item: { name:string ,id: number, price: number, imageUrl: string}, key) => (
                <ProductItem key={item.id} name={item.name} price={item.price} id={item.id} imageUrl={ item.imageUrl } />
            ))
        }
        </div>
    </div>
</section>
)}