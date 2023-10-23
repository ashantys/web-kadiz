import { useEffect } from 'react';
import Link from 'react-scroll';
import Image from 'next/image';

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
    useEffect(() => {
        // Initialize Bootstrap JavaScript components here
        // Make sure to include the necessary Bootstrap scripts in your HTML
        // Example for Bootstrap 5:
        // Note: You should replace "bootstrap.min.js" and "bootstrap.bundle.min.js" with the actual paths to your Bootstrap JavaScript files.
        const bootstrapScript = document.createElement("script");
        bootstrapScript.src = "/path/to/bootstrap.min.js";
        document.body.appendChild(bootstrapScript);

        const bootstrapBundleScript = document.createElement("script");
        bootstrapBundleScript.src = "/path/to/bootstrap.bundle.min.js";
        document.body.appendChild(bootstrapBundleScript);
    }, []);

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
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration={100}
                                    className="nav-link"
                                >
                                    {link.title}
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