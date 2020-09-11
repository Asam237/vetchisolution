import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Header from '../components/Header';
import Intro from '../components/Intro';
import Serv from '../components/Serv';
import Product from '../components/Product';


const Accueil = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <div className="site">
            <Intro title="Qui Sommes Nous ?" subtitle="Un groupe de jeunes professionnels passionnés par l'univers des TIC, une equipe de developpeurs complementaires pour vous servir, un menu d'expertise pour vos metiers d'entreprise et vos visions strategiques , nous sommes un ensemble de professionnels des systèmes d'informations. Nous sommes un cabinet de prestation de services, de conseil et formations en ingenierie des systemes d'informations. Ces services se detaillent sur 6 grands axes tels que presentés." />
            <Serv />
            <Product />
        </div>
    )
}


export default Accueil;