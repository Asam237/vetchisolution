import React, {useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const Apropos = props => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
        document.title = "Vetchi Solution  |  A propos"
    }, [])

    return (
        <p className="container mx-auto pt-16">Propos Here !</p>
    )
}

export default Apropos;