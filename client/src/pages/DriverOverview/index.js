import React from "react";
import axios from "axios";
import MapContainer from "../../components/MapContainer";
import DeliveryTable from "../../components/DeliveryTable";
import "./style.css";



function DriverOverview() {
    const id = 1;
    axios.get(`api/driver:${/*this.props.*/id}`)
            .then((response) => {
                console.log("successful");
            })
            .catch((error) => {
                console.log("error");
            });
    return(
        <div>
            <h1>Dispatch Main Overview</h1>
            <MapContainer />
            <div>
            <DeliveryTable />
            </div>
        </div>
           
    );
}

export default DriverOverview;