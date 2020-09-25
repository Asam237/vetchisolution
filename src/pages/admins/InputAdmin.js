import React, { Component } from "react";
import Management from "./Management";

class InputAdmin extends Component {

    render() {
        return (
            <div>
                {/* <Management /> */}
                <div className="flex flex-col md:flex-row items-start md:items-center py-2">
                    <input className="px-2 md:px-8 py-2 text-xs border-2 rounded" placeholder={this.props.holder} />
                    <button className="px-6 py-2 text-xs border border-white rounded bg-red-600 text-white mt-1 md:mt-0 md:ml-4">Mis à jour</button>
                </div>
            </div>
        )
    }
}

export default InputAdmin;