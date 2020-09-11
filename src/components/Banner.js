import React from "react";

const Banner = props => {
    return(
        <section className="h-48 bg-red-700 w-full flex items-center justify-center">
            <h1 className="text-white text-3xl font-semibold">{props.title}</h1>
        </section>
    )
}


export default Banner;