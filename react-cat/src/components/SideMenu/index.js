import React from "react";
import UserInfo from "../UserInfo/index";
import "./style.css";
import { Link } from "react-router-dom";


class SideMenu extends React.Component {
    render() {
        return (
            <div className="sideMenu">
                <UserInfo login={this.props.user.login}
                          avatar={this.props.user.avatar_url} />

                <ul className="navTabs">
                    <li className="navTab">
                        <Link to="/repositories">Repositories</Link>
                    </li>
                    <li className="navTab">
                        <Link to="/subscriptions">Index</Link>
                    </li>
                    <li className="navTab">
                        <Link to="/followers">Followers</Link>
                    </li>
                    <li className="navTab">
                        <Link to="/about">Index</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideMenu;
