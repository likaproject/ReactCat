import React from "react";
import "./App.css";
import SideMenu from "./modules/side-menu/SideMenu";
import Main from "./modules/main/Main";

function App() {
    return(
        <div className="App">
            <SideMenu/>
            <Main/>
        </div>
    );
}

export default App;
