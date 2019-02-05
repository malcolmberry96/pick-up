import React from "react";
import axios from "axios";
import MapContainer from "../../components/MapContainer";
// eslint-disable-next-line
{/*import style.css from "./style.css"*/}



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
            {/* <DoctorsMapContainer>
            <GoogleMap></GoogleMap>
                <DoctorsMap></DoctorsMap>
            </DoctorsMapContainer> */}
        </div>
           
    );
}

export default DriverOverview;