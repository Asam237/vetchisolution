import React from "react";
import "../../styles/navbad.css";
import InputAdmin from "./InputAdmin";

const MenuAdmin = () => {

    const accueil = () => {
        return (
            <React.Fragment>
                <InputAdmin holder="dev des site web" />
                <InputAdmin holder="hebergement" />
                <InputAdmin holder="sec et tech" />
                <InputAdmin holder="graphisme" />
            </React.Fragment>
        );
    }
    return (
        <div className="container mx-auto px-8">
            <div className="flex py-4 items-start">
                <div className="rounded-lg pt-4 pb-4 px-8 border-2">
                    <h1 className="font-bold">MANAGEMENT</h1>
                    <div className="flex flex-col py-4">
                        {
                            accueil()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuAdmin;