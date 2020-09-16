import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Logo from "../assets/pictures/0.png"

const Login = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div style={{ height: '70vh' }} className="w-full h-64 h flex justify-center items-center">
            <div className="w-full md:w-1/4 shadow-xl bg-white p-4">
                <div className="flex flex-col">
                    <div><img src={Logo} className="w-auto h-32" /></div>
                    <h1 className="text-xs">Identifiant ou adresse email</h1>
                    <input type="text" placeholder="Nom d'utilisateur" className="border p-1 mt-2" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-xs mt-4">Mot de passe</h1>
                    <input type="password" placeholder="Mot de passe" className="border p-1 mt-2" />
                </div>
                <button className="bg-red-700 mt-4 p-1 text-white rounded-sm text-xs">Se connecter</button>
            </div>
        </div>
    )
}

export default Login;