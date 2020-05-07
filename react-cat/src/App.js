import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import SideMenu from "./modules/side-menu/SideMenu";
import Main from "./modules/main/Main";


function App() {
    return(
        <Router>
            <div className="App">
                <SideMenu/>
                <Main/>
            </div>
        </Router>
    );
}

export default App;
