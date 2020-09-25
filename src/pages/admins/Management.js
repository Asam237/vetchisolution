import React, { Component } from "react";
import InputAdmin from "./InputAdmin";

class Management extends Component {

    accueil = () => {
        return (
            <React.Fragment>
                <InputAdmin holder="dev des site web" />
                <InputAdmin holder="hebergement" />
                <InputAdmin holder="sec et tech" />
                <InputAdmin holder="graphisme" />
            </React.Fragment>
        );
    }

    render() {

        return (
            <div className="rounded-lg pt-4 pb-4 px-8 border-2">
            
                <h1 className="font-bold">MANAGEMENT</h1>
                <div className="flex flex-col py-4">
                    {
                        this.accueil()
                    }
                </div>
            </div>
        )
    }
}

export default Management;