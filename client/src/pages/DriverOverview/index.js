import React from "react";
import MapContainer from "../../components/MapContainer";
{/*import style.css from "./style.css"*/}



function DriverOverview() {
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