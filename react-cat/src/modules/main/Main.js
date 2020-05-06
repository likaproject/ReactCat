import React from "react";
import "./Main.css";

import ReposList from "../repos-list/ReposList";
import Header from "../header/Header";

class Main extends React.Component {
    render() {
        return (
            <div className="mainContent">
                <Header/>
                <ReposList/>
            </div>
        );
    }
}

export default Main;