import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const navLinks = [
    {
        title: 'Home',
        sectionId: 'header', 
    },
    {
        title: 'Nosotros',
        sectionId: 'nosotros', 
    },
    {
        title: 'Servicios',
        sectionId: 'servicios', 
    },
    {
        title: 'Contacto',
        sectionId: 'contacto', 
    },
];

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Image src="/images/logo.png" alt="Logo" width="200" height="100" className="d-inline-block align-text-top"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navLinks.map((item, index) => (
                            <li key={index}>
                                <Link 
                                    to={item.path}
                                    offset={0}
                                    duration={500}
                                    className="nav-link" 
                                    href={`#${item.sectionId}`}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

