import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Header from '../components/Header';
import Intro from '../components/Intro';
import Serv from '../components/Serv';
import Product01 from '../components/Product01';


const Accueil = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <div className="site">
            <Intro title="Qui Sommes Nous ?" subtitle="Un groupe de jeunes professionnels passionnés par l'univers des TIC, une equipe de developpeurs complementaires pour vous servir, un menu d'expertise pour vos metiers d'entreprise et vos visions strategiques , nous sommes un ensemble de professionnels des systèmes d'informations. Nous sommes un cabinet de prestation de services, de conseil et formations en ingenierie des systemes d'informations. Ces services se detaillent sur 6 grands axes tels que presentés." />
            <Serv />
            <div className="container mx-auto pt-20">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-2xl" style={{ color: '#161E2E' }}>Nos Services Speciaux</h1>
                    <p className="text-red-600 font-medium">Tous <span className="hidden md:inline-block">les services</span></p>
                </div>
            </div>
            <Product01 />
        </div>
    )
}


export default Accueil;