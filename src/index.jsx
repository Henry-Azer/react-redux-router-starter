import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise";
import { createStore, applyMiddleware } from "redux";

import reducers from "./store/reducers";

import Routes from "./router/routes";

const createStoreWithMiddleware =
    applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
