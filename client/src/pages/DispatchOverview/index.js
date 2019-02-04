import React from "react";
import axios from "axios";
import MapContainer from "../../components/MapContainer";

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
            <h1>Dispatch Main Overview</h1>
            <MapContainer />
            <p>Order go here.</p>
        </div>
    );
}

export default DispatchOverview;