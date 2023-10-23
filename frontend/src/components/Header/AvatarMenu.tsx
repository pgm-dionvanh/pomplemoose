import React, { useState } from "react"
import { Dropdown, Avatar } from 'flowbite-react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStoreContextValue } from '../../context/store.context';
import { Role, UserProfile } from "../../stores/UserStore";
import { AUTH_STORAGE_KEY } from "../../stores/UserStore";
import UserIcon from "../../assets/img/user.svg"
import { CartsQueryResponse, CART_BY_USER_ID } from "../../graphql/cart";
import { useQuery } from "@apollo/client";

export function AvatarMenu() {
    const { authStore } = useStoreContextValue();
    const authenticated = authStore.isAuthenticated;
    const navigate = useNavigate();

    const profile: UserProfile = authStore.getProfile();

    const logout = () => {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        authStore.notAuthenticated();
        navigate('/login');
    }

    const resultCartCount = useQuery<CartsQueryResponse>(CART_BY_USER_ID, { variables: { userId: Number(profile.sub) }, fetchPolicy: 'no-cache'})
    
    
    return (
        <>
            <div className="hidden md:flex items-center">
                <Link className="h-[24px]" to="/cart">
                    <button className="relative mr-2" type="button" data-drawer-target="drawer-right-example"
                        data-drawer-show="drawer-right-example" data-drawer-placement="right"
                        aria-controls="drawer-right-example">
                        <svg className="relative w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                        <span className="flex z-50 absolute justify-center items-center text-white bg-[#fbb03b] rounded-[100%] bottom-0 right-0 text-[8px] w-[13px] h-[13px] ">{ resultCartCount.data?.cartsbyuser.length }</span>
                    </button>
                </Link>
                    <Dropdown arrowIcon={false} inline={true} label={<Avatar alt="User settings" img={UserIcon}
                                style={{ width: "24px", height: "24px", top:"20px"}} />}
                            >
                            {authenticated ?
                            <>
                                <Dropdown.Header>
                                <span className="block text-sm">
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    {  profile.firstName + " " + profile.lastName }
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item>
                            Orders
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Payments
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Contact
                            </Dropdown.Item>
                            { profile.role === Role.Admin ?  
                            <> 
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    <NavLink to="/admin/dashboard">Admin panel</NavLink>
                                </Dropdown.Item> 
                            </>
                            : null }
                            <Dropdown.Divider />
                            <Dropdown.Item>
                                <a onClick={logout}>Sign out</a>
                            </Dropdown.Item>
                        </>
                        : 
                        <>
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Not signed in
                            </span>
                        </Dropdown.Header>
                    <Dropdown.Item>
                        <NavLink to="/login">Sign in</NavLink>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                    <NavLink to="/register">Sign up</NavLink>
                    </Dropdown.Item>
                        </>

                        }
                </Dropdown>
            </div>
        </>
    )
}