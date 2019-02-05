import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import './style.css';

export default class DriverVehicle extends Component {
    render() {
        return (

        <div>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Vehicle ID #</th>
                <th>Driver ID#</th>
                <th>Vehicle Driver</th>
                <th>Phone #</th>
                <th>Licence Plate</th>
            </tr>
        </thead>
             <tbody>
                <tr>
                <td>1</td>
                <td>456</td>
                <td>Otto</td>
                <td>123-456-7890</td>
                <td>RTI 456</td>
                </tr>
            <tr>
                <td>2</td>
                <td>786 </td>
                <td>Harden</td>
                <td>567-456-2345</td>
                <td>CMJ 789</td>
        </tr>
        <tr>
                <td>3</td>
                <td>123</td>
                <td>Bird</td>
                <td>456-908-7896</td>
                <td>BDI 675</td>
            </tr>
        </tbody>
    </Table>;
    </div>
    );
 }
}