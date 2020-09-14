import React from "react";
import "../styles/navbar.css"
import Logo from "../assets/pictures/0.png";
import Drap from "../assets/pictures/fr.svg";
import { myFunction } from "../js/navbar"


const Header = () => {
    return (
        <header>
            <div className="site__header bg-white" style={{ borderBottomWidth: '0.5px' }}>
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
            <div className="bg-white pb-10 shadow-2xl">

                {/* <div className="container px-8 mx-auto">
                    <div>
                        <div className="pt-2 pb-6 topnav flex items-center justify-between text-center" id="myTopnav">
                                <div className="flex justify-between topnav responsive md:items-center text-left items-center md:flex-row" id="myTopnav">
                                    <a href="/" ><img className="h-24 w-auto mr-8" src={Logo} /></a>
                                    <a href="/" style={{ fontSize: '15px', color: '#252F3F' }} className="mr-4 hover:text-red-60000 active:text-red-400 focus:outline-none text-gray-700 hover:font-black font-bold hover:underline">Accueil</a>
                                    <a href="/service" style={{ fontSize: '15px', color: '#252F3F' }} className="mr-4 hover:text-red-600 text-gray-700 hover:font-black font-bold hover:underline">Nos Services</a>
                                    <a href="/about" style={{ fontSize: '15px', color: '#252F3F' }} className="mr-4 hover:text-red-600 text-gray-700 hover:font-black font-bold hover:underline">Notre Equipe</a>
                                    <a href="/contact" style={{ fontSize: '15px', color: '#252F3F' }} className="mr-4 hover:text-red-600 text-gray-700 hover:font-black font-bold hover:underline">Nous contacter</a>
                                </div>
                                <a href="javascript:void(0)" className="icon" onClick={myFunction}>
                                    <div className="flex flex-col">
                                        <div className="l h-1 w-5 bg-gray-800 mb-1"></div>
                                        <div className="l h-1 w-5 bg-gray-800 mb-1"></div>
                                        <div className="l h-1 w-5 bg-gray-800"></div>
                                    </div>
                                </a>
                                {/* <div>
                                <a href="javascript:vo id(0);" className="icon" onClick={myFunction}>
                                    <i className="fa fa-bars"></i>
                                </a>
                            </div> */}
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
                <div className="border-b border-gray-200">

                    <div className="container mx-auto px-8">
                        <div className="pt-4 md:pt-6 pb-3">
                            <div className="topnav" id="myTopnav">
                                {/* <a href="/" className="active"><img className="w-12 h-auto" src={Logo}/></a> */}
                                <a href="/" className="active">ACCUEIL</a>
                                <a href="/service">NOS SERVICES</a>
                                <a href="/about">NOTRE EQUIPE</a>
                                <a href="/contact">NOUS CONTACTER</a>
                                <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                                    <i class="fa fa-bars"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;