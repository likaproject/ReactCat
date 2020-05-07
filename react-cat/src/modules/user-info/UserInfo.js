import React from "react";
import "./UserInfo.css";

class UserInfo extends React.Component {
    render() {
        return (
            <div className="userInfo">
                <h1> {this.props.name} {this.props.lastName}</h1>
            </div>
        );
    }
}

export default UserInfo;
