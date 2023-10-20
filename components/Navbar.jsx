import { Link as NextLink } from 'next/link'; 
import ScrollTo from 'react-scroll-to';
import { useEffect, useState } from 'react';

const navLinks = [
    {
        title: "Home",
        path: "header",
    },
    {
        title: "Nosotros",
        path: "nosotros",
    },
    {
        title: "Servicios",
        path: "servicios",
    },
    {
        title: "Contacto",
        path: "contacto",
    }
];

const Navbar = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/logo.png" alt="Logo" width="200" height="100" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                {isClient && (
                                    <ScrollTo 
                                        to={link.path}
                                        spy={true}
                                        smooth={true}
                                        offset={-150}
                                        duration={100}
                                        className="nav-link"
                                    >
                                        {link.title}
                                    </ScrollTo>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;