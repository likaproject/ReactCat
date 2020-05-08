import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import SideMenu from "./modules/side-menu/SideMenu";
import Main from "./modules/main/Main";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			user: {},
			isLoaded: false
		};
    }

	getUser(userId) {
		fetch(`https://api.github.com/users`)
			.then(response => response.json())
			.then(result => result.find(user => user.id === userId))
			.then(user => this.setState({
				user: user,
				isLoaded: true
			}))
			.catch(reason => console.log('Error: ' + reason));
	}

    componentDidMount() {
		this.getUser(5);
	}

	render() {
    	const {user, isLoaded} = this.state;

		return(
            <Router>
			    <div className="App">
			        <SideMenu user={this.state.user}/>
			        <Main />
			    </div>
			</Router>
        );
    }
}

export default App;
