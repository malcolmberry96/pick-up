import React, { Component } from "react";
import axios from "axios";
import {Collection} from 'react-materialize';
import {CollectionItem} from 'react-materialize';
import "./style.css";
import DriverVehicle from "../../components/DriverVehicle";

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
        <h1>Driver Overview</h1>
         <DriverVehicle></DriverVehicle>
        </div>
    );
    }
}

export default DispatchVehicles;