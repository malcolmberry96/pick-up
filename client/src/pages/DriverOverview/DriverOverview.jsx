import React, { Component } from 'react';
import MapContainer from './googlemap';

class DriverOverview extends Component {
    render () {
    return(
        <div>
            <MapContainer></MapContainer>
        </div>
    );
}
}

export default DriverOverview;