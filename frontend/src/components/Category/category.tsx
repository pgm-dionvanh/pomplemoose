import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import { PRODUCTS, ProductsQueryResponse } from '../../graphql/products';
import ProductItem from './../Products/Product';

export default function CategoryEl() {
const { catName } = useParams();
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

const filteredData = data?.products.filter((p: { category: { name: string; }; }) => p.category.name === catName)

if(filteredData?.length === 0) {
    return (
        <div className="mt-4 mb-4 flex justify-center items-center w-full">No items found</div>
    )
}

return (
<section className="mt-12 pl-[16px] pr-[16px] sm:pl-[0px] sm:pr-[0px] m-auto mb-[70px] md:mb-12 max-w-[650px] md:max-w-[980px] lg:max-w-[1028px] xl:max-w-[1280px]">
    <div>
        <div className="flex items-center justify-between intro mb-[35px] md:mb-[35px]">
            <h4 className="text-2xl flex">{ catName } <p className="ml-4 text-gray-300">({ filteredData?.length })</p></h4>
            <div>
                <div className="flex justify-between items-center gap-2">
                    <label className="bold" htmlFor="filter1">Show products:</label>
                    <select id="filter1" className="mr-4 background-white rounded-full border pt-2 pb-2  ">
                        <option value="Popular">Popular</option>
                    </select>

                    <label className="bold" htmlFor="filter2">Sort by:</label>
                    <select id="filter2" className="background-white rounded-full border pt-2 pb-2 ">
                        <option value="Popular">Popular</option>
                    </select>
                </div>
                
            </div>
        </div>
        <div className="items-center flex flex-wrap flex-col md:flex-row gap-20">
        {filteredData?.map((item: { name:string ,id: number, price: number, imageUrl: string}, key) => (
                <ProductItem key={item.id} name={item.name} price={item.price} id={item.id} imageUrl={ item.imageUrl } />
            ))
        }
        </div>
    </div>
</section>
)}