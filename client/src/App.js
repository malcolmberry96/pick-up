import React, { Component } from 'react';
import {Route} from "react-router-dom"; 
import './App.css';

//page imports
import ClientOrder from "./pages/ClientOrder/ClientOrder";
import DispatchDrivers from "./pages/DispatchDrivers/DispatchDrivers";
import DispatchOverview from "./pages/DispatchOverview/DispatchOverview";
import DispatchVehicles from "./pages/DispatchVehicle/DispatchVehicles";
import DriverOrder from "./pages/DriverOrder/DriverOrder";
import DriverOverview from "./pages/DriverOverview/DriverOverview";
import DriverSignup from "./pages/DriverSignup/DriverSignup";
import PickupHome from "./pages/PickupHome/PickupHome";
import UserLogin from "./pages/UserLogin/UserLogin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={PickupHome}/>
        <Route path="/signup" component={DriverSignup}/>
        <Route path="/login" component={UserLogin}/>
        <Route exact path="/dispatch" component={DispatchOverview}/>
        <Route path="/driver" component={DriverOverview}/>
        <Route exact path="/dispatch/vehicles" component={DispatchVehicles}/>
        <Route exact path="/dispatch/drivers" component={DispatchDrivers}/>
        <Route path="/driver/order:id" component={DriverOrder}/>
        <Route path="/submit-order" component={ClientOrder}/>
      </div>
    );
  }
}

export default App;
