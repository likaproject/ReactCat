import React from "react";
import About from "../About/index";
import FollowersList from "../FollowersList/index";
import Subscriptions from "../Subscriptions/index";
import ReposList from "../ReposList/index";

import {Switch, Route} from "react-router-dom";

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
