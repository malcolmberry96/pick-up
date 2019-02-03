import React, { Component } from 'react';


class DriverOverview extends Component {
    render () {
    return(
        <div>
            <CurrentLocation></CurrentLocation>
        
            <p>Map goes here.</p>
            <p>Customer order list goes here.</p>
        </div>
    );
}
}

export default DriverOverview;