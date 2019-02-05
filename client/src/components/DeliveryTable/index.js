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
                <th>Address</th>
                <th>Phone Number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>56 Random Ave.</td>
                <td>654-690-4322</td>
                </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>3432 Random Dr.</td>
                <td>456-309-0987</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Larry</td>
                <td>The Bird</td>
                <td>2222 Cool St.</td>
                <td>123-456-78990</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Mike</td>
                <td>Dantoni</td>
                <td>123 Random St.</td>
                <td>123-456-7890</td>
            </tr>
        </tbody>
    </Table>;
    </div>
    );
 }
}


