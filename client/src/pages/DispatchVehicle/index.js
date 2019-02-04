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
            <Collection header="Vehicles">
            <CollectionItem>Vehicle 1 </CollectionItem>
            <CollectionItem>Vehicle 2</CollectionItem>
            <CollectionItem>Vehicle 3</CollectionItem>
            <CollectionItem>Vehicle 4</CollectionItem>
            <CollectionItem>Vehicle 6</CollectionItem>
        </Collection>
        </div>
    );
    }
}

export default DispatchVehicles;