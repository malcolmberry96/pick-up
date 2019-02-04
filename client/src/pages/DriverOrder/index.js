import React from "react";
import axios from "axios";

function DriverOrder() {
    const id = 1;
    const order = 1;
    axios.get(`api/driver:${id}&order:${order}`)
        .then((response) => {
            console.log(JSON.stringify(response));
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
        });
    return(
        <div>
            <h1>Driver View of Order No. 12343</h1>
            <p>Order info goes here.</p>
        </div>
    );
}

export default DriverOrder;