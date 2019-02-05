import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import './style.css';


export default class DeliveryTable extends Component {
    render() {
        return (

        <div>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Order #</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone No.</th>
            </tr>
        </thead>
             <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>123-456-7890</td>
                </tr>
                <tr>
                <td>2</td>
                <td>James </td>
                <td>Harden</td>
                <td>567-456-2345</td>
        </tr>
        <tr>
                <td>3</td>
                <td>Larry</td>
                <td>Bird</td>
                <td>456-908-7896</td>
            </tr>
        </tbody>
    </Table>;
    </div>
    );
 }
}


