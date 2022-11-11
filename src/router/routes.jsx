import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/home";
import Users2 from "../components/user/users-hooks";

export default function routes() {
    return (
        <Switch>  
            <Route path="/users" component={Users2} />
            <Route exact path="/" component={Home} />
        </Switch>
    );
}
