import React from 'react';
import One from "../assets/pictures/4.jpg";
import Two from "../assets/pictures/5.jpg";
import Three from "../assets/pictures/6.jpg";

const Product02 = () => {
    return (
        <section className="container mx-auto pt-16 px-8 sm:px-2 md:px-0">
            <div className="pt-3 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                <div data-aos="fade-up" className="bg-white hover:bg-gray-100 shadow-xl p-4 rounded-lg">
                    <div className="mx-auto flex flex-col justify-start">
                        <img src={One} className="z-10" />
                        <div className="leading-relaxed">
                            <h1 className="text-lg font-semibold" style={{ color: '#161E2E' }}>IT Consulting</h1>
                            <p className="text-xs" style={{ color: '#252F3F' }} >Vetchi Solution Vous Accompagne Les ESN Dans Leurs Projets Informatiques À Travers L'analyse De Faisabilité, L'assistance , Le Conseil.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="bg-white shadow-xl hover:bg-gray-100 p-4 rounded-lg">
                    <div className="mx-auto flex flex-col justify-start">
                        <img src={Two} className="z-10" />
                        <div className="leading-relaxed">
                            <h1 className="text-lg font-semibold" style={{ color: '#161E2E' }}>SIG (ArcGIS Desktop & Server)</h1>
                            <p className="text-xs" style={{ color: '#252F3F' }}>Nous Faisons Pour Les Entreprise Et Particuliers Des Remises À Niveau À Travers De Formations Professionnalisantes Dans Le Domaine Du Developpement Logiciel.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="bg-white hover:bg-gray-100 shadow-xl p-4 rounded-lg">
                    <div className="mx-auto flex flex-col justify-start">
                        <img src={Three} className="z-10" />
                        <div className="leading-relaxed">
                            <h1 className="text-lg font-semibold hover:text-white" style={{ color: '#161E2E' }}>Formations</h1>
                            <p className="text-xs hover:text-white" style={{ color: '#252F3F' }}>Nous faisons pour les entreprise et particuliers des remises à niveau à travers de formations professionnalisantes dans le domaine du developpement logiciel.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product02;