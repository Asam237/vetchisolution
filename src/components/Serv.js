import React from "react";
import Banner from "./Banner";

const Serv = () => {
    return(
            <section className="mx-2 md:mx-0 pt-16 rounded-lg">
                <div className="py-4 bg-white shadow-xl px-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto ">
                    <div className="mt-4 md:mr-4">
                        <h1 className="text-base font-semibold" style={{color: '#161E2E'}}>développement de site Web et de logiciels</h1>
                        <p className="text-xs" style={{color: '#252F3F'}}>Conception et développement de logiciels sur mesure ...</p>
                    </div>
                    <div className="mt-4 md:mr-4">
                        <h1 className="text-base font-semibold" style={{color: '#161E2E'}}>Hébergement de données sur des serveurs dédiés / cloud</h1>
                        <p className="text-xs" style={{color: '#252F3F'}}>Vos informations stockées où vous voulez et comme vous le souhaitez ...</p>
                    </div>
                    <div className="mt-4 md:mr-4">
                        <h1 className="text-base font-semibold" style={{color: '#161E2E'}}>Sécurité des technologies de l'information</h1>
                        <p className="text-xs" style={{color: '#252F3F'}}>Assurer la disponibilité, la confidentialité, l'intégrité et la traçabilité ...</p>
                    </div>
                    <div className="mt-4 md:mr-4">
                        <h1 className="text-base font-semibold" style={{color: '#161E2E'}}>Conception graphique et communication visuelle</h1>
                        <p className="text-xs" style={{color: '#252F3F'}}>Créez vos logos, bannières, brochures, spots publicitaires, cartes de visite ...</p>
                    </div>
                </div>
        </section>
    )
}

export default Serv;