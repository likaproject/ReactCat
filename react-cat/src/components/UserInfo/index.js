import React from "react";
import "./style.css";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

class UserInfo extends React.Component {
    render() {
        return (
            <div className="userInfo">
                <img src={this.props.avatar} />
                <h1>{this.props.login}</h1>
            </div>
        );
    }
}

export default UserInfo;
