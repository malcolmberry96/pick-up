import React from "react";
import axios from "axios";
import DeliveryTable from "../../components/DeliveryTable";


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
           <DeliveryTable />
        </div>
    );
}

export default DriverOrder;