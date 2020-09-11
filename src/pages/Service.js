import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Product01 from "../components/Product01";
import Product02 from "../components/Product02";

const Service = props => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
        document.title = "Vetchi Solution  |  Service"
    }, [])


    return (
        <div className="site">
            <Product01 />
            <Product02 />
        </div>
    )

    
}

export default Service;