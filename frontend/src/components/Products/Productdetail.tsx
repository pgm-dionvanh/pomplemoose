import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { useStoreContextValue } from '../../context/store.context';
import { CREATE_CART } from '../../graphql/cart';
import { ProductQueryResponse, PRODUCT_BY_ID } from '../../graphql/products';
import { UserProfile } from '../../stores/UserStore';
import ProductColorInput from './ProductColor'

export default function ProductDetail() {
const [count, setCount] = useState<number>(1);
const [color, setColor] = useState<string>('');
const [itemSize, setItemSize] = useState<string>('');

const { authStore } = useStoreContextValue();

const profile: UserProfile = authStore.getProfile();

const onColorSet = (e: React.SyntheticEvent<HTMLInputElement>) => setColor(e.currentTarget.value);
const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setItemSize(e.target.value);
const navigate = useNavigate();

const [createCart, { data, loading, error }] = useMutation(CREATE_CART);


const addToCart = () => {
    createCart({
        variables: {
            productId: result.data?.product?.id,
            quantity: count,
            userId: profile.sub,
            color: color
        }
    });
    console.log("Item quantity:", count)
    console.log("Item size:", itemSize);
    console.log("Item color:", color);
    console.log("Item id:", result.data?.product?.id);
    console.log("User id:", profile.sub);
    
    return navigate('/cart');


}

const { productId } = useParams();
const result = useQuery<ProductQueryResponse>(PRODUCT_BY_ID, { variables: { id: Number(productId) }})

if(result.error) {
    return (
        <div>
            Error
        </div>
    )
}

if(result.loading) {
    return(
        <div>Loading...</div>
    )
}
return (
<>
    <div className="mb-2 ">
        <div className="m-auto mt-12 max-w-[650px] md:max-w-[980px] lg:max-w-[1028px] xl:max-w-[1280px]">
            <div className="flex flex-wrap items-start mb-[100px]">
                <div className="flex flex-wrap  justify-center  mb-[100px] sm:mr-[110px]">
                    <div className="mr-4 hidden md:block h-[300px] md:h-[491px] md:w-[97px]">
                        <div className="h-[97px] md:h-[calc(20%- 15px)] w-full">
                            <img className="h-full w-full" src={  result.data?.product.imageUrl }></img>
                        </div>
                    </div>
                    <div className="flex items-center h-[300px] w-full md:w-[476px] md:h-[386px]">
                        <img className="h-full" src={  result.data?.product.imageUrl } alt="" />
                    </div>
                </div>
                <div className="m-auto md: max-w-[650px] md:max-w-[980px] lg:max-w-[1028px] xl:max-w-[1280px]">
                    <div className="intro text-right right-0">
                        <h5>PRODUCT ID: <br />{ result.data?.product.id } </h5>
                    </div>
                    <h2 className="text-3xl mb-2">{ result.data?.product.name }</h2>
                    <div>
                        <span className="text-xl">$ { result.data?.product.price }</span>
                    </div>
                    <div className="mt-12">
                        <h5>Color:</h5>
                        <div>
                            <div className="flex">
                                <ProductColorInput onClick={onColorSet} colorCode='black'></ProductColorInput>
                                <ProductColorInput onClick={onColorSet} colorCode='yellow-400'></ProductColorInput>
                                <ProductColorInput onClick={onColorSet} colorCode='red-400'></ProductColorInput>
                                <ProductColorInput onClick={onColorSet} colorCode='green-600'></ProductColorInput>
                                <ProductColorInput onClick={onColorSet} colorCode='black'></ProductColorInput>

                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <h5>Sizes: <b>See size table</b></h5>
                        <div>
                            <select onChange={onSelectChange} className="mt-4 rounded-full border">
                                <option>Choose size</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-12">
                        <h5>Quantity:</h5>
                        <div className="flex items-center">
                        <div className='inline-flex justify-between w-[120px] items-center border mr-4 rounded-3xl p-4 h-[49px]'>
                            <button type="button" onClick={()=> setCount(count - 1)} className="quantity-button__btn">
                                -
                            </button>
                            <span>{count}</span>
                            <button type="button" onClick={()=> setCount(count + 1)} className="quantity-button__btn">
                                +
                            </button>
                        </div>
                            <button onClick={addToCart} className="border pl-4 pr-4 pt-4 pb-4 rounded-3xl bg-[#FAB548] text-white">Add to cart</button>
                            <span>
                                <button className="flex group m-4 bg-white rounded-full border p-2 hover:bg-red-700 hover:stroke-white" type="button"><svg className="w-6 h-6 group-hover:stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)}