import React from "react";

export default function InfoWindow(props) {
    return(
        <div id={props.id}>
            <img src={props.src} alt="" width="200" height="20" id="place-icon" />
            <span className="title">{props.name}</span><br />
            <span>{props.address}</span>
        </div>
    );
}