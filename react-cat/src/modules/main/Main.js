import React from "react";
import "./Main.css";
import MainContent from "../main-content/MainContent";
import Header from "../header/Header";

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
