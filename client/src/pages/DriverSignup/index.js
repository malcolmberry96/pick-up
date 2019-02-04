import React, { Component } from "react";
import axios from "axios";
import {Button} from 'react-materialize';
import {Input} from 'react-materialize';
import {Row} from 'react-materialize';
import "./style.css";

class DriverSignup extends Component {
    state = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        vehicleMake: "",
        vehicleModel: "",
        vehicleYear: "",
        vehicleColor: "",
        licencePlate: "",
        username: "",
        password: ""
    };
    
      handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value.trim()
        });
      };
    
    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        const thisState = this;
        const newDriver = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            vehicleMake: this.state.vehicleMake,
            vehicleModel: this.state.vehicleModel,
            vehicleYear: this.state.vehicleYear,
            vehicleColor: this.state.vehicleColor,
            licencePlate: this.state.licencePlate,
            username: this.state.username,
            password:this.state.password
        };
        axios.post(
            "api/driver-signup",
            newDriver
        ).then((response) => {
            // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
            //alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
            thisState.setState({
                firstName: "",
                lastName: "",
                phoneNumber: "",
                vehicleMake: "",
                vehicleModel: "",
                vehicleYear: "",
                vehicleColor:"",
                licencePlate: "",
                username: "",
                password:""
            });
            console.log(JSON.stringify(response.data));
        }).catch((error) => {
            console.log(JSON.stringify(error.data));
        });;
    };
    
    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <p> Drivers Sign up here</p>
                <form className="form">
                    <Row>
                        <p>Personal Information</p>
                        <Input
                            value={this.state.firstName}
                            name="firstName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="First Name"
                            autoComplete="given-name"
                            required
                        />
                        <Input
                            value={this.state.lastName}
                            name="lastName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Last Name"
                            autoComplete="family-name"
                            required
                        />
                    </Row>
                    <Input 
                        value={this.state.phoneNumber}
                        name="phoneNumber"
                        onChange={this.handleInputChange}
                        type="tel"
                        placeholder="Phone: XXX-XXX-XXXX"
                        autoComplete="tel"
                        required
                    />
                    <Row>
                        <p>Vehicle Information</p>
                        <Input 
                            value={this.state.vehicleMake}
                            name="vehicleMake"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Vehicle Make"
                            required
                        />
                        <Input 
                            value={this.state.vehicleModel}
                            name="vehicleModel"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Vehicle Model"
                            required
                        />
                        <Input
                            value={this.state.vehicleYear}
                            name="vehicleYear"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Vehicle Year"
                            minLength="4"
                            maxLength="4"
                            required
                        />
                        <Input
                            value={this.state.color}
                            name="vehicleColor"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Color"
                            required
                        />
                        <Input 
                            value={this.state.licencePlate}
                            name="licencePlate"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Licence Plate #"
                            required
                        />
                    </Row>
                    <p>Account Information</p>
                    <Input
                        value={this.state.username}
                        name="username"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        required
                    />
                    <Input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        required
                    />
                    <Button onClick={this.handleFormSubmit}>Submit</Button>
                </form>
            </div>
        );
    }
}

export default DriverSignup;