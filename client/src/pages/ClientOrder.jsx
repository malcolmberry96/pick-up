import React, { Component } from "react";

class ClientOrder extends Component {

    state = {
        startLocation: "",
        endLocation: "",
        loadDescritpion: "",
        vehicleRequirement: ""
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
         startLocation: "",
         endLocation: "",
         loadDescritpion: "",
         vehicleRequirement: ""
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
                value={this.state.startLocation}
                name="startLocation"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Pick-Up Location"
              />
              <input
                value={this.state.endLocation}
                name="endLocation"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Drop-off Location"
              />
              <input 
                value={this.state.vehicleRequirement}
                name="vehicleRequirement"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Vehicle Requirement"
              />
              <input 
                value={this.state.vehicleRequirement}
                name="loadDescription"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Load Description"
              />
              <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
        );
      }



}


export default ClientOrder;