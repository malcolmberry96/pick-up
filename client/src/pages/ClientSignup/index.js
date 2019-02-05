import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
import {Button} from 'react-materialize';
import {Input} from 'react-materialize';
import {Row} from 'react-materialize';

 
class ClientSignup extends Component {

    state = {
            successfulSignup: false,
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
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
        const newClient = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            username: this.state.username,
            password:this.state.password
        };
        axios.post(
            "api/client-signup",
            newClient
        ).then((response) => {
            thisState.setState({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                username: "",
                password:""
            });
            console.log(JSON.stringify(response.data));
        }).catch((error) => {
            console.log(JSON.stringify(error.data));
        });;
    };
    
    render() {
        if(this.state.successfulSignup) {
            this.setState({successfulSignup: false});
            return(<Redirect to="/login" />);
        }
        else {
            return (
              <div>
                  <h1>Signup for Pickup</h1>
                  <h3>{(this.state.firstName || this.state.lastName)? `Hello ${this.state.firstName} ${this.state.lastName}` : null}</h3>
                  <form className="form">
                  
                      <h5>Personal Information</h5>
                    <Row>
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
                      <Input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        required
                      />
                      <Input
                        value={this.state.phoneNumber}
                        name="phoneNumber"
                        onChange={this.handleInputChange}
                        type="tel"
                        placeholder="Phone: XXX-XXX-XXXX"
                        autoComplete="tel"
                        required
                      />
                      </Row>
                      <h5>Account Information</h5>
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
}

export default ClientSignup;