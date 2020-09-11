import React from 'react';

const NewLetter = () => {
    return(
        <section data-aos="fade-up" className="bg-red-600 mt-16">
            <div className="container mx-auto px-8">
                <div className="flex py-10 flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <h1 className="text-white font-black text-2xl">Vous voulez des nouvelles et des mises à jour sur les produits? </h1>
                        <p className="text-gray-300 pt-2">Inscrivez-vous à notre newsletter pour rester à jour.</p>
                    </div>
                    <div className="md:w-1/2">
                        <div className="flex flex-col md:flex-row mt-8 md:mt-0">
                            <input className="px-6 py-2 rounded" placeholder="Votre adresse mail"/>
                            <button className="px-6 py-2 border border-white rounded bg-red-600 text-white mt-2 md:mt-0 md:ml-4">M'inscrire</button>
                        </div>
                        <p className="pt-4 text-gray-300" >Nous nous soucions de la protection de vos données. Lisez notre Politique de confidentialité. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default NewLetter;