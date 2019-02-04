import React, { Component } from "react";
import axios from "axios";
import {Collection} from 'react-materialize';
import {CollectionItem} from 'react-materialize';
import "./style.css";

class DispatchVehicles extends Component {
    render () {
        axios.get("/dispatch/dispatch-vehicles")
            .then((response) => {
                console.log("successful");
            })
            .catch((error) => {
                console.log("error");
            });
        return (
        <div>
            <h1>Dispatch Vehicles</h1>
            
            <Collection header="Driver Names">
            <CollectionItem>Driver 1</CollectionItem>
            <CollectionItem>Driver 2</CollectionItem>
            <CollectionItem>Driver 3</CollectionItem>
            <CollectionItem>Driver 4</CollectionItem>
            <CollectionItem>Driver 6</CollectionItem>
        </Collection>
        </div>
    );
    }
}

export default DispatchVehicles;