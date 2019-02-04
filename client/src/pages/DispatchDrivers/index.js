import React, { Component } from "react";
import axios from "axios";
import {Collection} from 'react-materialize';
import {CollectionItem} from 'react-materialize';
import "./style.css";

class DispatchDrivers extends Component {

    state = {
        firstName: "",
        lastName: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        
        event.preventDefault();

        this.setState({
            fistName: "",
            lastName: ""
        });
    };

    render () {
        axios.get("/dispatch/dispatch-drivers")
            .then((response) => {
                console.log("successful");
            })
            .catch((error) => {
                console.log("error");
            });
        return (
            <div>
                <h1>Driver Dispatch</h1>
            
                
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

export default DispatchDrivers;