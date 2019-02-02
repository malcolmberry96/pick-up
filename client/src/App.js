import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom"; 

//page imports
import ClientOrder from "./pages/ClientOrder";
import DispatchDrivers from "./pages/DispatchDrivers";
import DispatchOverview from "./pages/DispatchOverview";
import DispatchVehicle from "./pages/DispatchVehicle";
import DriverOrder from "./pages/DriverOrder";
import DriverOverview from "./pages/DriverOverview";
import DriverSignup from "./pages/DriverSignup";
import ClientSignup from "./pages/ClientSignup";
import PickupHome from "./pages/PickupHome";
import UserLogin from "./pages/UserLogin";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PickupHome}/>
        <Route path="/signup/driver" component={DriverSignup}/>
        <Route path="/signup/client" component={ClientSignup}/>
        <Route path="/login" component={UserLogin}/>
        <Route exact path="/dispatch" component={DispatchOverview}/>
        <Route path="/driver" component={DriverOverview}/>
        <Route exact path="/dispatch/vehicles" component={DispatchVehicle}/>
        <Route exact path="/dispatch/drivers" component={DispatchDrivers}/>
        <Route path="/driver/order:id" component={DriverOrder}/>
        <Route path="/submit-order" component={ClientOrder}/>
      </Switch>
    );
  }
}

export default App;
