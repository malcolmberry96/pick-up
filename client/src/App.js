import React, { Component } from 'react';
import {Route} from "react-router-dom"; 
import './App.css';

//page imports
import ClientOrder from "./pages/ClientOrder";
import DispatchDrivers from "./pages/DispatchDrivers";
import DispatchOverview from "./pages/DispatchOverview";
import DispatchVehicles from "./pages/DispatchVehicles";
import DriverOrder from "./pages/DriverOrder";
import DriverOverview from "./pages/DriverOverview";
import DriverSignup from "./pages/DriverSignup";
import PickupHome from "./pages/PickupHome";
import UserLogin from "./pages/UserLogin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={PickupHome}/>
        <Route path="/signup" component={DriverSignup}/>
        <Route path="/login" component={UserLogin}/>
        <Route path="/dispatch" component={DispatchOverview}/>
        <Route path="/driver" component={DriverOverview}/>
        <Route path="/dispatch/vehicles" component={DispatchVehicles}/>
        <Route path="/dipatch/drivers" component={DispatchDrivers}/>
        <Route path="/driver/order:id" component={DriverOrder}/>
        <Route path="/submit-order" component={ClientOrder}/>
      </div>
    );
  }
}

export default App;
