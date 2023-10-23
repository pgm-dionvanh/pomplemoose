import React, { useState } from "react"
import { Helmet } from "react-helmet-async";
import Footer from "../Footer/Footer";
import { Header } from "../Header/header";

export interface LayoutProps {
    title?: string;
    children: React.ReactNode | React.ReactNode[];

}

export function Layout({ children, title = "Pomplemoose" }: LayoutProps) {

    return (
        <>
        <Header/>
            <Helmet>
                <title>{ title }</title>
            </Helmet>
            <div>
                {children}
            </div>
        <Footer/>
        </>
    )
}