import React from "react"
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {

    return (
        <>
            <header className="test-intro w-full mx-auto">
                <MobileNavigation navItems={[ 
                    {
                        name: "Men",
                        link: "/category/Men"
                    },
                    {
                        name: "Women",
                        link: "/category/Women"
                    },
                    {
                        name: "Men's Active Wear",
                        link: "/category/Kids"
                    },
                    {
                        name: " Women's Active Wear",
                        link: "/category/Sport"
                    },
                    {
                        name: "Accessories",
                        link: "/category/Accessories"
                    },
                    {
                        name: "Login",
                        link: "/login"
                    },
                    {
                        name: "Sign up",
                        link: "/register"
                    }         
                ]}/>
                
                <Navigation navItems={[ 
                    {
                        name: "Men",
                        link: "/category/Men"
                    },
                    {
                        name: "Women",
                        link: "/category/Women"
                    },
                    {
                        name: "Men's Active Wear",
                        link: "/category/Men's Active Wear"
                    },
                    {
                        name: "Women's Active Wear",
                        link: "/category/Women's Active Wear"
                    },
                    {
                        name: "Accessories",
                        link: "/category/Accessories"
                    }   
                ]}/>
            </header>
        </>
    )
}