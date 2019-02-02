import React, { Component } from 'react';
import "./style.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import mapImage from './img/map.jpg';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from  'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';




class Pickup extends Component {

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Pick-Up</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
    </Nav>
  </Navbar>
       
    <Container>
      <Row>
        <Col sm={6}>
         <Jumbotron>
           <h1>No truck? No Worries. </h1>
            <h3>
            Pick-Up 
            </h3>
              <h8>Schedule a hotshot pick up</h8>
            <p>
      <Button variant='primary'>Schedule</Button>
        </p>
          <div>
            <h3>
              Drive
              </h3>
                <h8>Quickly find hotshot deliveries locally.</h8>
               <p>
              <Button variant='primary'>Register</Button>
             </p>
          </div>
     </Jumbotron>
        </Col>
          <Col sm={6}>
            <Image src={mapImage} fluid />
        </Col>
      </Row>
  </Container>
</div>
    );
    }
  }

export default Pickup;
