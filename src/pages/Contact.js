import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const Contact = props => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
        document.title = "Vetchi Solution  |  Contact"
    }, [])

    return (
        <p className="container mx-auto pt-16">Contact Here !</p>
    )
}

export default Contact;