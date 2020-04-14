import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import "./initialize";
import configureStore from "./configureStore";

import App from "./App";

// Pass your GraphQL endpoint to uri

const ApolloApp = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

ReactDOM.render(<ApolloApp/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
