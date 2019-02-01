import React, { Component } from "react";
import "./style.css";
import {Collection} from 'react-materialize';
import {CollectionItem} from 'react-materialize';

class DispatchVehicles extends Component {

    render () {
        return (
        <div>
            <h1>Dispatch Vehicles</h1>
            
            <Collection header="Driver Names">
            <CollectionItem>Driver 1 {this.state.firstName}</CollectionItem>
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