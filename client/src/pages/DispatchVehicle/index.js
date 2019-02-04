import React, { Component } from "react";
import "./style.css";
import {Collection} from 'react-materialize';
import {CollectionItem} from 'react-materialize';

class DispatchVehicles extends Component {

    render () {
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