import { NetworkStatus, useMutation, useQuery } from '@apollo/client';
import { SyntheticEvent, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { TruckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { imagePath } from '../Products/Product';
import { CartsQueryResponse, CART_BY_USER_ID, REMOVE_CART_BY_ID } from '../../graphql/cart';
import { useStoreContextValue } from '../../context/store.context';
import { UserProfile } from '../../stores/UserStore';
export default function Cart() {
    const { authStore }  = useStoreContextValue();
    const [forceUpdate] = useReducer(x => x + 1, 0);

    const profile: UserProfile = authStore.getProfile();
    const result = useQuery<CartsQueryResponse>(CART_BY_USER_ID, { variables: { userId: Number(profile.sub) }, notifyOnNetworkStatusChange: true, fetchPolicy: "cache-and-network"})
    const [deleteCart, { data, loading, error }] = useMutation(REMOVE_CART_BY_ID);
    const deleteCartItem = (e: SyntheticEvent) => {
        deleteCart({ variables: { id: parseInt(e.currentTarget.id) } }).then;
        result.refetch();
        forceUpdate();
    }

    if (result.networkStatus === NetworkStatus.refetch) return <div>Refetching...</div>;
    if (result.loading) return null;
    if (result.error) return <div>Error</div>;
return (
<section className="p-[52px]">
    <div className='flex flex-col justify-center m-auto max-w-[650px] md:max-w-[980px] lg:max-w-[1028px] xl:max-w-[1280px]'>
        <div className='flex justify-between mb-[35px] md:mb-[66px]'>
            <h3 className="text-2xl font-bold">Shopping Cart</h3>
            <div>
            <ol className="relative z-10 flex justify-between text-sm font-medium text-white">
                        <li className="flex items-center bg-white p-2">
                            <span
                                className="h-12 w-12 flex items-center justify-center rounded-full bg-[#FBB03B]  text-center text-[10px] font-bold leading-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </span>

                        </li>
                        <li className='flex items-center text-black'>
                            <hr className="w-8 md:w-48"></hr>
                        </li>

                        <li className="flex items-center bg-white p-2">
                            <span
                                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 text-center text-[10px] font-bold leading-6 text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </span>

                            <span className="hidden sm:ml-2 sm:block"> Address </span>
                        </li>

                    </ol>
            </div>
        </div>
        <div className='w-full'>
            <table className="w-full">
                <tbody>
                    <tr className="hidden md:table-row">
                        <th className='text-left'>Product</th>
                        <th className='text-left'>Color</th>
                        <th className='text-left'>Size</th>
                        <th className='text-left'>Amount</th>
                        <th className='text-left'>Price</th>
                    </tr>

                    {result.data?.cartsbyuser.map((cartItem) =>
                        <tr className="flex items-center flex-wrap flex-col md:table-row">
                        <td className="p-[10px] md:p-[20px] w-[30%] ">
                            <div className="flex items-center">
                                <div className="mr-25px md:mr-[48px] p-2 h-[70px] w-[70px] rounded-full bg-[#fafafa]">
                                    <img className="rounded-[100%] w-full h-full fit-cover" src={ cartItem.product.imageUrl }></img>
                                </div>

                            </div>
                        </td>
                        <td>Black</td>
                        <td>XL</td>
                        <td className="w-[20%]">
                        <div className='inline-flex justify-between  items-center border rounded-3xl p-4 h-[49px]'>
                            <span>{ cartItem.quantity }</span>
                        </div>

                        </td>
                        <td>$ { cartItem.product.price }</td>
                        <td> <XMarkIcon id={ cartItem.id.toString() } onClick={deleteCartItem} className="h-4 w-4"/> </td>
                    </tr>
                    )}
                    
                </tbody>
            </table>

            <div className='flex justify-evenly items-center flex-wrap mt-48'>
                <input type="text" placeholder="Promocode" />
                <Link to="/checkout">Checkout</Link>
            </div>
        </div>
    </div>
</section>
)}