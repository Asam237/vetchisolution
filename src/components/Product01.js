import React from 'react';
import One from "../assets/pictures/1.jpg";
import Two from "../assets/pictures/2.jpg";
import Three from "../assets/pictures/3.jpg";

const Product01 = () => {
    return (
        <section className="container mx-auto pt-16 px-8 sm:px-2 md:px-0">
            <div className="pt-3 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                <div data-aos="fade-up" className="bg-white hover:bg-gray-100 shadow-xl p-4 rounded-lg">
                    <div className="mx-auto flex flex-col justify-start">
                        <img src={One} className="z-10" />
                        <div className="leading-relaxed">
                            <h1 className="text-lg font-semibold" style={{ color: '#161E2E' }}>SI, Indices & Performances</h1>
                            <p className="text-xs" style={{ color: '#252F3F' }} >Votre Metier Grandi Et Votre Système D'informations N'y Correspond Plus? Urbanisez Votre Système D'informations. Optimisez Ses Plans Techniques Et Fonctionnels Grace À Nos Solutions Orientées Métiers.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="bg-white shadow-xl hover:bg-gray-100 p-4 rounded-lg">
                    <div className="mx-auto flex flex-col justify-start">
                        <img src={Two} className="z-10" />
                        <div className="leading-relaxed">
                            <h1 className="text-lg font-semibold" style={{ color: '#161E2E' }}>Developpement logiciel</h1>
                            <p className="text-xs" style={{ color: '#252F3F' }}>Nous Developpons Des Logiciels De Bureau , Des Applications Web Et Mobiles (Android , IOS) Tous Adaptés Aux Mesures De Vos Activités (Prise De Decisions, Commerce, Gestion Et Suivi) Et Respectant Vos Exigences De Performance, De Sécurité Et De Qualité.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="bg-white hover:bg-gray-100 shadow-xl p-4 rounded-lg">
                    <div className="mx-auto flex flex-col justify-start">
                        <img src={Three} className="z-10" />
                        <div className="leading-relaxed">
                            <h1 className="text-lg font-semibold hover:text-white" style={{ color: '#161E2E' }}>Analyse et Gestion de Données</h1>
                            <p className="text-xs hover:text-white" style={{ color: '#252F3F' }}>Vos Données Representent Vos Activités. Pour Vous, Nous Élaborons Des Bases De Données Personnalisées Robustes Et Securisées, Analysons Les Indicateurs Qualitatifs Et Quantitatifs Pour Une Meilleure Prise De Decision Dans Votre Entreprise.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product01;