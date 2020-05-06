import React from "react";
import UserInfo from "../user-info/UserInfo";
import "./SideMenu.css";

class SideMenu extends React.Component {
    render() {
        return (
            <div className="sideMenu">
                <UserInfo/>
                <ul className="navTabs">
                    <li className="navTab">Repositories</li>
                    <li className="navTab">Subscriptions</li>
                    <li className="navTab">Followers</li>
                    <li className="navTab">About</li>
                </ul>

            <h3>SideMenu</h3>
            </div>
        );
    }
}

export default SideMenu;