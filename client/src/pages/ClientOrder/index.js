import React, { Component } from "react";
import axios from "axios";
import {Button} from 'react-materialize';
import {Input} from 'react-materialize';
import {Row} from 'react-materialize';
// import InfoWindow from "../../components/InfoWindow";
import "./style.css";

class ClientOrder extends Component {
    state = {
          startLocation: "",
          endLocation: "",
          inputStart: "",
          inputEnd: "",
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

        if (event.target.name === "inputStart") {
            this.handleAddress1(this);
        }
        else if (event.target.name === "inputEnd") {
            this.handleAddress2(this);
            console.log("end");
        }
    };

    handleAddress1 = (thisState) => {
        const { google } = thisState.props;
        if (!google) return;
        
        const addressInput1 = document.getElementById("address1");
        const autocompleteStart = new google.maps.places.Autocomplete(addressInput1);
        // Set the data fields to return when the user selects a place.
        autocompleteStart.setFields(['address_components', 'geometry', 'icon', 'name']);
        autocompleteStart.addListener('place_changed', () => {
            console.log("autocompleteStart");
            // infowindow1.close();
            const place1 = autocompleteStart.getPlace();
            console.log(place1);
            
            // eslint-disable-next-line 
            let address1;
            if (place1.address_components) {
                address1 = [
                    // eslint-disable-next-line 
                    (place1.address_components[0] && place1.address_components[0].short_name || ''),
                    // eslint-disable-next-line 
                    (place1.address_components[1] && place1.address_components[1].short_name || ''),
                    // eslint-disable-next-line 
                    (place1.address_components[2] && place1.address_components[2].short_name || '')
                ].join(' ');
            }
            const coordinates = thisState.props.google.maps.Geocoder();
            console.log(JSON.stringify(coordinates));
            if (!place1) return;
            console.log("test1");
            console.log(JSON.stringify(place1));
            thisState.setState({ 
                startLocation: {
                    src: place1.icon,
                    name: place1.name,
                    address: address1
                }
            });
            // infowindow.open(map, marker);
        });
        
        // autocompleteStart.setTypes("changetype-all", []);
        autocompleteStart.setOptions({strictBounds: false});
    }

    handleAddress2 = (thisState) => {
        const { google } = thisState.props;
        if (!google) return;

        const addressInput2 = document.getElementById("address2");
        const autocompleteEnd = new google.maps.places.Autocomplete(addressInput2);
        // Set the data fields to return when the user selects a place.
        autocompleteEnd.setFields(['address_components', 'geometry', 'icon', 'name']);
        autocompleteEnd.addListener('place_changed', () => {
            console.log("autocompleteEnd");
            const place2 = autocompleteEnd.getPlace();
            
            // eslint-disable-next-line 
            let address2;
            if (place2.address_components) {
                address2 = [
                    // eslint-disable-next-line 
                    (place2.address_components[0] && place2.address_components[0].short_name || ''),
                    // eslint-disable-next-line 
                    (place2.address_components[1] && place2.address_components[1].short_name || ''),
                    // eslint-disable-next-line 
                    (place2.address_components[2] && place2.address_components[2].short_name || '')
                ].join(' ');
            }
            
            if (!place2.geometry) return;
            console.log(place2.geometry.location);
            thisState.setState({ 
                endLocation: {
                    src: place2.icon,
                    name: place2.name,
                    address: address2
                }
            });
            // infowindow.open(map, marker);
        });
        // autocompleteEnd.setTypes("changetype-all", []);
        autocompleteEnd.setOptions({strictBounds: false});
    }
    
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
                          id="address1"
                          value={this.state.inputStart}
                          name="inputStart"
                          onChange={this.handleInputChange}
                          type="text"
                          placeholder="Pick-Up Address"
                          ref={ref => (this.autocomplete = ref)}
                          required
                        />
                        <Input
                          id="address2"
                          value={this.state.inputEnd}
                          name="inputEnd"
                          onChange={this.handleInputChange}
                          type="text"
                          placeholder="Drop-off Address"
                          ref={ref => (this.autocomplete = ref)}
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