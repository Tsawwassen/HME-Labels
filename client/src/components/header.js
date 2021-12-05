import React, { Component } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Shelf Label</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  };
}
  export default Header;
  