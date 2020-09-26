import React, { Component } from "react";
import axios from "axios";

class InputAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            parag: [],
            isLoading: false
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(reponse => {
                this.setState({
                    parag: reponse.data
                })
            })
            .then(error => { console.log("Erreur provenant du serveur") })
    }

    render() {

        const { parag, isLoading } = this.state;

        return (
            <React.Fragment>

                {
                    parag.length ? parag.map(
                        pp => {
                            return (
                                <div>
                                    <p className="text-xs font-medium">{pp.name}</p>
                                    <div className="flex flex-col md:flex-row items-start md:items-center py-1">
                                        <input className="px-2 md:px-8 py-2 text-xs border-2 rounded" placeholder={this.props.holder} />
                                        <button className="px-6 py-2 text-xs border border-white rounded bg-red-600 text-white mt-1 md:mt-0 md:ml-4">Mis à jour</button>
                                    </div>
                                </div>
                            )
                        }
                    ) : null
                }
                {
                    isLoading ? <p>Erreur du serveur</p> : null
                }
            </React.Fragment>
        )
    }
}

export default InputAdmin;