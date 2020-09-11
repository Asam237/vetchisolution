import React from 'react';
import Banner from "../assets/pictures/pic.png";

const Intro = props => {
    return (
        <div className="bg-white">

            <section className="site__intro container mx-auto px-8">
                <div className="flex items-center py-2 flex-col md:flex-row">
                    <div data-aos="fade-right" className="md:w-1/2 leading-relaxed">
<<<<<<< HEAD
                        <h1 className="text-3xl font-extrabold text-left" style={{color: '#161E2E'}}>{props.title}</h1>
                        <p className="text-left" style={{color: '#252F3F'}}>{props.subtitle}</p>
=======
                        <h1 className="text-3xl font-extrabold text-left" style={{color: '#161E2E'}}>Les petits pots de AsamMarket</h1>
                        <p className="text-left" style={{color: '#252F3F'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
>>>>>>> b8565d28b044a302eb492853bdd09c218c1d8e69
                        <div className="pt-8 flex flex-col md:flex-row">
                            <button className="bg-gray-800 md:mr-4 px-5 py-2 rounded-md text-white font-semibold">
                                Démarrer votre experience
                        </button>
                            <button className="bg-red-600 mt-4 md:mt-0 px-5 py-2 rounded-md text-white font-semibold">
                                En savoir plus
                        </button>
                        </div>
                    </div>
                    <div data-aos="flip-left" className="text-left md:ml-5 md:w-1/2">
                        <img src={Banner} className="w-auto sm:w-full h-64 sm:h-auto" />
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Intro;
