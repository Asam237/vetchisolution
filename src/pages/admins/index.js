import React, { useEffect, Component } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"
import HeaderAdmin from "./HeaderAdmin";
import MenuAdmin from "./MenuAdmin";

class IndexAdmin extends Component {

    componentDidMount() {
        document.title = "Vetchi Solution  |  Admin"
    }

    render() {
        const displayPost = (
            <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
                <TabList>
                    <Tab><span className="text-xs font-black">ACCUEIL</span></Tab>
                    <Tab><span className="text-xs font-black">EQUIPES</span></Tab>
                    <Tab><span className="text-xs font-black">SERVICES</span></Tab>
                    <Tab><span className="text-xs font-black">CONTACTER</span></Tab>
                </TabList>
                <TabPanel><MenuAdmin /></TabPanel>
                <TabPanel>text for 2</TabPanel>
                <TabPanel>text for 3</TabPanel>
                <TabPanel>text for 4</TabPanel>
            </Tabs>
        )

        return (
            <div className="site">
                <HeaderAdmin />
                <div className="container mx-auto px-8">
                    <div className="py-5">
                        {displayPost}
                    </div>
                </div>
                {/* <MenuAdmin /> */}
            </div>
        )
    }
}

export default IndexAdmin;