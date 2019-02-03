// DoctorMapContainer.js

import React from "react";
import DoctorsMap from "../components/DoctorsMap";

export default class DoctorsMapContainer extends React.Component {

	render() {
		return (
			<DoctorsMap
				doctors={this.props.doctors}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}