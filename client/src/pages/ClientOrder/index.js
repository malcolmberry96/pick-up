import React, { Component } from "react";
import axios from "axios";
import {Button} from 'react-materialize';
import {Input} from 'react-materialize';
import {Row} from 'react-materialize';
import "./style.css";

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
        const thisState = this;
        const newOrder = {
            startLocation: this.state.startLocation,
            endLocation: this.state.endLocation,
            loadDescritpion: this.state.loadDescritpion,
            vehicleRequirement: this.state.vehicleRequirement,
            status: "pending",
            clientId: 9999
        };
        axios.post(
            "api/submit-order",
            newOrder
        ).then((response) => {
            console.log(JSON.stringify(response));
            thisState.setState({
                startLocation: "",
                endLocation: "",
                loadDescritpion: "",
                vehicleRequirement: ""
            });
        }).catch((error) => {
            console.log(JSON.stringify(error));
        });
    };
    
    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <h1>Submit a New Order</h1>
                <form className="form">
                    <Row>
                        <Input
                          value={this.state.startLocation}
                          name="startLocation"
                          onChange={this.handleInputChange}
                          type="text"
                          placeholder="Pick-Up Address"
                          required
                        />
                        <Input
                          value={this.state.endLocation}
                          name="endLocation"
                          onChange={this.handleInputChange}
                          type="text"
                          placeholder="Drop-off Address"
                          required
                        />
                    </Row>
                    <Input 
                      value={this.state.loadDescription}
                      name="loadDescription"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Load Description"
                      required
                    />
                    <Input 
                      value={this.state.vehicleRequirement}
                      name="vehicleRequirement"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Vehicle Requirement"
                      required
                    />
                    <Button onClick={this.handleFormSubmit}>Submit</Button>
                </form>
            </div>
        );
    }
}


export default ClientOrder;