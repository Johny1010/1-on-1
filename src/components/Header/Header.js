import React from 'react';

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import classes from './Header.module.css';

const Header = (props) => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Fit App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Diet</Nav.Link>
                    <Nav.Link href="#pricing">Training plans</Nav.Link>
                    <NavDropdown title="Your section" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Daily diet</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Your training</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Your body</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Add product</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.5">Custom training plan</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Login</Nav.Link>
                    <Nav.Link href="#memes">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;