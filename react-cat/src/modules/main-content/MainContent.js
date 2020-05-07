import React from "react";
import About from "../about/About";
import FollowersList from "../followers-list/FollowersList";
import Subscriptions from "../subscriptions/Subscriptions";
import ReposList from "../repos-list/ReposList";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class MainContent extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/repositories">
                        <ReposList />
                    </Route>
                    <Route path="/subscriptions">
                        <Subscriptions />
                    </Route>
                    <Route path="/followers">
                        <FollowersList />
                    </Route>
                </Switch>
            </main>
        );
    }
}

export default MainContent;
