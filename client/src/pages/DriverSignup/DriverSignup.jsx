import React, { Component } from "react";
<<<<<<< HEAD:client/src/pages/DriverSignup.jsx
import axios from "axios";
=======
import "./style.css";
import {Button} from 'react-materialize';
import {Input} from 'react-materialize';
import {Row} from 'react-materialize';
>>>>>>> master:client/src/pages/DriverSignup/DriverSignup.jsx

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
            [name]: value
        });
    };
    
    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
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
            "/api/driver-signup",
            newDriver
        ).then((response) => {
            // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
            //alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
            this.setState({
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
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });;
    };
    
    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
<<<<<<< HEAD:client/src/pages/DriverSignup.jsx
            <div>
              <h1>Driver Signup</h1>
              <h3>{(this.state.firstName || this.state.lastName)? `Hello ${this.state.firstName} ${this.state.lastName}` : null}</h3>
              <form className="form">
                  <p>Personal Information</p>
                  <input
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="First Name"
                    autoComplete="given-name"
                    required
                  />
                  <input
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Last Name"
                    autoComplete="family-name"
                    required
                  />
                  <input 
                    value={this.state.phoneNumber}
                    name="phoneNumber"
                    onChange={this.handleInputChange}
                    type="tel"
                    placeholder="Phone: XXX-XXX-XXXX"
                    autoComplete="tel"
                    required
                  />
                  <p>Vehicle Information</p>
                  <input 
                    value={this.state.vehicleMake}
                    name="vehicleMake"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Vehicle Make"
                    required
                  />
                  <input 
                    value={this.state.vehicleModel}
                    name="vehicleModel"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Vehicle Model"
                    required
                  />
                  <input 
                    value={this.state.vehicleYear}
                    name="vehicleYear"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Vehicle Year"
                    minLength="4"
                    maxLength="4"
                    required
                  />
                  <input
                    value={this.state.color}
                    name="vehicleColor"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Color"
                    required
                  />
                  <input 
                    value={this.state.licencePlate}
                    name="licencePlate"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Licence Plate #"
                    required
                  />
                  <p>Account Information</p>
                  <input
                    value={this.state.username}
                    name="username"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Username"
                    autoComplete="username"
                    required
                  />
                  <input
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    required
                  />
                  <button onClick={this.handleFormSubmit}>Submit</button>
              </form>
            </div>
=======
          <div>
           {/* <p>
              Hello {this.state.firstName} {this.state.lastName}
           </p> */}
          
           <p> Drivers Sign up here</p>
            <form className="form">
            <Row>
              <Input
                value={this.state.firstName}
                name="firstName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="First Name"
              />
              <Input
                value={this.state.lastName}
                name="lastName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Last Name"
              />
              </Row>
              <Input 
               value={this.state.email}
               name="email"
               onChange={this.handleInputchange}
               type="email"
               placeholder="Email"
             />
             <Row>
              <Input
                value={this.state.username}
                name="username"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Username"
              />
              <Input
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="password"
                placeholder="Password"
                />
              </Row>
              <Input 
                value={this.state.phoneNumber}
                name="phoneNumber"
                onChange={this.handleInputChange}
                type="tel"
                placeholder="Phone Number"
                />
              <Input 
                value={this.state.vehicleModel}
                name="vehicleModel"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Vehicle Model"
                />
             <Input
                value={this.state.vehicleYear}
                name="vehicleYear"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Vehicle Year"
                />
             <Input
                value={this.state.color}
                name="vehicleColor"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Color"
                />
             <Input 
                value={this.state.licencePlate}
                name="licencePlate"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Licence Plate #"
                />
              <Button onClick={this.handleFormSubmit}>Submit</Button>
              
            </form>
          </div>
>>>>>>> master:client/src/pages/DriverSignup/DriverSignup.jsx
        );
    }
}

export default DriverSignup;