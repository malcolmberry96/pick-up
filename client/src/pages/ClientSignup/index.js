import React, { Component } from "react";
import axios from "axios";

class ClientSignup extends Component {

    state = {
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
            [name]: value
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
            "/client-signup",
            newClient
        ).then((response) => {
            // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
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
          // Notice how each input has a `value`, `name`, and `onChange` prop
          return (
              <div>
                  <h1>Signup for Pickup</h1>
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
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
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
          );
      }
}

export default ClientSignup;