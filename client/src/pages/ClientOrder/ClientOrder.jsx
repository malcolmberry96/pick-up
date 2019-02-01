import React, { Component } from "react";
import "./style.css";
import {Button} from 'react-materialize';
import {Input} from 'react-materialize';
import {Row} from 'react-materialize';

class ClientOrder extends Component {

    state = {
        startLocation: "",
        endLocation: "",
        loadDescription: "",
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
           {/* <p>
              Hello {this.state.firstName} {this.state.lastName}
           </p>*/}
           
            <form className="form">
            <Row>
              <Input
                value={this.state.startLocation}
                name="startLocation"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Pick-Up Location"
              />
              <Input
                value={this.state.endLocation}
                name="endLocation"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Drop-off Location"
              />
              </Row>
              <Input 
                value={this.state.vehicleRequirement}
                name="vehicleRequirement"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Vehicle Requirement"
              />
              <Input 
                value={this.state.vehicleRequirement}
                name="loadDescription"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Load Description"
              />
              <Button onClick={this.handleFormSubmit}>Submit</Button>
            </form>
          </div>
        );
      }



}


export default ClientOrder;