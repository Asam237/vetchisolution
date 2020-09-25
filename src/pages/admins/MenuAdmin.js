import React from "react";
import "../../styles/navbad.css";
import Management from "./Management";

const MenuAdmin = () => {
    return (
        <div className="container mx-auto px-8">
            <div className="flex py-4 items-start">
                {/* <div className="w-1/3 md:w-1/4 top rounded-l-none border-l-2 rounded-lg border-r-2 border-t-2 border-b-2 ">
                    <a href="/admin" className=" w-full hover:text-black" id="myLink">ACCUEIL</a>
                    <a href="/admin/services" className="w-full hover:text-black" id="myLink">SERVICES</a>
                    <a href="/admin" className="w-full hover:text-black "id="myLink">EQUIPES</a>
                    <a href="/admin" className="w-full hover:text-black" id="myLink">CONTACTER</a>
                </div> */}
                <Management />
            </div>
        </div>
    )
}

export default MenuAdmin;