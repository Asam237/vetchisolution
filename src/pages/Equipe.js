import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Banner from "../components/Banner";
import Body from "../assets/pictures/body.png";
import Instagram from "../assets/pictures/instagram.svg";
import Linkedin from "../assets/pictures/linkedin.svg";
import Twitter from "../assets/pictures/twitter.svg";

const Equipe = props => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
        document.title = "Vetchi Solution  |  A propos"
    }, [])

    return (
        <div className="site">
            <Banner title="Notre Equipe" />
            <div className="container mx-auto px-8">
                <div className="flex pt-16">
                    <p className="font-black text-gray-700 text-xl text-left md:text-center">Un groupe de jeunes professionnels passionnés par l'univers des TIC, une equipe de developpeurs complementaires pour vous servir.</p>
                </div>
            </div>
            <section className="container mx-auto px-8">
                <div className="grid gap-8 sm:grid-cols-2 pt-16 md:grid-cols-3 lg:grid-cols-4">
                    {/* Differents items */}
                    <div className="shadow-2xl hover:scale-150">
                        <div data-aos="flip-left" className="flex justify-center items-center flex-col">
                            <img src={Body} className="h-48 p-4 w-auto" />
                            <div className="mt-4 w-full leading-7 px-6 py-2 bg-red-600 flex flex-col justify-center items-center">
                                <h1 className="text-white uppercase font-black text-lg">Abba Sali</h1>
                                <p className="text-white text-xs">Proffession</p>
                                <div className="flex py-3">
                                    <div className="rounded-full flex justify-center items-center bg-white w-10 h-10 mr-2">
                                        <img src={Twitter} className="w-5 h-auto" />
                                    </div>
                                    <div className="rounded-full flex justify-center items-center bg-white w-10 h-10 mr-2">
                                        <img src={Instagram} className="w-5 h-auto" />
                                    </div>
                                    <div className="rounded-full flex justify-center items-center bg-white w-10 h-10 mr-2">
                                        <img src={Linkedin} className="w-5 h-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-2xl hover:scale-150">
                        <div data-aos="flip-left" className="flex justify-center items-center flex-col">
                            <img src={Body} className="h-48 p-4 w-auto" />
                            <div className="mt-4 w-full leading-7 px-6 py-2 bg-red-600 flex flex-col justify-center items-center">
                                <h1 className="text-white uppercase font-black text-lg">Abba Sali</h1>
                                <p className="text-white text-xs">Proffession</p>
                                <div className="flex py-3">
                                    <div className="rounded-full flex justify-center items-center bg-white w-10 h-10 mr-2">
                                        <img src={Twitter} className="w-5 h-auto" />
                                    </div>
                                    <div className="rounded-full flex justify-center items-center bg-white w-10 h-10 mr-2">
                                        <img src={Instagram} className="w-5 h-auto" />
                                    </div>
                                    <div className="rounded-full flex justify-center items-center bg-white w-10 h-10 mr-2">
                                        <img src={Linkedin} className="w-5 h-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-2xl hover:scale-150">
                        <div data-aos="flip-left" className="flex justify-center items-center flex-col">
                            <img src={Body} className="h-48 p-4 w-auto" />
                            <div className="mt-4 w-full leading-7 px-6 py-2 bg-red-600 flex flex-col justify-center items-center">
                                <h1 className="text-white uppercase font-black text-lg">Abba Sali</h1>
                                <p className="text-white text-xs">Proffession</p>
                                <div className="flex py-3">
                                    <div className="rounded-full flex justify-center items-center bg-white w-10 h-10 mr-2">
                                        <img src={Twitter} className="w-5 h-auto" />
                                    </div>
                                    <div className="rounded-full flex justify-center items-center bg-white w-10 h-10 mr-2">
                                        <img src={Instagram} className="w-5 h-auto" />
                                    </div>
                                    <div className="rounded-full flex justify-center items-center bg-white w-10 h-10 mr-2">
                                        <img src={Linkedin} className="w-5 h-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-2xl hover:scale-150">
                        <div data-aos="flip-left" className="flex justify-center items-center flex-col">
                            <img src={Body} className="h-48 p-4 w-auto" />
                            <div className="mt-4 w-full leading-7 px-6 py-2 bg-red-600 flex flex-col justify-center items-center">
                                <h1 className="text-white uppercase font-black text-lg">Abba Sali</h1>
                                <p className="text-white text-xs">Proffession</p>
                                <div className="flex py-3">
                                    <div className="rounded-full flex justify-center items-center bg-white w-10 h-10 mr-2">
                                        <img src={Twitter} className="w-5 h-auto" />
                                    </div>
                                    <div className="rounded-full flex justify-center items-center bg-white w-10 h-10 mr-2">
                                        <img src={Instagram} className="w-5 h-auto" />
                                    </div>
                                    <div className="rounded-full flex justify-center items-center bg-white w-10 h-10 mr-2">
                                        <img src={Linkedin} className="w-5 h-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container px-8 mx-auto pt-16">
                <div className="flex py-3 flex-col md:flex-row justify-start md:justify-center items-start md:items-center">
                    <p className="font-black text-gray-700 sm:text-sm lg:text-xl">Des ingenieurs venant dans tous les coins du pays juste pour vous satisfaire !</p>
                    <a href="/" className="mt-4 md:mt-0 ml-0 md:ml-4"> <button className="bg-red-600 rounded-full px-4 py-2 text-white">Nous contacter</button></a>
                </div>
            </div>
        </div>
    )
}

export default Equipe;