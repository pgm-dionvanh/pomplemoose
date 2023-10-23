import React from "react"
import { LinkIcon } from "./LinkIcon";
import { HeartIcon, UserIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import { useStoreContextValue } from '../../context/store.context';
interface smallNavItems {
    name: string,
    link: string;
}

export interface NavigationProps {
    smallNavItems?: smallNavItems[]
} /* Todo make use of this */

export function SmallNavigation({ smallNavItems }: NavigationProps) {
const { authStore } = useStoreContextValue();
const authenticated = authStore.isAuthenticated;

return (
<>

    <div className="justify-end px-2 sm:px-6 hidden sm:flex header__small border-b-2 border-gray-200 p-2 bg-gray-100">
        { authenticated ? null :
        <>
            <LinkIcon id="Sign_in" name="Sign in" link="/login" icon={<UserIcon className="w-6 h-6 mr-1"/>}/>
            <LinkIcon id="Sign_up" name="Sign up" link="/register" icon={<UserPlusIcon className="w-6 h-6 mr-1"/>}/>
        </>
        }

        { authenticated ? <LinkIcon name="Wishlist" link="/wishlist" icon={<HeartIcon className="w-6 h-6 mr-1"/>}/> : null}
    </div>
</>
)
}