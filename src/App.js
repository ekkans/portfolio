import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';
import Helmet from 'react-helmet';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet title="Sébastien Bourdu - Freelance Web Developer and UX Designer | Portfolio" />
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Hi, I'm Sébastien Bourdu</h1>
                <h4>Freelance Web Developer and UX Designer</h4>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
