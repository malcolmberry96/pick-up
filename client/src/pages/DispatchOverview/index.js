import React from "react";
import axios from "axios";
import MapContainer from "../../components/MapContainer";
import DeliveryTable from "../../components/DeliveryTable"
import DriverVehicle from "../../components/DriverVehicle";


function DispatchOverview() {
    axios.get("/dispatch/dispatch-overview")
            .then((response) => {
                console.log("successful");
            })
            .catch((error) => {
                console.log("error");
            });
    return(
        <div>
            <h1>Dispatch Overview</h1>
            <MapContainer />
            <DeliveryTable />
        </div>
    );
}

export default DispatchOverview;