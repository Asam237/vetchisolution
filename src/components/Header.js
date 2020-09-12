import React from "react";
import "../styles/navbar.css"
import Logo from "../assets/pictures/0.png";
import Drap from "../assets/pictures/fr.svg";
import { myFunction } from "../js/navbar"


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
                    <div className="py-6 flex justify-between items-center topnav" id="myTopnav">
                        <div className="flex flex-col  md:flex-row items-start justify-center md:items-center md:justify-start">
                            <img className="h-24 w-auto mr-8" src={Logo} />
                            <div>
                                <a href="/" style={{ fontSize: '15px', color: '#252F3F' }} className="mr-4 hover:text-red-60000 active:text-red-400 focus:outline-none text-gray-700 hover:font-bold font-medium hover:underline">Accueil</a>
                                <a href="/service" style={{ fontSize: '15px', color: '#252F3F' }} className="mr-4 hover:text-red-600 text-gray-700 hover:font-bold font-medium hover:underline">Nos Services</a>
                                <a href="/about" style={{ fontSize: '15px', color: '#252F3F' }} className="mr-4 hover:text-red-600 text-gray-700 hover:font-bold font-medium hover:underline">Notre Equipe</a>
                                <a href="/contact" style={{ fontSize: '15px', color: '#252F3F' }} className="mr-4 hover:text-red-600 text-gray-700 hover:font-bold font-medium hover:underline">Nous contacter</a>
                            </div>
                        </div>
                        <div>
                            <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                                <i className="fa fa-bars"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;