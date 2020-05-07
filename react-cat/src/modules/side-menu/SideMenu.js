import React from "react";
import UserInfo from "../user-info/UserInfo";
import "./SideMenu.css";
import { Link } from "react-router-dom";


class SideMenu extends React.Component {
    render() {
        return (
                <div className="sideMenu">
                    <UserInfo name="John" lastName="Dow"/>

                    <ul className="navTabs">
                        <li className="navTab">
                            <Link to="/repositories">Repositories</Link>
                        </li>
                        <li className="navTab">
                            <Link to="/subscriptions">Subscriptions</Link>
                        </li>
                        <li className="navTab">
                            <Link to="/followers">Followers</Link>
                        </li>
                        <li className="navTab">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default SideMenu;
