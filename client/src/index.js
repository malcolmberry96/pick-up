import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './MapContainer';
// import App from './App';
// import {BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
// redux setup
// import {Provider} from "react-redux";
// import store from "./redux/store";
//component import


ReactDOM.render(
    // <Provider>
    <MapContainer />,
    // <Router>
    //     <App />
    // </Router>,
    // </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
