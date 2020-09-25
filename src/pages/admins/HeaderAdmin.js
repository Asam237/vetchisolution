import React, {Component} from "react";

class HeaderAdmin extends Component{
    render(){
        return(
            <div className="bg-red-700">
                <div className="container mx-auto px-8">
                    <div className="flex py-4 justify-between items-center">
                        <a href="/" className="text-xs font-black text-white hover:underline">VetchiSolution</a>
                        <p className="text-white text-xs font-black">Admin</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderAdmin;