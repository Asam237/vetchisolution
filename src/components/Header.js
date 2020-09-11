import React from "react";
import Logo from "../assets/pictures/0.png";
import Drap from "../assets/pictures/fr.svg";

const Header = () => {
    return (
        <header>
            <div className="site__header bg-white " style={{ borderBottomWidth: '0.5px' }}>
                <div className="container mx-auto px-8">
                    <div className="site__header__langues flex items-center justify-between py-2">
                        <a href="#" className="mr-4 text-xs md:text-md flex justify-center items-center" ><span><img className="h-5 rounded-full mr-2" src={Drap} /></span>Français (FR)</a>
                        <div>
                            <a href="#" className="mr-4 text-xs md:text-md" >Se connecter</a>
                            <a href="#" className="hidden text-xs sm:inline-block md:text-md">Créer un compte</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-xl">
                <div className="container px-8 mx-auto">
                    <div className="flex py-6 items-center  justify-between">
                        <div className="flex flex-col  md:flex-row items-start justify-center md:items-center">
                            <img className="h-24 w-auto mr-8" src={Logo} />
                            <div>
                                <a href="/" style={{ fontSize: '15px', color: '#252F3F' }} className="mr-4 hover:text-red-60000 active:text-red-400 focus:outline-none text-gray-700 hover:font-bold font-medium hover:underline">Accueil</a>
                                <a href="/service" style={{ fontSize: '15px', color: '#252F3F' }} className="mr-4 hover:text-red-600 text-gray-700 hover:font-bold font-medium hover:underline">Services</a>
                                <a href="/about" style={{ fontSize: '15px', color: '#252F3F' }} className="mr-4 hover:text-red-600 text-gray-700 hover:font-bold font-medium hover:underline">A propos</a>
                                <a href="/contact" style={{ fontSize: '15px', color: '#252F3F' }} className="mr-4 hover:text-red-600 text-gray-700 hover:font-bold font-medium hover:underline">Nous contacter</a>
                            </div>
                        </div>
                        <div className="hidden md:inline-block">
                            {/* <p>Second partie du header</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;