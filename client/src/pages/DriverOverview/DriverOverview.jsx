import React from "react";
import GoogleMap from './DoctorsMap';
import DoctorsMap from './DoctorsMap'
import DoctorsMapContainer from './DoctorMapContainer';


function DriverOverview() {
    return(
        <div>
            
            <DoctorsMapContainer>
            <GoogleMap></GoogleMap>
                <DoctorsMap></DoctorsMap>
            </DoctorsMapContainer>
            

        </div>
           
    );
}

export default DriverOverview;