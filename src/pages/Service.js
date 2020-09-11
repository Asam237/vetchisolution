import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const Service = props => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
        document.title = "Vetchi Solution  |  Service"
    }, [])


    return (
        <p className="container mx-auto pt-16">Boutique Here !</p>
    )

    
}

export default Service;