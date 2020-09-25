import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Banner from "../components/Banner";
import Header from "../components/Header";

const Contact = props => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
        document.title = "Vetchi Solution  |  Contact"
    }, [])

    return (
        <div className="site">
            <Header />
            <Banner title="Nous Contacter" />
            <div className="bg-white py-12">
                <div className="container mx-auto px-8">
                    <h1 className="text-3xlxl py-5">CONTACTEZ NOUS</h1>
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col">
                            <div className="flex flex-col md:flex-row">
                                <input placeholder="Nom" className="border px-4 py-1 md:mr-4 " />
                                <input placeholder="Email" className="mt-3 md:mt-0 border px-4 py-1 " />
                            </div>
                            <input placeholder="Message" className="mt-3 border px-4 pb-20" />
                            <button className="text-center mt-3 bg-red-700 w-24 px-2 py-2  text-xs rounded-md text-white">ENVOYEZ</button>
                        </div>
                        {/* <div className="w-full">
                            <div className="bg-red-400 mt-3 md:mt-0 md:ml-4 p-5">
                                <div>
                                    <p className="text-white text-sm">+237 691 84 69 22</p>
                                    <p className="text-white text-sm">+237 691 84 69 22</p>
                                </div>
                            </div>
                            <div className="bg-red-600 md:ml-4 p-5">
                                <div>
                                    <p className="text-white text-sm">+237 691 84 69 22</p>
                                    <p className="text-white text-sm">+237 691 84 69 22</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-8 pt-12">
                <p data-aos="fade-left" className="text-lg text-gray-600 font-extrabold">Notre equipe technique vous repondra sous peu ! merci pour l'intéret que vous nous portez.</p>
            </div>
        </div>
    )
}

export default Contact;