import React, { Component } from 'react';
import GoogleMapsContainer from './googlemap';

class DriverOverview extends Component {
    render () {
    return(
        <div>
            <GoogleMapsContainer></GoogleMapsContainer>
        </div>
    );
}
}

export default DriverOverview;