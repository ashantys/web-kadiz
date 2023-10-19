'use client';
import Link from "next/link";

const NavLink = ({href, title}) => {

    console.log({href, title});

    return(
        <Link 
         href={href}
        >
         {title}
        </Link>
    );
};

export default NavLink