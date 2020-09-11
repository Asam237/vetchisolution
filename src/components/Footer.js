import React from "react";

const Footer = () => {
    return (
        <footer className="mt-16" style={{ borderTopWidth: '0.5px' }}>
            <div className="container mx-auto text-left px-8 ">
                <div className="flex md:justify-between items-start flex-col md:flex-row py-2">
                    <p className="w-1/2 text-left text-xs">© 2020 Vetchi Solution. Tous droits réservés. </p>
                    <p className="w-1/2 text-left text-xs mt-4 sm:mt-0 md:text-right">Designer et Développé par Abba Sali </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
