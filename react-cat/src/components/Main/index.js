import React from "react";
import "./style.css";
import MainContent from "../MainContent/index";
import Header from "../Header/index";

class Main extends React.Component {
    render() {
        return (
            <div className="mainContent">
                <Header/>
                <MainContent/>
            </div>
        );
    }
}

export default Main;
