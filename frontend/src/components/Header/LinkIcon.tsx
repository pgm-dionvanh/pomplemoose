import React from "react"
import { Link } from "react-router-dom";


export interface LinkIconProps {
    icon: React.SVGProps<SVGSVGElement>;
    link: string;
    name: string;
    id?: string;
}

export function LinkIcon({ icon, link, name, id }: LinkIconProps) {
return (
<>
    <Link id={id} className="flex font-rubik" to={link}>
        <>
            { icon } { name }
        </>
    </Link>
</>
)
}