import React, { Component } from "react";

class DriverSignup extends Component {

    state = {
        firstName: "",
        lastName: "",
        vehicleModel: "",
        vehicleYear: "",
        password: "",
        vehicleColor: "",
        licencePlate: "",
        phoneNumber: "",
        email: ""
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
    
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        //alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        this.setState({
          firstName: "",
          lastName: "",
          username: "",
          vehicleModel: "",
          vehicleYear: "",
          password:"",
          vehicleColor:"",
          licencePlate: "",
          phoneNumber: "",
          email: ""
        });
      };
    
      render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
          <div>
            <p>
              Hello {this.state.firstName} {this.state.lastName}
            </p>
            <form className="form">
              <input
                value={this.state.firstName}
                name="firstName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="First Name"
              />
              <input
                value={this.state.lastName}
                name="lastName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Last Name"
              />
              <input 
               value={this.state.email}
               name="email"
               onChange={this.handleInputchange}
               type="email"
               placeholder="Email"
             />
              <input
                value={this.state.username}
                name="username"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Username"
              />
              <input
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="password"
                placeholder="Password"
                />
              <input 
                value={this.state.phoneNumber}
                name="phoneNumber"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Phone Number"
                />
              <input 
                value={this.state.vehicleModel}
                name="vehicleModel"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Vehicle Model"
                />
             <input 
                value={this.state.vehicleYear}
                name="vehicleYear"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Vehicle Year"
                />
             <input
                value={this.state.color}
                name="vehicleColor"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Color"
                />
             <input 
                value={this.state.licencePlate}
                name="licencePlate"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Licence Plate #"
                />
              <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
        );
      }
}

export default DriverSignup;