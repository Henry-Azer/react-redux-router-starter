import React from "react";
import { render } from "react-dom";

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./store/reducers";

import Routes from "./router/routes";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <Router>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById("root")
);
