import React, { Component } from "react";
import axios from "axios";

class UserLogin extends Component {

    state = {
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
            console.log(JSON.stringify(response));
        }).catch((error) => {
            console.log(JSON.stringify(error));
        });
    };
    
    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <h1>Login to Pickup</h1>
                <p>
                  Hello {this.state.firstName} {this.state.lastName}
                </p>
                <form className="form">
                    <input
                        value={this.state.username}
                        name="username"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Username"
                        autocomplete="username"
                        required
                    />
                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Password"
                        autocomplete="current-password"
                        required
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default UserLogin;