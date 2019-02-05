import React, { Component } from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import {Button} from 'react-materialize';
import {Input} from 'react-materialize';
import {Row} from 'react-materialize';
import "./style.css"

class UserLogin extends Component {

    state = {
        username: "",
        password: "",
        isAuthenticated: false,
        userType: ""
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
        const userLogin = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post(
            "/api/login",
            userLogin
        ).then((response) => {
            // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
            //alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
            this.setState({
                username: "",
                password:""
            });
            switch (response.data.loginType) {
                case "client":
                    thisState.setState({
                        isAuthenticated: true,
                        userType: "client"
                    });
                    break;
                case "driver":
                    thisState.setState({
                        isAuthenticated: true,
                        userType: "driver"
                    });
                    break;
                case "dispatch":
                    thisState.setState({
                        isAuthenticated: true,
                        userType: "dispatch"
                    });
                    break;
                default:
                    console.log("user not authorized");
                    break;
            }
        }).catch((error) => {
            console.log(error);
        });
    };
    
    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        if (this.state.isAuthenticated) {
            let newPath;
            switch (this.state.userType) {
                case "client":
                    newPath = "/submit-order";
                    break;
                case "driver":
                    newPath = "/driver";
                    break;
                case "dispatch":
                    newPath = "/dispatch";
                    break;
                default:
                    newPath = "/login";
                    break;
            }
            return <Redirect to={newPath} />;
        } else {
            return (
                <div>
                    <h1>Login to Pickup</h1>
                    <h5>
                    Hello {this.state.firstName} {this.state.lastName}
                    </h5>
                    <form className="form">
                    <Row>
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
                            type="text"
                            placeholder="Password"
                            autoComplete="current-password"
                            required
                        />
                        </Row>
                        <Button variant="primary" onClick={this.handleFormSubmit}>Submit</Button>
                    </form>
                </div>
            );
        }
    }
}

export default UserLogin;